export type Language = 'en' | 'hi' | 'ta' | 'te' | 'ml' | 'bn';

export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'bn', name: 'বাংলা' },
];

export const translations: Record<Language, any> = {
  en: {
    title: "ElectSense",
    subtitle: "India",
    tagline: "National Civic Education Portal",
    motto: "Satyamev Jayate",
    copyright: "© 2026 ElectSense India • Empowering the First-Time Voter",
    tabs: {
      timeline: "Timeline",
      ask: "Ask AI",
      quiz: "Quiz",
      factcheck: "Fact Check",
      tryvoting: "Try Voting",
      constituency: "My Constituency"
    },
    constituency: {
      heading: "Find My Constituency",
      subheading: "Enter your 6-digit pincode to find your electoral boundaries.",
      placeholder: "e.g., 110001",
      button: "Find My Constituency",
      examples: "Example Pincodes:",
      lokSabha: "Lok Sabha Constituency",
      vidhanSabha: "Vidhan Sabha Constituency",
      mp: "Current MP (Party)",
      voterList: "Check Name on Voter List",
      helpline: "Call Voter Helpline (1950)",
      loading: "Identifying your boundaries...",
      invalid: "Please enter a valid 6-digit Indian pincode."
    },
    timeline: {
      heading: "Journey of the Indian Election",
      phasePrefix: "Phase"
    },
    askAi: {
      heading: "Ask ElectSense",
      subheading: "Powered by Gemini AI • Neutral & Factual",
      placeholder: "Ask about EVMs, MCC, or the 272 majority rule...",
      greeting: "Namaste! I am ElectSense. I'm here to help you understand India's election process. What would you like to know?",
      thinking: "Thinking..."
    },
    quiz: {
      questionPrefix: "Question",
      of: "of",
      next: "Next Question",
      results: "View Results",
      completed: "Quiz Completed!",
      subtext: "You have a strong understanding of our democracy.",
      retake: "Retake Quiz",
      feedback: {
        perfect: "Citizen Supreme! You know your rights perfectly.",
        good: "Great job! You're ready to vote responsibly.",
        learning: "Good effort. Explore the Timeline to learn more!"
      }
    },
    factCheck: {
      heading: "Fake News Detector",
      subheading: "Verify WhatsApp forwards and election claims instantly.",
      label: "Paste Claim or Message",
      placeholder: "e.g., EVMs can be hacked via Bluetooth...",
      button: "Check This Claim",
      verifying: "Verifying...",
      verdict: "Verdict",
      explanation: "Explanation",
      source: "Official Source"
    },
    tryVoting: {
      heading: "Try Voting",
      ballotUnit: "Ballot Unit",
      deviceInfo: "Electronic Voting Machine • Bharat Electronics Ltd.",
      howItWorks: "How it works",
      step1: "Voters press the Blue Button next to their preferred candidate's name and symbol.",
      step2: "A long BEEP sound confirms the vote has been electronically recorded.",
      step3: "The VVPAT machine shows a paper slip with the chosen candidate for 7 seconds for visual verification.",
      vvpatSystem: "VVPAT System",
      waiting: "Waiting for Ballot...",
      success: "Vote Cast Successfully!",
      successDetail: "In a real election, this slip would be visible for 7 seconds then drop into a sealed box automatically.",
      reset: "Reset Simulation"
    },
    timelineData: [
      { id: 1, title: "Election Announcement", description: "The Election Commission of India (ECI) announces the schedule.", details: ["Schedule of dates for nomination, polling, and counting is released.", "Model Code of Conduct (MCC) comes into force immediately.", "Government is prohibited from announcing new projects or schemes."] },
      { id: 2, title: "Voter Roll Finalization", description: "Electoral rolls are published and verified.", details: ["ECI publishes updated electoral rolls for all constituencies.", "Voters can verify their names via the 1950 helpline or National Voters' Service Portal.", "New applications for voter ID cards are processed."] },
      { id: 3, title: "Candidate Nomination", description: "Candidates file their papers with the Returning Officer.", details: ["Candidates must file nominations at the Returning Office.", "A security deposit of ₹25,000 (General) or ₹12,500 (SC/ST) is required.", "A scrutiny window is provided for valid nominations."] },
      { id: 4, title: "Campaign Period", description: "Political parties and candidates reach out to voters.", details: ["Campaigning typically lasts 14-21 days.", "Adherence to MCC rules is mandatory.", "Expense cap for Lok Sabha candidates is set at ₹95 lakh (in larger states)."] },
      { id: 5, title: "Silent Period & Polling Day", description: "The 48-hour quiet period followed by actual voting.", details: ["48-hour 'silence period' begins before the end of polling.", "Voters use Electronic Voting Machines (EVMs).", "Voters can verify their vote through VVPAT (Voter Verifiable Paper Audit Trail)."] },
      { id: 6, title: "Vote Counting & Results", description: "Votes are tallied across all counting centers.", details: ["Counting begins at 8:00 AM on the designated day.", "First postal ballots are counted, then EVM results.", "A simple majority of 272+ seats in the Lok Sabha is required to form the government."] },
      { id: 7, title: "Government Formation & Oath", description: "The majority leader is invited to lead the nation.", details: ["The President of India invites the leader of the single largest party or coalition.", "The Prime Minister and the Council of Ministers are sworn in at Rashtrapati Bhavan.", "The new government must prove its majority on the floor of the house if requested."] }
    ],
    quizData: [
      { id: 1, question: "What is the primary device used by voters in India to cast their ballots?", options: ["Paper Ballot", "EVM (Electronic Voting Machine)", "Mobile App", "Punch Card"], correctAnswer: 1, explanation: "India uses EVMs to ensure fast, secure, and accurate tallying of votes across the country." },
      { id: 2, question: "Which system allows a voter to physically verify that their vote was cast correctly?", options: ["OTP Verification", "VVPAT", "Ink Mark", "Digital Receipt"], correctAnswer: 1, explanation: "Voter Verifiable Paper Audit Trail (VVPAT) prints a slip for 7 seconds to show the voter their selected candidate." },
      { id: 3, question: "What is the set of guidelines issued by the ECI to regulate parties and candidates during elections?", options: ["Election Law", "Democracy Rulebook", "Model Code of Conduct (MCC)", "The Constitution"], correctAnswer: 2, explanation: "The Model Code of Conduct (MCC) ensures fair play and prevents the ruling party from misusing government machinery." },
      { id: 4, question: "How many seats are needed to reach a simple majority in the Lok Sabha?", options: ["250", "300", "272", "543"], correctAnswer: 2, explanation: "With 543 elected seats, a party or coalition needs 272 seats to form the government." },
      { id: 5, question: "The 'Silent Period' before polling begins lasts for how many hours?", options: ["12 hours", "24 hours", "48 hours", "72 hours"], correctAnswer: 2, explanation: "The 48-hour silent period ensures voters have time to reflect without the influence of active campaigning." },
      { id: 6, question: "What is the security deposit for a General category candidate in a Lok Sabha election?", options: ["₹10,000", "₹25,000", "₹50,000", "₹1,00,000"], correctAnswer: 1, explanation: "Candidates must deposit ₹25,000, which is forfeited if they fail to secure at least 1/6th of the valid votes." },
      { id: 7, question: "Which constitutional body is responsible for conducting elections in India?", options: ["Supreme Court", "Parliament", "Election Commission of India (ECI)", "NITI Aayog"], correctAnswer: 2, explanation: "The ECI is an autonomous constitutional authority responsible for administering election processes in India." }
    ]
  },
  hi: {
    title: "इलेक्टसेंस",
    subtitle: "इंडिया",
    tagline: "राष्ट्रीय नागरिक शिक्षा पोर्टल",
    motto: "सत्यमेव जयते",
    copyright: "© 2026 इलेक्टसेंस इंडिया • प्रथम बार के मतदाताओं को सशक्त बनाना",
    tabs: {
      timeline: "समयरेखा",
      ask: "AI से पूछें",
      quiz: "प्रश्नोत्तरी",
      factcheck: "तथ्य जाँच",
      tryvoting: "मतदान करें",
      constituency: "मेरा निर्वाचन क्षेत्र"
    },
    constituency: {
      heading: "निर्वाचन क्षेत्र ढूँढें",
      subheading: "अपनी चुनावी सीमाओं को खोजने के लिए अपना 6 अंकों का पिनकोड दर्ज करें।",
      placeholder: "जैसे: 110001",
      button: "निर्वाचन क्षेत्र ढूँढें",
      examples: "उदाहरण पिनकोड:",
      lokSabha: "लोकसभा निर्वाचन क्षेत्र",
      vidhanSabha: "विधानसभा निर्वाचन क्षेत्र",
      mp: "वर्तमान सांसद (पार्टी)",
      voterList: "मतदाता सूची में नाम जाँचें",
      helpline: "मतदाता हेल्पलाइन (1950) पर कॉल करें",
      loading: "आपकी सीमाओं की पहचान की जा रही है...",
      invalid: "कृपया एक वैध 6 अंकों का भारतीय पिनकोड दर्ज करें।"
    },
    timeline: {
      heading: "भारतीय चुनाव की यात्रा",
      phasePrefix: "चरण"
    },
    askAi: {
      heading: "इलेक्टसेंस से पूछें",
      subheading: "Gemini AI द्वारा संचालित • तटस्थ और तथ्यात्मक",
      placeholder: "EVM, MCC, या 272 बहुमत नियम के बारे में पूछें...",
      greeting: "नमस्ते! मैं इलेक्टसेंस हूँ। मैं यहाँ भारत की चुनाव प्रक्रिया को समझने में आपकी मदद करने के लिए हूँ। आप क्या जानना चाहेंगे?",
      thinking: "सोच रहा हूँ..."
    },
    quiz: {
      questionPrefix: "प्रश्न",
      of: "का",
      next: "अगला प्रश्न",
      results: "परिणाम देखें",
      completed: "प्रश्नोत्तरी पूरी हुई!",
      subtext: "आपको हमारे लोकतंत्र की अच्छी समझ है।",
      retake: "पुनः प्रयास करें",
      feedback: {
        perfect: "सर्वोच्च नागरिक! आप अपने अधिकारों को पूरी तरह जानते हैं।",
        good: "बहुत बढ़िया! आप जिम्मेदारी से वोट देने के लिए तैयार हैं।",
        learning: "अच्छा प्रयास। अधिक जानने के लिए समयरेखा देखें!"
      }
    },
    factCheck: {
      heading: "फेक न्यूज़ डिटेक्टर",
      subheading: "WhatsApp फॉरवर्ड और चुनावी दावों की तुरंत पुष्टि करें।",
      label: "दावा या संदेश पेस्ट करें",
      placeholder: "जैसे: EVM को ब्लूटूथ के जरिए हैक किया जा सकता है...",
      button: "दावे की जाँच करें",
      verifying: "पुष्टि हो रही है...",
      verdict: "निर्णय",
      explanation: "व्याख्या",
      source: "आधिकारिक स्रोत"
    },
    tryVoting: {
      heading: "मतदान का प्रयास करें",
      ballotUnit: "बैलेट यूनिट",
      deviceInfo: "इलेक्ट्रॉनिक वोटिंग मशीन • भारत इलेक्ट्रॉनिक्स लिमिटेड",
      howItWorks: "यह कैसे काम करता है",
      step1: "मतदाता अपने पसंदीदा उम्मीदवार के नाम और प्रतीक के बगल में स्थित नीले बटन को दबाते हैं।",
      step2: "एक लंबी बीप की आवाज पुष्टि करती है कि वोट इलेक्ट्रॉनिक रूप से रिकॉर्ड किया गया है।",
      step3: "VVPAT मशीन दृश्य सत्यापन के लिए 7 सेकंड के लिए चुने हुए उम्मीदवार के साथ एक पेपर स्लिप दिखाती है।",
      vvpatSystem: "VVPAT सिस्टम",
      waiting: "बैलेट की प्रतीक्षा है...",
      success: "मतदान सफलतापूर्वक हुआ!",
      successDetail: "वास्तविक चुनाव में, यह पर्ची 7 सेकंड तक दिखाई देगी और फिर स्वतः ही सीलबंद बॉक्स में गिर जाएगी।",
      reset: "सिमुलेशन रीसेट करें"
    },
    timelineData: [
      { id: 1, title: "चुनाव की घोषणा", description: "भारत निर्वाचन आयोग (ECI) कार्यक्रम की घोषणा करता है।", details: ["नामांकन, मतदान और मतगणना की तारीखों का कार्यक्रम जारी किया जाता है।", "आदर्श आचार संहिता (MCC) तुरंत लागू हो जाती है।", "सरकार को नई परियोजनाओं या योजनाओं की घोषणा करने से प्रतिबंधित किया जाता है।"] },
      { id: 2, title: "मतदाता सूची को अंतिम रूप देना", description: "मतदाता सूची प्रकाशित और सत्यापित की जाती है।", details: ["ECI सभी निर्वाचन क्षेत्रों के लिए अद्यतन मतदाता सूची प्रकाशित करता है।", "मतदाता 1950 हेल्पलाइन या राष्ट्रीय मतदाता सेवा पोर्टल के माध्यम से अपना नाम सत्यापित कर सकते हैं।", "वोटर आईडी कार्ड के नए आवेदनों पर कार्रवाई की जाती है।"] },
      { id: 3, title: "उम्मीदवार का नामांकन", description: "उम्मीदवार रिटर्निंग ऑफिसर के पास अपने पर्चे दाखिल करते हैं।", details: ["उम्मीदवारों को रिटर्निंग ऑफिस में नामांकन दाखिल करना होगा।", "₹25,000 (सामान्य) या ₹12,500 (SC/ST) की सुरक्षा जमा राशि आवश्यक है।", "नामांकन की वैधता के लिए जांच की अवधि प्रदान की जाती है।"] },
      { id: 4, title: "अभियान की अवधि", description: "राजनीतिक दल और उम्मीदवार मतदाताओं तक पहुँचते हैं।", details: ["प्रचार आमतौर पर 14-21 दिनों तक चलता है।", "आचार संहिता के नियमों का पालन अनिवार्य है।", "लोकसभा उम्मीदवारों के लिए खर्च की सीमा ₹95 लाख (बड़े राज्यों में) तय की गई है।"] },
      { id: 5, title: "मौन अवधि और मतदान दिवस", description: "मतदान से पहले 48 घंटे की मौन अवधि और उसके बाद वास्तविक मतदान।", details: ["मतदान समाप्त होने से 48 घंटे पहले 'मौन अवधि' शुरू होती है।", "मतदाता इलेक्ट्रॉनिक वोटिंग मशीन (EVM) का उपयोग करते हैं।", "मतदाता VVPAT के माध्यम से अपने वोट का सत्यापन कर सकते हैं।"] },
      { id: 6, title: "मतगणना और परिणाम", description: "सभी मतगणना केंद्रों पर मतों की गिनती की जाती है।", details: ["निर्धारित दिन सुबह 8:00 बजे मतगणना शुरू होती है।", "पहले पोस्टल बैलट गिने जाते हैं, फिर EVM के नतीजे।", "सरकार बनाने के लिए लोकसभा में 272+ सीटों के बहुमत की आवश्यकता होती है।"] },
      { id: 7, title: "सरकार गठन और शपथ", description: "बहुमत के नेता को राष्ट्र का नेतृत्व करने के लिए आमंत्रित किया जाता है।", details: ["भारत के राष्ट्रपति सबसे बड़े दल या गठबंधन के नेता को आमंत्रित करते हैं।", "प्रधानमंत्री और मंत्रिपरिषद राष्ट्रपति भवन में शपथ लेते हैं।", "नई सरकार को मांग किए जाने पर सदन में अपना बहुमत साबित करना होगा।"] }
    ],
    quizData: [
      { id: 1, question: "भारत में मतदाताओं द्वारा वोट डालने के लिए प्राथमिक उपकरण कौन सा है?", options: ["कागज का मतपत्र", "EVM (इलेक्ट्रॉनिक वोटिंग मशीन)", "मोबाइल ऐप", "पंच कार्ड"], correctAnswer: 1, explanation: "भारत देश भर में वोटों की तेज़, सुरक्षित और सटीक गिनती सुनिश्चित करने के लिए EVM का उपयोग करता है।" },
      { id: 2, question: "कौन सी प्रणाली एक मतदाता को शारीरिक रूप से यह सत्यापित करने की अनुमति देती है कि उनका वोट सही ढंग से डाला गया था?", options: ["OTP सत्यापन", "VVPAT", "स्याही का निशान", "डिजिटल रसीद"], correctAnswer: 1, explanation: "वोटर वेरिफ़िएबल पेपर ऑडिट ट्रेल (VVPAT) मतदाता को उनके चयनित उम्मीदवार को दिखाने के लिए 7 सेकंड के लिए एक पर्ची प्रिंट करता है।" },
      { id: 3, question: "चुनाव के दौरान पार्टियों और उम्मीदवारों को विनियमित करने के लिए ECI द्वारा जारी दिशा-निर्देशों का सेट क्या है?", options: ["चुनाव कानून", "लोकतंत्र नियम पुस्तिका", "आदर्श आचार संहिता (MCC)", "संविधान"], correctAnswer: 2, explanation: "आदर्श आचार संहिता (MCC) निष्पक्ष खेल सुनिश्चित करती है और सत्तारूढ़ दल को सरकारी मशीनरी के दुरुपयोग से रोकती है।" },
      { id: 4, question: "लोकसभा में साधारण बहुमत तक पहुँचने के लिए कितनी सीटों की आवश्यकता है?", options: ["250", "300", "272", "543"], correctAnswer: 2, explanation: "543 निर्वाचित सीटों के साथ, किसी दल या गठबंधन को सरकार बनाने के लिए 272 सीटों की आवश्यकता होती है।" },
      { id: 5, question: "मतदान शुरू होने से पहले की 'मौन अवधि' कितने घंटों तक चलती है?", options: ["12 घंटे", "24 घंटे", "48 घंटे", "72 घंटे"], correctAnswer: 2, explanation: "48 घंटे की मौन अवधि सुनिश्चित करती है कि मतदाताओं के पास सक्रिय प्रचार के प्रभाव के बिना विचार करने का समय हो।" },
      { id: 6, question: "लोकसभा चुनाव में सामान्य श्रेणी के उम्मीदवार के लिए सुरक्षा जमा राशि क्या है?", options: ["₹10,000", "₹25,000", "₹50,000", "₹1,00,000"], correctAnswer: 1, explanation: "उम्मीदवारों को ₹25,000 जमा करने होंगे, जो कि कुल वैध मतों का छठा हिस्सा प्राप्त करने में विफल रहने पर ज़ब्त कर लिया जाता है।" },
      { id: 7, question: "भारत में चुनाव कराने के लिए कौन सा संवैधानिक निकाय जिम्मेदार है?", options: ["उच्चतम न्यायालय", "संसद", "भारत निर्वाचन आयोग (ECI)", "नीति आयोग"], correctAnswer: 2, explanation: "ECI भारत में चुनाव प्रक्रियाओं के प्रशासन के लिए जिम्मेदार एक स्वायत्त संवैधानिक प्राधिकरण है।" }
    ]
  },
  ta: {
    title: "எலக்ட்சென்ஸ்",
    subtitle: "இந்தியா",
    tagline: "தேசிய குடிமை கல்வி இணையதளம்",
    motto: "சத்யமேவ ஜெயதே",
    copyright: "© 2026 எலக்ட்சென்ஸ் இந்தியா • முதல் முறை வாக்காளர்களை மேம்படுத்துதல்",
    tabs: {
      timeline: "காலவரிசை",
      ask: "AI-யிடம் கேளுங்கள்",
      quiz: "வினாடி வினா",
      factcheck: "உண்மை சரிபார்ப்பு",
      tryvoting: "வாக்களிக்க முயலுங்கள்",
      constituency: "எனது தொகுதி"
    },
    constituency: {
      heading: "எனது தொகுதியைக் கண்டுபிடி",
      subheading: "உங்கள் தேர்தல் எல்லைகளைக் கண்டறிய 6 இலக்க பின்கோடு உள்ளிடவும்.",
      placeholder: "எ.கா: 110001",
      button: "எனது தொகுதியைக் கண்டுபிடி",
      examples: "உதாரண பின்கோடுகள்:",
      lokSabha: "மக்களவை தொகுதி",
      vidhanSabha: "சட்டமன்ற தொகுதி",
      mp: "தற்போதைய எம்பி (கட்சி)",
      voterList: "வாக்காளர் பட்டியலில் பெயரை சரிபார்க்கவும்",
      helpline: "வாக்காளர் உதவி எண்ணை அழைக்கவும் (1950)",
      loading: "உங்கள் எல்லைகளைக் கண்டறிகிறது...",
      invalid: "தயவுசெய்து சரியான 6 இலக்க பின்கோடு உள்ளிடவும்."
    },
    timeline: {
      heading: "இந்தியத் தேர்தலின் பயணம்",
      phasePrefix: "நிலை"
    },
    askAi: {
      heading: "எலக்ட்சென்ஸிடம் கேளுங்கள்",
      subheading: "Gemini AI மூலம் இயங்குகிறது • நடுநிலையான மற்றும் உண்மையான",
      placeholder: "EVM, MCC அல்லது 272 பெரும்பான்மை விதி பற்றி கேளுங்கள்...",
      greeting: "நமஸ்தே! நான் எலக்ட்சென்ஸ். இந்திய தேர்தல் செயல்முறையை நீங்கள் புரிந்து கொள்ள உதவ நான் இங்கே இருக்கிறேன். நீங்கள் என்ன தெரிந்து கொள்ள விரும்புகிறீர்கள்?",
      thinking: "சிந்திக்கிறது..."
    },
    quiz: {
      questionPrefix: "கேள்வி",
      of: "இல்",
      next: "அடுத்த கேள்வி",
      results: "முடிவுகளைக் காண்க",
      completed: "வினாடி வினா முடிந்தது!",
      subtext: "நமது ஜனநாயகத்தைப் பற்றிய வலுவான புரிதல் உங்களுக்கு உள்ளது.",
      retake: "மீண்டும் முயற்சி செய்",
      feedback: {
        perfect: "சிறந்த குடிமகன்! உங்கள் உரிமைகளை நீங்கள் சரியாக அறிவீர்கள்.",
        good: "நன்று! பொறுப்புடன் வாக்களிக்க நீங்கள் தயாராக உள்ளீர்கள்.",
        learning: "நல்ல முயற்சி. மேலும் அறிய காலவரிசையை ஆராயுங்கள்!"
      }
    },
    factCheck: {
      heading: "போலிச் செய்தி கண்டுபிடிப்பான்",
      subheading: "வாட்ஸ்அப் செய்திகள் மற்றும் தேர்தல் உரிமைகோரல்களை உடனே சரிபார்க்கவும்.",
      label: "உரிமைகோரல் அல்லது செய்தியை ஒட்டவும்",
      placeholder: "எ.கா: புளூடூத் மூலம் EVM-ஐ ஹேக் செய்யலாம்...",
      button: "இதைச் சரிபார்க்கவும்",
      verifying: "சரிபார்க்கப்படுகிறது...",
      verdict: "தீர்ப்பு",
      explanation: "விளக்கம்",
      source: "அதிகாரப்பூர்வ ஆதாரம்"
    },
    tryVoting: {
      heading: "வாக்களிக்க முயலுங்கள்",
      ballotUnit: "வாக்குச்சீட்டு அலகு",
      deviceInfo: "மின்னணு வாக்குப்பதிவு இயந்திரம் • பாரத் எலக்ட்ரானிக்ஸ் லிமிடெட்",
      howItWorks: "இது எப்படி வேலை செய்கிறது",
      step1: "வாக்காளர்கள் தங்களுக்கு விருப்பமான வேட்பாளரின் பெயர் மற்றும் சின்னத்திற்கு அடுத்துள்ள நீல நிற பொத்தானை அழுத்துகிறார்கள்.",
      step2: "நீண்ட பீப் ஒலி வாக்கு மின்னணு முறையில் பதிவு செய்யப்பட்டதை உறுதிப்படுத்துகிறது.",
      step3: "VVPAT இயந்திரம் தேர்ந்தெடுக்கப்பட்ட வேட்பாளரை 7 விநாடிகளுக்கு காட்சி சரிபார்ப்புக்காக ஒரு காகித சீட்டில் காட்டுகிறது.",
      vvpatSystem: "VVPAT அமைப்பு",
      waiting: "வாக்களிக்க காத்திருக்கிறது...",
      success: "வாக்கு வெற்றிகரமாகப் பதிவு செய்யப்பட்டது!",
      successDetail: "நிஜத் தேர்தலில், இந்தச் சீட்டு 7 விநாடிகளுக்குத் தெரியும், பின்னர் தானாகவே சீல் வைக்கப்பட்ட பெட்டியில் விழும்.",
      reset: "மீட்டமை"
    },
    timelineData: [
      { id: 1, title: "தேர்தல் அறிவிப்பு", description: "இந்திய தேர்தல் ஆணையம் (ECI) கால அட்டவணையை அறிவிக்கிறது.", details: ["வேட்புமனு தாக்கல், வாக்குப்பதிவு மற்றும் எண்ணிக்கை தேதிகளின் அட்டவணை வெளியிடப்படுகிறது.", "மாதிரி நடத்தை விதிகள் (MCC) உடனடியாக அமலுக்கு வரும்.", "புதிய திட்டங்கள் அல்லது திட்டங்களை அறிவிக்க அரசாங்கத்திற்கு தடை விதிக்கப்பட்டுள்ளது."] },
      { id: 2, title: "வாக்காளர் பட்டியல் இறுதி செய்தல்", description: "வாக்காளர் பட்டியல்கள் வெளியிடப்பட்டு சரிபார்க்கப்படுகின்றன.", details: ["அனைத்து தொகுதிகளுக்கும் புதுப்பிக்கப்பட்ட வாக்காளர் பட்டியலை ECI வெளியிடுகிறது.", "வாக்காளர்கள் 1950 உதவி எண் அல்லது தேசிய வாக்காளர் சேவை இணையதளம் மூலம் தங்கள் பெயர்களைச் சரிபார்க்கலாம்.", "வாக்காளர் அடையாள அட்டைகளுக்கான புதிய விண்ணப்பங்கள் பரிசீலிக்கப்படுகின்றன."] },
      { id: 3, title: "வேட்பாளர் வேட்புமனு", description: "வேட்பாளர்கள் தங்கள் ஆவணங்களை தேர்தல் அதிகாரியிடம் சமர்ப்பிக்கிறார்கள்.", details: ["வேட்பாளர்கள் தேர்தல் அலுவலகத்தில் வேட்புமனு தாக்கல் செய்ய வேண்டும்.", "₹25,000 (பொது) அல்லது ₹12,500 (SC/ST) பிணைத் தொகை தேவை.", "செல்லுபடியாகும் வேட்புமனுக்களுக்கு ஆய்வு சாளரம் வழங்கப்படுகிறது."] },
      { id: 4, title: "பிரச்சார காலம்", description: "அரசியல் கட்சிகள் மற்றும் வேட்பாளர்கள் வாக்காளர்களைச் சென்றடைகிறார்கள்.", details: ["பிரச்சாரம் பொதுவாக 14-21 நாட்கள் நீடிக்கும்.", "MCC விதிகளைப் பின்பற்றுவது கட்டாயமாகும்.", "மக்களவை வேட்பாளர்களுக்கான செலவு வரம்பு ₹95 லட்சமாக (பெரிய மாநிலங்களில்) நிர்ணயிக்கப்பட்டுள்ளது."] },
      { id: 5, title: "அமைதி காலம் மற்றும் வாக்குப்பதிவு நாள்", description: "வாக்குப்பதிவுக்கு முன் 48 மணிநேர அமைதி காலம் மற்றும் உண்மையான வாக்குப்பதிவு.", details: ["வாக்குப்பதிவு முடிவதற்கு 48 மணிநேரத்திற்கு முன்பே 'அமைதி காலம்' தொடங்குகிறது.", "வாக்காளர்கள் மின்னணு வாக்குப்பதிவு இயந்திரங்களை (EVM) பயன்படுத்துகின்றனர்.", "VVPAT மூலம் வாக்காளர்கள் தங்கள் வாக்கைச் சரிபார்க்கலாம்."] },
      { id: 6, title: "வாக்கு எண்ணிக்கை மற்றும் முடிவுகள்", description: "அனைத்து மையங்களிலும் வாக்குகள் எண்ணப்படுகின்றன.", details: ["குறிப்பிட்ட நாளில் காலை 8:00 மணிக்கு எண்ணிக்கை தொடங்குகிறது.", "முதலில் தபால் வாக்குகள் எண்ணப்படுகின்றன, பின்னர் EVM முடிவுகள்.", "அரசாங்கத்தை அமைக்க மக்களவையில் 272+ இடங்கள் பெரும்பான்மை தேவை."] },
      { id: 7, title: "அரசு அமைத்தல் மற்றும் பதவியேற்பு", description: "பெரும்பான்மைத் தலைவர் தேசத்தை வழிநடத்த அழைக்கப்படுகிறார்.", details: ["இந்தியக் குடியரசுத் தலைவர் மிகப்பெரிய கட்சி அல்லது கூட்டணியின் தலைவரை அழைக்கிறார்.", "பிரதமர் மற்றும் அமைச்சர்கள் குடியரசுத் தலைவர் மாளிகையில் பதவியேற்கிறார்கள்.", "புதிய அரசாங்கம் கோரப்பட்டால் சபையில் தனது பெரும்பான்மையை நிரூபிக்க வேண்டும்."] }
    ],
    quizData: [
      { id: 1, question: "இந்தியாவில் வாக்காளர்கள் வாக்களிக்கப் பயன்படுத்தும் முதன்மை சாதனம் எது?", options: ["காகித வாக்குச்சீட்டு", "EVM (மின்னணு வாக்குப்பதிவு இயந்திரம்)", "மொபைல் ஆப்", "பஞ்ச் கார்டு"], correctAnswer: 1, explanation: "வாக்குகளை விரைவாகவும் பாதுகாப்பாகவும் எண்ணுவதை உறுதி செய்ய இந்தியா EVM-களைப் பயன்படுத்துகிறது." },
      { id: 2, question: "வாக்காளர் தனது வாக்கு சரியாகப் பதிவு செய்யப்பட்டுள்ளதா என்பதைச் சரிபார்க்க அனுமதிக்கும் அமைப்பு எது?", options: ["OTP சரிபார்ப்பு", "VVPAT", "மை அடையாளம்", "டிஜிட்டல் ரசீது"], correctAnswer: 1, explanation: "VVPAT 7 விநாடிகளுக்கு ஒரு காகிதச் சீட்டை அச்சிட்டு வாக்காளர் தேர்ந்தெடுத்த வேட்பாளரைக் காட்டுகிறது." },
      { id: 3, question: "தேர்தலின் போது கட்சிகள் மற்றும் வேட்பாளர்களை ஒழுங்குபடுத்த ECI வெளியிடும் வழிகாட்டுதல்கள் என்ன?", options: ["தேர்தல் சட்டம்", "ஜனநாயக விதிப்புத்தகம்", "மாதிரி நடத்தை விதிகள் (MCC)", "அரசியலமைப்பு"], correctAnswer: 2, explanation: "MCC நியாயமான தேர்தலை உறுதி செய்கிறது மற்றும் ஆளும் கட்சி அரசு இயந்திரத்தைத் தவறாகப் பயன்படுத்துவதைத் தடுக்கிறது." },
      { id: 4, question: "மக்களவையில் பெரும்பான்மை பெற எத்தனை இடங்கள் தேவை?", options: ["250", "300", "272", "543"], correctAnswer: 2, explanation: "அரசாங்கத்தை அமைக்க ஒரு கட்சி அல்லது கூட்டணிக்கு 272 இடங்கள் தேவை." },
      { id: 5, question: "வாக்குப்பதிவுக்கு முன் அமலில் இருக்கும் 'அமைதி காலம்' எத்தனை மணிநேரம் நீடிக்கும்?", options: ["12 மணிநேரம்", "24 மணிநேரம்", "48 மணிநேரம்", "72 மணிநேரம்"], correctAnswer: 2, explanation: "48 மணிநேர அமைதி காலம் வாக்காளர்கள் பிரச்சாரத்தின் தாக்கமின்றி சிந்திக்க நேரம் அளிக்கிறது." },
      { id: 6, question: "மக்களவைத் தேர்தலில் பொதுப் பிரிவு வேட்பாளருக்கான பிணைத் தொகை எவ்வளவு?", options: ["₹10,000", "₹25,000", "₹50,000", "₹1,00,000"], correctAnswer: 1, explanation: "வேட்பாளர்கள் ₹25,000 டெபாசிட் செய்ய வேண்டும், இது செல்லுபடியாகும் வாக்குகளில் 1/6 பங்கை பெறாவிட்டால் பறிமுதல் செய்யப்படும்." },
      { id: 7, question: "இந்தியாவில் தேர்தல்களை நடத்துவதற்குப் பொறுப்பான அரசியலமைப்பு அமைப்பு எது?", options: ["உச்ச நீதிமன்றம்", "நாடாளுமன்றம்", "இந்திய தேர்தல் ஆணையம் (ECI)", "நிதி ஆயோக்"], correctAnswer: 2, explanation: "ECI இந்தியாவில் தேர்தல் செயல்முறைகளை நிர்வகிப்பதற்கான ஒரு தன்னாட்சி அமைப்பாகும்." }
    ]
  },
  te: {
    title: "ఎలక్ట్‌సెన్స్",
    subtitle: "భారతదేశం",
    tagline: "జాతీయ పౌర విద్యా పోర్టల్",
    motto: "సత్యమేవ జయతే",
    copyright: "© 2026 ఎలక్ట్‌సెన్స్ ఇండియా • మొదటిసారి ఓటర్లను శక్తివంతం చేయడం",
    tabs: {
      timeline: "కాలక్రమం",
      ask: "AIని అడగండి",
      quiz: "క్విజ్",
      factcheck: "నిజ నిర్ధారణ",
      tryvoting: "ఓటు వేయండి",
      constituency: "నా నియోజకవర్గం"
    },
    constituency: {
      heading: "నా నియోజకవర్గాన్ని కనుగొనండి",
      subheading: "మీ ఎన్నికల సరిహద్దులను కనుగొనడానికి మీ 6-అంకెల పిన్‌కోడ్‌ను నమోదు చేయండి.",
      placeholder: "ఉదా: 110001",
      button: "నా నియోజకవర్గాన్ని కనుగొనండి",
      examples: "ఉదాహరణ పిన్‌కోడ్‌లు:",
      lokSabha: "లోక్ సభ నియోజకవర్గం",
      vidhanSabha: "విధాన సభ నియోజకవర్గం",
      mp: "ప్రస్తుత ఎంపీ (పార్టీ)",
      voterList: "ఓటర్ జాబితాలో పేరును తనిఖీ చేయండి",
      helpline: "ఓటర్ హెల్ప్‌లైన్‌కు కాల్ చేయండి (1950)",
      loading: "మీ సరిహద్దులను గుర్తిస్తోంది...",
      invalid: "దయచేసి సరైన 6-అంకెల పిన్‌కోడ్‌ను నమోదు చేయండి."
    },
    timeline: {
      heading: "భారత ఎన్నికల ప్రయాణం",
      phasePrefix: "దశ"
    },
    askAi: {
      heading: "ఎలక్ట్‌సెన్స్‌ని అడగండి",
      subheading: "Gemini AI ద్వారా ఆధారితం • నిష్పాక్షిక మరియు వాస్తవిక",
      placeholder: "EVMలు, MCC లేదా 272 మెజారిటీ నిబంధన గురించి అడగండి...",
      greeting: "నమస్తే! నేను ఎలక్ట్‌సెన్స్. భారత ఎన్నికల ప్రక్రియను అర్థం చేసుకోవడంలో మీకు సహాయం చేయడానికి నేను ఇక్కడ ఉన్నాను. మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?",
      thinking: "ఆలోచిస్తోంది..."
    },
    quiz: {
      questionPrefix: "ప్రశ్న",
      of: "లో",
      next: "తదుపరి ప్రశ్న",
      results: "ఫలితాలను చూడండి",
      completed: "క్విజ్ పూర్తయింది!",
      subtext: "మన ప్రజాస్వామ్యంపై మీకు మంచి అవగాహన ఉంది.",
      retake: "మళ్ళీ రాయండి",
      feedback: {
        perfect: "సుప్రీం సిటిజన్! మీ హక్కుల గురించి మీకు పూర్తి అవగాహన ఉంది.",
        good: "చాలా బాగుంది! బాధ్యతాయుతంగా ఓటు వేయడానికి మీరు సిద్ధంగా ఉన్నారు.",
        learning: "మంచి ప్రయత్నం. మరింత తెలుసుకోవడానికి కాలక్రమాన్ని చూడండి!"
      }
    },
    factCheck: {
      heading: "ఫేక్ న్యూస్ డిటెక్టర్",
      subheading: "వాట్సాప్ ఫార్వర్డ్‌లు మరియు ఎన్నికల క్లెయిమ్‌లను తక్షణమే ధృవీకరించండి.",
      label: "క్లెయిమ్ లేదా సందేశాన్ని పేస్ట్ చేయండి",
      placeholder: "ఉదా: బ్లూటూత్ ద్వారా EVMలను హ్యాక్ చేయవచ్చు...",
      button: "దీన్ని తనిఖీ చేయండి",
      verifying: "ధృవీకరిస్తోంది...",
      verdict: "తీర్పు",
      explanation: "వివరణ",
      source: "అధికారిక మూలం"
    },
    tryVoting: {
      heading: "ఓటింగ్ ప్రయత్నించండి",
      ballotUnit: "బ్యాలెట్ యూనిట్",
      deviceInfo: "ఎలక్ట్రానిక్ ఓటింగ్ మెషిన్ • భారత్ ఎలక్ట్రానిక్స్ లిమిటెడ్",
      howItWorks: "ఇది ఎలా పనిచేస్తుంది",
      step1: "ఓటర్లు తమకు నచ్చిన అభ్యర్థి పేరు మరియు చిహ్నం పక్కన ఉన్న నీలం రంగు బటన్‌ను నొక్కుతారు.",
      step2: "సుదీర్ఘమైన బీప్ ధ్వని ఓటు ఎలక్ట్రానిక్‌గా రికార్డ్ చేయబడిందని ధృవీకరిస్తుంది.",
      step3: "VVPAT యంత్రం ఎంపిక చేసిన అభ్యర్థిని 7 సెకన్ల పాటు కాగితపు స్లిప్‌పై చూపిస్తుంది.",
      vvpatSystem: "VVPAT వ్యవస్థ",
      waiting: "బ్యాలెట్ కోసం వేచి ఉంది...",
      success: "ఓటు విజయవంతంగా వేయబడింది!",
      successDetail: "నిజమైన ఎన్నికలలో, ఈ స్లిప్ 7 సెకన్ల పాటు కనిపిస్తుంది మరియు స్వయంచాలకంగా సీలు చేసిన పెట్టెలో పడిపోతుంది.",
      reset: "రీసెట్ చేయండి"
    },
    timelineData: [
      { id: 1, title: "ఎన్నికల ప్రకటన", description: "భారత ఎన్నికల సంఘం (ECI) షెడ్యూల్‌ను ప్రకటిస్తుంది.", details: ["నామినేషన్, పోలింగ్ మరియు లెక్కింపు తేదీల షెడ్యూల్ విడుదల చేయబడుతుంది.", "కోడ్ ఆఫ్ కండక్ట్ (MCC) వెంటనే అమల్లోకి వస్తుంది.", "ప్రభుత్వం కొత్త పథకాలను ప్రకటించకుండా నిషేధించబడింది."] },
      { id: 2, title: "ఓటర్ జాబితా ఖరారు", description: "ఓటర్ల జాబితాలు ప్రచురించబడతాయి మరియు ధృవీకరించబడతాయి.", details: ["ECI అన్ని నియోజకవర్గాలకు నవీకరించబడిన ఓటర్ల జాబితాను ప్రచురిస్తుంది.", "ఓటర్లు 1950 హెల్ప్‌లైన్ ద్వారా తమ పేర్లను ధృవీకరించుకోవచ్చు.", "కొత్త ఓటర్ ఐడి కార్డుల దరఖాస్తులు ప్రాసెస్ చేయబడతాయి."] },
      { id: 3, title: "అభ్యర్థి నామినేషన్", description: "అభ్యర్థులు రిటర్నింగ్ అధికారికి పత్రాలను సమర్పిస్తారు.", details: ["అభ్యర్థులు రిటర్నింగ్ కార్యాలయంలో నామినేషన్ దాఖలు చేయాలి.", "₹25,000 (జనరల్) లేదా ₹12,500 (SC/ST) సెక్యూరిటీ డిపాజిట్ అవసరం.", "నామినేషన్ల పరిశీలన కోసం విండో అందించబడుతుంది."] },
      { id: 4, title: "ప్రచార కాలం", description: "రాజకీయ పార్టీలు మరియు అభ్యర్థులు ఓటర్లను చేరుకుంటారు.", details: ["ప్రచారం సాధారణంగా 14-21 రోజులు ఉంటుంది.", "MCC నిబంధనలను పాటించడం తప్పనిసరి.", "లోక్ సభ అభ్యర్థులకు వ్యయ పరిమితి ₹95 లక్షలుగా నిర్ణయించబడింది."] },
      { id: 5, title: "మౌన కాలం & పోలింగ్ రోజు", description: "పోలింగ్‌కు ముందు 48 గంటల మౌన కాలం మరియు అసలు ఓటింగ్.", details: ["పోలింగ్ ముగియడానికి 48 గంటల ముందు 'మౌన కాలం' ప్రారంభమవుతుంది.", "ఓటర్లు ఎలక్ట్రానిక్ ఓటింగ్ మెషీన్లను (EVM) ఉపయోగిస్తారు.", "ఓటర్లు VVPAT ద్వారా తమ ఓటును ధృవీకరించుకోవచ్చు."] },
      { id: 6, title: "ఓట్ల లెక్కింపు & ఫలితాలు", description: "అన్ని కేంద్రాల్లో ఓట్ల లెక్కింపు జరుగుతుంది.", details: ["నిర్ణీత రోజున ఉదయం 8:00 గంటలకు లెక్కింపు ప్రారంభమవుతుంది.", "ముందుగా పోస్టల్ బ్యాలెట్లు, ఆపై EVM ఫలితాలు లెక్కిస్తారు.", "ప్రభుత్వాన్ని ఏర్పాటు చేయడానికి లోక్ సభలో 272+ సీట్లు అవసరం."] },
      { id: 7, title: "ప్రభుత్వ ఏర్పాటు & ప్రమాణ స్వీకారం", description: "మెజారిటీ నాయకుడిని ఆహ్వానిస్తారు.", details: ["భారత రాష్ట్రపతి అతిపెద్ద పార్టీ లేదా కూటమి నాయకుడిని ఆహ్వానిస్తారు.", "ప్రధాన మంత్రి మరియు మంత్రుల మండలి ప్రమాణ స్వీకారం చేస్తారు.", "కొత్త ప్రభుత్వం సభలో మెజారిటీని నిరూపించుకోవాలి."] }
    ],
    quizData: [
      { id: 1, question: "భారతదేశంలో ఓటు వేయడానికి ఉపయోగించే ప్రాథమిక పరికరం ఏది?", options: ["కాగితపు బ్యాలెట్", "EVM", "మొబైల్ యాప్", "పంచ్ కార్డ్"], correctAnswer: 1, explanation: "వేగవంతమైన మరియు ఖచ్చితమైన లెక్కింపు కోసం ఇండియా EVMలను ఉపయోగిస్తుంది." },
      { id: 2, question: "ఓటు సరిగ్గా పడిందని ఓటరు ధృవీకరించుకోవడానికి ఏ వ్యవస్థ అనుమతిస్తుంది?", options: ["OTP ధృవీకరణ", "VVPAT", "సిరా గుర్తు", "డిజిటల్ రశీదు"], correctAnswer: 1, explanation: "VVPAT 7 సెకన్ల పాటు స్లిప్‌ను ప్రింట్ చేసి ఓటరు ఎంచుకున్న అభ్యర్థిని చూపిస్తుంది." },
      { id: 3, question: "ఎన్నికల సమయంలో పార్టీలను నియంత్రించడానికి ECI జారీ చేసే మార్గదర్శకాలు ఏమిటి?", options: ["ఎన్నికల చట్టం", "డెమొక్రసీ రూల్‌బుక్", "కోడ్ ఆఫ్ కండక్ట్ (MCC)", "రాజ్యాంగం"], correctAnswer: 2, explanation: "MCC నిష్పాక్షిక ఎన్నికలను నిర్ధారిస్తుంది మరియు అధికార దుర్వినియోగాన్ని నిరోధిస్తుంది." },
      { id: 4, question: "లోక్ సభలో మెజారిటీ సాధించడానికి ఎన్ని సీట్లు అవసరం?", options: ["250", "300", "272", "543"], correctAnswer: 2, explanation: "ప్రభుత్వాన్ని ఏర్పాటు చేయడానికి ఒక పార్టీకి 272 సీట్లు అవసరం." },
      { id: 5, question: "పోలింగ్‌కు ముందు అమల్లో ఉండే 'మౌన కాలం' ఎన్ని గంటలు ఉంటుంది?", options: ["12 గంటలు", "24 గంటలు", "48 గంటలు", "72 గంటలు"], correctAnswer: 2, explanation: "48 గంటల మౌన కాలం ఓటర్లకు ప్రచారం లేకుండా ఆలోచించుకోవడానికి సమయం ఇస్తుంది." },
      { id: 6, question: "లోక్ సభ ఎన్నికల్లో జనరల్ అభ్యర్థికి సెక్యూరిటీ డిపాజిట్ ఎంత?", options: ["₹10,000", "₹25,000", "₹50,000", "₹1,00,000"], correctAnswer: 1, explanation: "అభ్యర్థులు ₹25,000 డిపాజిట్ చేయాలి, ఓట్లు రాకుంటే అది జప్తు చేయబడుతుంది." },
      { id: 7, question: "భారతదేశంలో ఎన్నికల నిర్వహణకు ఏ రాజ్యాంగ సంస్థ బాధ్యత వహిస్తుంది?", options: ["సుప్రీం కోర్టు", "పార్లమెంట్", "భారత ఎన్నికల సంఘం (ECI)", "నీతి ఆయోగ్"], correctAnswer: 2, explanation: "ECI భారత ఎన్నికల ప్రక్రియను నిర్వహించే స్వయంప్రతిపత్తి కలిగిన సంస్థ." }
    ]
  },
  ml: {
    title: "ഇലക്ട്സെൻസ്",
    subtitle: "ഇന്ത്യ",
    tagline: "നാഷണൽ സിവിക് എഡ്യൂക്കേഷൻ പോർട്ടൽ",
    motto: "സത്യമേവ ജയതേ",
    copyright: "© 2026 ഇലക്ട്സെൻസ് ഇന്ത്യ • കന്നി വോട്ടർമാരെ ശാക്തീകരിക്കുന്നു",
    tabs: {
      timeline: "ടൈംലൈൻ",
      ask: "AI-യോട് ചോദിക്കൂ",
      quiz: "ക്വിസ്",
      factcheck: "വസ്തുതാ പരിശോധന",
      tryvoting: "വോട്ട് ചെയ്തു നോക്കൂ",
      constituency: "എന്റെ മണ്ഡലം"
    },
    constituency: {
      heading: "മണ്ഡലം കണ്ടെത്തുക",
      subheading: "നിങ്ങളുടെ തിരഞ്ഞെടുപ്പ് അതിരുകൾ കണ്ടെത്താൻ 6 അക്ക പിൻകോഡ് നൽകുക.",
      placeholder: "ഉദാ: 110001",
      button: "മണ്ഡലം കണ്ടെത്തുക",
      examples: "ഉദാഹരണ പിൻകോഡുകൾ:",
      lokSabha: "ലോകസഭാ മണ്ഡലം",
      vidhanSabha: "നിയമസഭാ മണ്ഡലം",
      mp: "നിലവിലെ എംപി (പാർട്ടി)",
      voterList: "വോട്ടർ പട്ടികയിൽ പേര് പരിശോധിക്കുക",
      helpline: "വോട്ടർ ഹെൽപ്പ് ലൈനിൽ വിളിക്കുക (1950)",
      loading: "തിരഞ്ഞെടുപ്പ് അതിരുകൾ കണ്ടെത്തുന്നു...",
      invalid: "സാധുവായ 6 അക്ക ഇന്ത്യൻ പിൻകോഡ് നൽകുക."
    },
    timeline: {
      heading: "ഇന്ത്യൻ തെരഞ്ഞെടുപ്പിന്റെ യാത്ര",
      phasePrefix: "ഘട്ടം"
    },
    askAi: {
      heading: "ഇലക്ട്സെൻസിനോട് ചോദിക്കൂ",
      subheading: "Gemini AI നൽകുന്നത് • നിഷ്പക്ഷവും വസ്തുതാപരവും",
      placeholder: "EVM-കൾ, MCC അല്ലെങ്കിൽ 272 ഭൂരിപക്ഷ നിയമത്തെക്കുറിച്ച് ചോദിക്കൂ...",
      greeting: "നമസ്‌തേ! ഞാൻ ഇലക്ട്സെൻസ്. ഇന്ത്യൻ തിരഞ്ഞെടുപ്പ് പ്രക്രിയ മനസ്സിലാക്കാൻ നിങ്ങളെ സഹായിക്കാൻ ഞാൻ ഇവിടെയുണ്ട്. നിങ്ങൾക്ക് എന്താണ് അറിയേണ്ടത്?",
      thinking: "ചിന്തിക്കുന്നു..."
    },
    quiz: {
      questionPrefix: "ചോദ്യം",
      of: "ഇൽ",
      next: "അടുത്ത ചോദ്യം",
      results: "ഫലങ്ങൾ കാണുക",
      completed: "ക്വിസ് പൂർത്തിയായി!",
      subtext: "നമ്മുടെ ജനാധിപത്യത്തെക്കുറിച്ച് നിങ്ങൾക്ക് വ്യക്തമായ ധാരണയുണ്ട്.",
      retake: "വീണ്ടും ശ്രമിക്കുക",
      feedback: {
        perfect: "ഉത്തമ പൗരൻ! നിങ്ങളുടെ അവകാശങ്ങളെക്കുറിച്ച് നിങ്ങൾക്ക് കൃത്യമായ അറിവുണ്ട്.",
        good: "മികച്ച പ്രവർത്തനം! ഉത്തരവാദിത്തത്തോടെ വോട്ട് ചെയ്യാൻ നിങ്ങൾ തയ്യാറാണ്.",
        learning: "നല്ല ശ്രമം. കൂടുതൽ അറിയാൻ ടൈംലൈൻ പരിശോധിക്കുക!"
      }
    },
    factCheck: {
      heading: "വ്യാജ വാർത്താ ഡിറ്റക്ടർ",
      subheading: "വാട്ട്‌സ്ആപ്പ് സന്ദേശങ്ങളും തെരഞ്ഞെടുപ്പ് അവകാശവാദങ്ങളും ഉടൻ പരിശോധിക്കുക.",
      label: "സന്ദേശം ഇവിടെ പേസ്റ്റ് ചെയ്യുക",
      placeholder: "ഉദാഹരണത്തിന്: ബ്ലൂടൂത്ത് വഴി EVM-കൾ ഹാക്ക് ചെയ്യാം...",
      button: "ഇത് പരിശോധിക്കുക",
      verifying: "പരിശോധിക്കുന്നു...",
      verdict: "വിധി",
      explanation: "വിശദീകരണം",
      source: "ഔദ്യോഗിക ഉറവിടം"
    },
    tryVoting: {
      heading: "വോട്ടിംഗ് പരീക്ഷിക്കുക",
      ballotUnit: "ബാലറ്റ് യൂണിറ്റ്",
      deviceInfo: "ഇലക്ട്രോണിക് വോട്ടിംഗ് മെഷീൻ • ഭാരത് ഇലക്ട്രോണിക്സ് ലിമിറ്റഡ്",
      howItWorks: "ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു",
      step1: "വോട്ടർമാർ തങ്ങൾക്കിഷ്ടപ്പെട്ട സ്ഥാനാർത്ഥിയുടെ പേരിനും ചിഹ്നത്തിനും അടുത്തുള്ള നീല ബട്ടൺ അമർത്തുന്നു.",
      step2: "ഒരു നീണ്ട ബീപ്പ് ശബ്ദം വോട്ട് ഇലക്ട്രോണിക് ആയി രേഖപ്പെടുത്തിയെന്ന് സ്ഥിരീകരിക്കുന്നു.",
      step3: "VVPAT മെഷീൻ തിരഞ്ഞെടുത്ത സ്ഥാനാർത്ഥിയെ 7 സെക്കൻഡ് നേരത്തേക്ക് ഒരു പേപ്പർ സ്ലിപ്പിൽ കാണിക്കുന്നു.",
      vvpatSystem: "VVPAT സിസ്റ്റം",
      waiting: "ബാലറ്റിനായി കാത്തിരിക്കുന്നു...",
      success: "വോട്ട് വിജയകരമായി രേഖപ്പെടുത്തി!",
      successDetail: "യഥാർത്ഥ തിരഞ്ഞെടുപ്പിൽ, ഈ സ്ലിപ്പ് 7 സെക്കൻഡ് നേരത്തേക്ക് ദൃശ്യമാകും, തുടർന്ന് സ്വയമേവ സീൽ ചെയ്ത ബോക്സിൽ വീഴും.",
      reset: "റീസെറ്റ് ചെയ്യുക"
    },
    timelineData: [
      { id: 1, title: "തിരഞ്ഞെടുപ്പ് പ്രഖ്യാപനം", description: "ഭാരത തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ (ECI) ഷെഡ്യൂൾ പ്രഖ്യാപിക്കുന്നു.", details: ["നാമനിർദ്ദേശം, വോട്ടെടുപ്പ്, വോട്ടെണ്ണൽ തീയതികളുടെ ഷെഡ്യൂൾ പുറത്തിറക്കുന്നു.", "മാതൃകാ പെരുമാറ്റച്ചട്ടം (MCC) ഉടനടി നിലവിൽ വരുന്നു.", "പുതിയ പദ്ധതികൾ പ്രഖ്യാപിക്കുന്നതിൽ നിന്ന് സർക്കാരിനെ വിലക്കുന്നു."] },
      { id: 2, title: "വോട്ടർ പട്ടിക അന്തിമമാക്കൽ", description: "വോട്ടർ പട്ടികകൾ പ്രസിദ്ധീകരിക്കുകയും പരിശോധിക്കുകയും ചെയ്യുന്നു.", details: ["ECI എല്ലാ മണ്ഡലങ്ങൾക്കുമായി പുതുക്കിയ വോട്ടർ പട്ടിക പ്രസിദ്ധീകരിക്കുന്നു.", "1950 ഹെൽപ്പ്‌ലൈൻ വഴി വോട്ടർമാർക്ക് പേര് പരിശോധിക്കാം.", "പുതിയ വോട്ടർ ഐഡി കാർഡുകൾക്കുള്ള അപേക്ഷകൾ പരിഗണിക്കുന്നു."] },
      { id: 3, title: "സ്ഥാനാർത്ഥി നാമനിർദ്ദേശം", description: "സ്ഥാനാർത്ഥികൾ വരണാധികാരിക്ക് പത്രിക സമർപ്പിക്കുന്നു.", details: ["സ്ഥാനാർത്ഥികൾ റിട്ടേണിംഗ് ഓഫീസിൽ നാമനിർദ്ദേശ പത്രിക സമർപ്പിക്കണം.", "₹25,000 (ജനറൽ) അല്ലെങ്കിൽ ₹12,500 (SC/ST) കെട്ടിവെക്കണം.", "നാമനിർദ്ദേശ പത്രികകളുടെ സൂക്ഷ്മപരിശോധന നടക്കുന്നു."] },
      { id: 4, title: "പ്രചാരണ കാലയളവ്", description: "പാർട്ടികളും സ്ഥാനാർത്ഥികളും വോട്ടർമാരെ സമീപിക്കുന്നു.", details: ["പ്രചാരണം സാധാരണയായി 14-21 ദിവസം നീണ്ടുനിൽക്കും.", "MCC നിയമങ്ങൾ പാലിക്കുന്നത് നിർബന്ധമാണ്.", "ലോക്‌സഭാ സ്ഥാനാർത്ഥികളുടെ ചെലവ് പരിധി ₹95 ലക്ഷമായി നിശ്ചയിച്ചിട്ടുണ്ട്."] },
      { id: 5, title: "നിശബ്ദ കാലയളവും പോളിംഗ് ദിനവും", description: "48 മണിക്കൂർ നിശബ്ദ കാലയളവും വോട്ടെടുപ്പും.", details: ["വോട്ടെടുപ്പ് അവസാനിക്കുന്നതിന് 48 മണിക്കൂർ മുമ്പ് നിശബ്ദ കാലയളവ് തുടങ്ങുന്നു.", "വോട്ടർമാർ EVM ഉപയോഗിക്കുന്നു.", "VVPAT വഴി വോട്ടർമാർക്ക് വോട്ട് പരിശോധിക്കാം."] },
      { id: 6, title: "വോട്ടെണ്ണലും ഫലവും", description: "എല്ലാ കേന്ദ്രങ്ങളിലും വോട്ടെണ്ണൽ നടക്കുന്നു.", details: ["നിശ്ചിത ദിവസം രാവിലെ 8:00-ന് വോട്ടെണ്ണൽ തുടങ്ങുന്നു.", "ആദ്യം തപാൽ വോട്ടുകളും പിന്നീട് EVM വോട്ടുകളും എണ്ണുന്നു.", "ഭരണമുണ്ടാക്കാൻ ലോക്‌സഭയിൽ 272+ സീറ്റുകൾ വേണം."] },
      { id: 7, title: "സർക്കാർ രൂപീകരണവും സത്യപ്രതിജ്ഞയും", description: "ഭൂരിപക്ഷമുള്ള നേതാവിനെ ക്ഷണിക്കുന്നു.", details: ["രാഷ്ട്രപതി ഏറ്റവും വലിയ കക്ഷിയുടെ നേതാവിനെ ക്ഷണിക്കുന്നു.", "പ്രധാനമന്ത്രിയും മന്ത്രിമാരും സത്യപ്രതിജ്ഞ ചെയ്യുന്നു.", "സഭയിൽ ഭൂരിപക്ഷം തെളിയിക്കേണ്ടതുണ്ട്."] }
    ],
    quizData: [
      { id: 1, question: "ഇന്ത്യയിൽ വോട്ട് ചെയ്യാൻ ഉപയോഗിക്കുന്ന പ്രധാന ഉപകരണം ഏത്?", options: ["ബാലറ്റ് പേപ്പർ", "EVM", "മൊബൈൽ ആപ്പ്", "പഞ്ച് കാർഡ്"], correctAnswer: 1, explanation: "വേഗത്തിലും കൃത്യമായും വോട്ടെണ്ണാൻ ഇന്ത്യ EVM ഉപയോഗിക്കുന്നു." },
      { id: 2, question: "വോട്ട് രേഖപ്പെടുത്തിയത് ശരിയാണോ എന്ന് പരിശോധിക്കാൻ സഹായിക്കുന്ന സംവിധാനം ഏത്?", options: ["OTP പരിശോധന", "VVPAT", "മഷി അടയാളം", "ഡിജിറ്റൽ രസീത്"], correctAnswer: 1, explanation: "VVPAT 7 സെക്കൻഡ് നേരത്തേക്ക് വോട്ട് ചെയ്ത സ്ഥാനാർത്ഥിയുടെ വിവരങ്ങളുള്ള സ്ലിപ്പ് കാണിക്കുന്നു." },
      { id: 3, question: "തിരഞ്ഞെടുപ്പ് നിയന്ത്രിക്കാൻ ECI നൽകുന്ന നിർദ്ദേശങ്ങൾ എന്താണ്?", options: ["തിരഞ്ഞെടുപ്പ് നിയമം", "ഡെമോക്രസി റൂൾബുക്ക്", "മാതൃകാ പെരുമാറ്റച്ചട്ടം (MCC)", "ഭരണഘടന"], correctAnswer: 2, explanation: "തിരഞ്ഞെടുപ്പ് നീതിപൂർവ്വമാകാൻ MCC സഹായിക്കുന്നു." },
      { id: 4, question: "ലോക്‌സഭയിൽ ഭൂരിപക്ഷത്തിന് എത്ര സീറ്റുകൾ വേണം?", options: ["250", "300", "272", "543"], correctAnswer: 2, explanation: "ഭരണമുണ്ടാക്കാൻ 272 സീറ്റുകൾ ആവശ്യമാണ്." },
      { id: 5, question: "വോട്ടെടുപ്പിന് മുമ്പുള്ള നിശബ്ദ കാലയളവ് എത്ര മണിക്കൂറാണ്?", options: ["12 മണിക്കൂർ", "24 മണിക്കൂർ", "48 മണിക്കൂർ", "72 മണിക്കൂർ"], correctAnswer: 2, explanation: "48 മണിക്കൂർ നിശബ്ദ കാലയളവ് വോട്ടർമാർക്ക് ചിന്തിക്കാൻ സമയം നൽകുന്നു." },
      { id: 6, question: "ലോക്‌സഭാ തിരഞ്ഞെടുപ്പിൽ സ്ഥാനാർത്ഥി കെട്ടിവെക്കേണ്ട തുക എത്ര?", options: ["₹10,000", "₹25,000", "₹50,000", "₹1,00,000"], correctAnswer: 1, explanation: "ജനറൽ സ്ഥാനാർത്ഥി ₹25,000 കെട്ടിവെക്കണം." },
      { id: 7, question: "ഇന്ത്യയിൽ തിരഞ്ഞെടുപ്പ് നടത്തുന്ന ഭരണഘടനാ സ്ഥാപനം ഏത്?", options: ["സുപ്രീം കോടതി", "പാർലമെന്റ്", "തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ (ECI)", "നീതി ആയോഗ്"], correctAnswer: 2, explanation: "ECI ആണ് തിരഞ്ഞെടുപ്പ് നടപടികൾ നിയന്ത്രിക്കുന്നത്." }
    ]
  },
  bn: {
    title: "ইলেক্টসেন্স",
    subtitle: "ভারত",
    tagline: "জাতীয় নাগরিক শিক্ষা পোর্টাল",
    motto: "সত্যমেব জয়তে",
    copyright: "© ২০২৬ ইলেক্টসেন্স ভারত • প্রথমবার ভোটারদের ক্ষমতায়ন",
    tabs: {
      timeline: "সময়রেখা",
      ask: "AI কে জিজ্ঞাসা করুন",
      quiz: "কুইজ",
      factcheck: "তথ্য যাচাই",
      tryvoting: "ভোট দেওয়ার চেষ্টা করুন",
      constituency: "আমার নির্বাচনী এলাকা"
    },
    constituency: {
      heading: "আমার নির্বাচনী এলাকা খুঁজুন",
      subheading: "আপনার নির্বাচনী এলাকা খুঁজে পেতে ৬ সংখ্যার পিনকোড দিন।",
      placeholder: "যেমন: ১১০০০১",
      button: "আমার নির্বাচনী এলাকা খুঁজুন",
      examples: "উদাহরণ পিনকোড:",
      lokSabha: "লোকসভা নির্বাচনী এলাকা",
      vidhanSabha: "বিধানসভা নির্বাচনী এলাকা",
      mp: "বর্তমান সাংসদ (দল)",
      voterList: "ভোটার তালিকায় নাম পরীক্ষা করুন",
      helpline: "ভোটার হেল্পলাইনে কল করুন (১৯৫০)",
      loading: "আপনার এলাকা চিহ্নিত করা হচ্ছে...",
      invalid: "দয়া করে সঠিক ৬ সংখ্যার পিনকোড দিন।"
    },
    timeline: {
      heading: "ভারতীয় নির্বাচনের যাত্রা",
      phasePrefix: "পর্যায়"
    },
    askAi: {
      heading: "ইলেক্টসেন্সকে জিজ্ঞাসা করুন",
      subheading: "Gemini AI দ্বারা চালিত • নিরপেক্ষ এবং তথ্যভিত্তিক",
      placeholder: "EVMs, MCC বা ২৭২ সংখ্যাগরিষ্ঠতা নিয়ম সম্পর্কে জিজ্ঞাসা করুন...",
      greeting: "নমস্কার! আমি ইলেক্টসেন্স। ভারত নির্বাচন প্রক্রিয়া বুঝতে আপনাকে সাহায্য করতে আমি এখানে আছি। আপনি কি জানতে চান?",
      thinking: "চিন্তা করছি..."
    },
    quiz: {
      questionPrefix: "প্রশ্ন",
      of: "এর",
      next: "পরবর্তী প্রশ্ন",
      results: "ফলাফল দেখুন",
      completed: "কুইজ সম্পন্ন হয়েছে!",
      subtext: "আমাদের গণতন্ত্র সম্পর্কে আপনার ভালো ধারণা রয়েছে।",
      retake: "আবার চেষ্টা করুন",
      feedback: {
        perfect: "সর্বোচ্চ নাগরিক! আপনি আপনার অধিকার সম্পর্কে পূর্ণ সচেতন।",
        good: "দারুণ কাজ! আপনি দায়িত্বশীলভাবে ভোট দিতে প্রস্তুত।",
        learning: "ভালো প্রচেষ্টা। আরও জানতে সময়রেখা দেখুন!"
      }
    },
    factCheck: {
      heading: "ফেক নিউজ ডিটেক্টর",
      subheading: "হোয়াটসঅ্যাপ ফরোয়ার্ড এবং নির্বাচনী দাবিগুলো তাৎক্ষণিকভাবে যাচাই করুন।",
      label: "দাবি বা বার্তা পোস্ট করুন",
      placeholder: "যেমন: ব্লুটুথের মাধ্যমে EVM হ্যাক করা যায়...",
      button: "এটি যাচাই করুন",
      verifying: "যাচাই করা হচ্ছে...",
      verdict: "রায়",
      explanation: "ব্যাখ্যা",
      source: "অফিসিয়াল উৎস"
    },
    tryVoting: {
      heading: "ভোট দেওয়ার চেষ্টা করুন",
      ballotUnit: "ব্যালট ইউনিট",
      deviceInfo: "ইলেক্ট্রনিক ভোটিং মেশিন • ভারত ইলেকট্রনিক্স লিমিটেড",
      howItWorks: "এটি কিভাবে কাজ করে",
      step1: "ভোটাররা তাদের পছন্দের প্রার্থীর নাম ও প্রতীকের পাশের নীল বোতামটি টিপবেন।",
      step2: "একটি লম্বা বিপ শব্দ নিশ্চিত করে যে ভোটটি ইলেক্ট্রনিকভাবে রেকর্ড করা হয়েছে।",
      step3: "VVPAT মেশিন নির্বাচিত প্রার্থীকে ৭ সেকেন্ডের জন্য একটি কাগজের স্লিপে দেখায়।",
      vvpatSystem: "VVPAT সিস্টেম",
      waiting: "ব্যালটের অপেক্ষায়...",
      success: "ভোট সফলভাবে দেওয়া হয়েছে!",
      successDetail: "আসল নির্বাচনে এই স্লিপটি ৭ সেকেন্ডের জন্য দৃশ্যমান হবে এবং তারপরে স্বয়ংক্রিয়ভাবে একটি সিল করা বাক্সে পড়ে যাবে।",
      reset: "রিসেট করুন"
    },
    timelineData: [
      { id: 1, title: "নির্বাচনের ঘোষণা", description: "ভারতের নির্বাচন কমিশন (ECI) সময়সূচী ঘোষণা করে।", details: ["মনোনয়ন, ভোটদান এবং গণনার তারিখ ঘোষণা করা হয়।", "আদর্শ আচরণবিধি (MCC) অবিলম্বে কার্যকর হয়।", "নতুন কোনো প্রকল্প ঘোষণা করা সরকারের জন্য নিষিদ্ধ হয়ে যায়।"] },
      { id: 2, title: "ভোটার তালিকা চূড়ান্ত করা", description: "ভোটার তালিকা প্রকাশ এবং যাচাই করা হয়।", details: ["ECI সমস্ত নির্বাচনী এলাকার আপডেট করা ভোটার তালিকা প্রকাশ করে।", "ভোটাররা ১৯৫০ হেল্পলাইন বা NVSP পোর্টালের মাধ্যমে নাম যাচাই করতে পারেন।", "ভোটার আইডি কার্ডের নতুন আবেদন প্রক্রিয়া সম্পন্ন হয়।"] },
      { id: 3, title: "মনোনয়ন পত্র জমা", description: "প্রার্থীরা রিটার্নিং অফিসারের কাছে মনোনয়ন পত্র জমা দেন।", details: ["প্রার্থীদের রিটার্নিং অফিসে মনোনয়ন জমা দিতে হয়।", "২৫,০০০ টাকা (সাধারণ) বা ১২,৫০০ টাকা (তফসিলি) আমানত প্রয়োজন।", "মনোনয়ন পত্র যাচাইয়ের সময় নির্ধারণ করা থাকে।"] },
      { id: 4, title: "প্রচার পর্ব", description: "রাজনৈতিক দল ও প্রার্থীরা ভোটারদের কাছে পৌঁছান।", details: ["প্রচার সাধারণত ১৪-২১ দিন চলে।", "MCC নিয়ম পালন করা বাধ্যতামূলক।", "লোকসভা প্রার্থীদের ব্যয়ের সীমা ৯৫ লক্ষ টাকা (বড় রাজ্যে)।"] },
      { id: 5, title: "মৌন সময় এবং ভোটদানের দিন", description: "ভোটের আগে ৪৮ ঘণ্টার মৌন সময় এবং প্রকৃত ভোটদান।", details: ["ভোট শেষ হওয়ার ৪৮ ঘণ্টা আগে 'মৌন সময়' শুরু হয়।", "ভোটাররা EVM ব্যবহার করেন।", "VVPAT-এর মাধ্যমে ভোটাররা তাদের ভোট যাচাই করতে পারেন।"] },
      { id: 6, title: "ভোট গণনা ও ফলাফল", description: "সমস্ত কেন্দ্রে ভোট গণনা করা হয়।", details: ["নির্ধারিত দিনে সকাল ৮:০০ টা থেকে গণনা শুরু হয়।", "প্রথমে পোস্টাল ব্যালট এবং পরে EVM গণনা হয়।", "সরকার গঠনের জন্য লোকসভায় ২৭২+ আসন প্রয়োজন।"] },
      { id: 7, title: "সরকার গঠন ও শপথ", description: "সংখ্যাগরিষ্ঠ দলের নেতাকে আমন্ত্রণ জানানো হয়।", details: ["রাষ্ট্রপতি বৃহত্তম দল বা জোটের নেতাকে আমন্ত্রণ জানান।", "প্রধানমন্ত্রী ও মন্ত্রিসভা রাষ্ট্রপতি ভবনে শপথ গ্রহণ করেন।", "নতুন সরকারকে সদনে সংখ্যাগরিষ্ঠতা প্রমাণ করতে হয়।"] }
    ],
    quizData: [
      { id: 1, question: "ভারতে ভোট দেওয়ার জন্য প্রধানত কোন যন্ত্রটি ব্যবহৃত হয়?", options: ["কাগজের ব্যালট", "EVM", "মোবাইল অ্যাপ", "পাঞ্চ কার্ড"], correctAnswer: 1, explanation: "দ্রুত ও নির্ভুল গণনার জন্য ভারত EVM ব্যবহার করে।" },
      { id: 2, question: "কোন ব্যবস্থা ভোটারকে তার ভোট যাচাই করতে দেয়?", options: ["OTP যাচাই", "VVPAT", "কালির দাগ", "ডিজিটাল রসিদ"], correctAnswer: 1, explanation: "VVPAT ৭ সেকেন্ডের জন্য একটি স্লিপ দেখায়।" },
      { id: 3, question: "নির্বাচনের সময় দল ও প্রার্থীদের জন্য নির্দেশিকা কোনটি?", options: ["নির্বাচন আইন", "গণতন্ত্র নিয়মাবলী", "আদর্শ আচরণবিধি (MCC)", "সংবিধান"], correctAnswer: 2, explanation: "MCC নিরপেক্ষ নির্বাচন নিশ্চিত করে।" },
      { id: 4, question: "লোকসভায় সংখ্যাগরিষ্ঠতার জন্য কয়টি আসন দরকার?", options: ["২৫০", "৩০০", "২৭২", "৫৪৩"], correctAnswer: 2, explanation: "সরকার গড়তে ২৭২টি আসন প্রয়োজন।" },
      { id: 5, question: "ভোটের আগের 'মৌন সময়' কত ঘণ্টা হয়?", options: ["১২ ঘণ্টা", "২৪ ঘণ্টা", "৪৮ ঘণ্টা", "৭২ ঘণ্টা"], correctAnswer: 2, explanation: "ভোটের আগের ৪৮ ঘণ্টা মৌন সময় থাকে।" },
      { id: 6, question: "লোকসভা নির্বাচনে আমানতের পরিমাণ কত?", options: ["১০,০০০", "২৫,০০০", "৫০,০০০", "১,০০,০০০"], correctAnswer: 1, explanation: "সাধারণ প্রার্থীর জন্য আমানত ২৫,০০০ টাকা।" },
      { id: 7, question: "ভারতে ভোট পরিচালনার দায়িত্বে কোন সংস্থা থাকে?", options: ["সুপ্রিম কোর্ট", "সংসদ", "ভারতের নির্বাচন কমিশন (ECI)", "নীতি আয়োগ"], correctAnswer: 2, explanation: "ECI ভারতের নির্বাচন পরিচালনা করে।" }
    ]
  }
};
