import { GoogleGenAI, Type } from "@google/genai";

// Standardize model choice
const MODEL_NAME = "gemini-3-flash-preview";

let aiInstance: GoogleGenAI | null = null;

function getAI() {
  if (!aiInstance) {
    // Note: In AI Studio, process.env.GEMINI_API_KEY is defined via vite.config.ts
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey || apiKey === "undefined" || apiKey === "" || apiKey === "MY_GEMINI_API_KEY") {
      const reason = (!apiKey || apiKey === "") ? "NOT_SET" : (apiKey === "MY_GEMINI_API_KEY" ? "PLACEHOLDER" : "UNDEFINED");
      throw new Error(`MISSING_API_KEY_${reason}`);
    }
    aiInstance = new GoogleGenAI({ apiKey });
  }
  return aiInstance;
}

const API_KEY_INSTRUCTIONS = "Instructions: 1. Click 'Settings' (gear icon) -> 'Secrets'. 2. Click 'Add Secret'. 3. Name it 'VITE_GEMINI_API_KEY' (exactly this name). 4. Paste your key from https://aistudio.google.com/app/apikey. 5. Save and refresh the browser.";

function handleGeminiError(error: any) {
  const msg = (error.message || "").toLowerCase();
  
  if (msg.includes("missing_api_key")) {
    let detail = "It looks like the key is not set.";
    if (msg.includes("placeholder")) detail = "It looks like a placeholder value ('MY_GEMINI_API_KEY') was detected instead of your actual key.";
    return `Configuration Error: ${detail} ${API_KEY_INSTRUCTIONS}`;
  }
  
  if (msg.includes("api_key_invalid") || msg.includes("invalid api key") || msg.includes("unauthorized")) {
    return `Invalid API Key: The provided Gemini key is not valid. ${API_KEY_INSTRUCTIONS}`;
  }

  if (msg.includes("429") || msg.includes("quota")) {
    return "Rate limit exceeded: Too many requests. Please wait a minute.";
  }

  return "I'm having trouble connecting to the assistant. Please try again later.";
}

export async function askElectSense(prompt: string, language: string = 'English') {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      config: {
        systemInstruction: `You are ElectSense, a civic education assistant for India's election process. Answer clearly in 3-5 sentences. Be neutral, factual, and encouraging of civic participation. Always respond in ${language}.`,
      },
    });
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error: any) {
    console.error("Gemini API Error (Ask):", error);
    return handleGeminiError(error);
  }
}

export async function factCheckClaim(claim: string, language: string = 'English') {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: claim,
      config: {
        systemInstruction: `You are an Indian election fact-checker. Analyze the claim. Respond with VERDICT, EXPLANATION, and SOURCE. Always respond in ${language}.`,
      },
    });
    return response.text || "I'm sorry, I couldn't verify this claim.";
  } catch (error: any) {
    console.error("Gemini API Error (Fact Check):", error);
    return handleGeminiError(error);
  }
}

export async function findConstituency(pincode: string) {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: `Find electoral data for Indian pincode: ${pincode}`,
      config: {
        systemInstruction: "You are an Indian electoral data assistant. Provide Lok Sabha, Vidhan Sabha, State, District, Current MP, Last Election Year, Voter Helpline, and ECI URL. For eci_url, always prefer 'https://electoralsearch.eci.gov.in/' for voter name searches unless a more specific state-level direct link is available. If mapping is unknown, return an error field.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            lok_sabha: { type: Type.STRING },
            vidhan_sabha: { type: Type.STRING },
            state: { type: Type.STRING },
            district: { type: Type.STRING },
            current_mp: { type: Type.STRING },
            last_election_year: { type: Type.STRING },
            voter_helpline: { type: Type.STRING },
            eci_url: { type: Type.STRING },
            error: { type: Type.STRING }
          },
          required: ["lok_sabha", "vidhan_sabha", "state", "district"]
        }
      },
    });
    
    const text = response.text;
    if (!text) throw new Error("EMPTY_RESPONSE");
    return text;
  } catch (error: any) {
    console.error("Gemini API Error (Find):", error);
    
    const handledMsg = handleGeminiError(error);
    if (handledMsg.includes("Config") || handledMsg.includes("Invalid")) {
      return JSON.stringify({ error: handledMsg });
    }

    let userMsg = "Electoral data lookup failed. Please try again.";
    const errorStr = (error?.message || "").toLowerCase();

    if (errorStr.includes("429") || errorStr.includes("quota")) {
      userMsg = "Too many requests. Please wait a minute.";
    } else if (errorStr.includes("empty")) {
      userMsg = "No data received for this pincode.";
    }
    
    return JSON.stringify({ error: userMsg });
  }
}

