export interface TimelinePhase {
  id: number;
  title: string;
  description: string;
  details: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const TIMELINE_DATA: TimelinePhase[] = [
  {
    id: 1,
    title: "Election Announcement",
    description: "The Election Commission of India (ECI) announces the schedule.",
    details: [
      "Schedule of dates for nomination, polling, and counting is released.",
      "Model Code of Conduct (MCC) comes into force immediately.",
      "Government is prohibited from announcing new projects or schemes."
    ]
  },
  {
    id: 2,
    title: "Voter Roll Finalization",
    description: "Electoral rolls are published and verified.",
    details: [
      "ECI publishes updated electoral rolls for all constituencies.",
      "Voters can verify their names via the 1950 helpline or National Voters' Service Portal.",
      "New applications for voter ID cards are processed."
    ]
  },
  {
    id: 3,
    title: "Candidate Nomination",
    description: "Candidates file their papers with the Returning Officer.",
    details: [
      "Candidates must file nominations at the Returning Office.",
      "A security deposit of ₹25,000 (General) or ₹12,500 (SC/ST) is required.",
      "A scrutiny window is provided for valid nominations."
    ]
  },
  {
    id: 4,
    title: "Campaign Period",
    description: "Political parties and candidates reach out to voters.",
    details: [
      "Campaigning typically lasts 14-21 days.",
      "Adherence to MCC rules is mandatory.",
      "Expense cap for Lok Sabha candidates is set at ₹95 lakh (in larger states)."
    ]
  },
  {
    id: 5,
    title: "Silent Period & Polling Day",
    description: "The 48-hour quiet period followed by actual voting.",
    details: [
      "48-hour 'silence period' begins before the end of polling.",
      "Voters use Electronic Voting Machines (EVMs).",
      "Voters can verify their vote through VVPAT (Voter Verifiable Paper Audit Trail)."
    ]
  },
  {
    id: 6,
    title: "Vote Counting & Results",
    description: "Votes are tallied across all counting centers.",
    details: [
      "Counting begins at 8:00 AM on the designated day.",
      "First postal ballots are counted, then EVM results.",
      "A simple majority of 272+ seats in the Lok Sabha is required to form the government."
    ]
  },
  {
    id: 7,
    title: "Government Formation & Oath",
    description: "The majority leader is invited to lead the nation.",
    details: [
      "The President of India invites the leader of the single largest party or coalition.",
      "The Prime Minister and the Council of Ministers are sworn in at Rashtrapati Bhavan.",
      "The new government must prove its majority on the floor of the house if requested."
    ]
  }
];

export const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the primary device used by voters in India to cast their ballots?",
    options: ["Paper Ballot", "EVM (Electronic Voting Machine)", "Mobile App", "Punch Card"],
    correctAnswer: 1,
    explanation: "India uses EVMs to ensure fast, secure, and accurate tallying of votes across the country."
  },
  {
    id: 2,
    question: "Which system allows a voter to physically verify that their vote was cast correctly?",
    options: ["OTP Verification", "VVPAT", "Ink Mark", "Digital Receipt"],
    correctAnswer: 1,
    explanation: "Voter Verifiable Paper Audit Trail (VVPAT) prints a slip for 7 seconds to show the voter their selected candidate."
  },
  {
    id: 3,
    question: "What is the set of guidelines issued by the ECI to regulate parties and candidates during elections?",
    options: ["Election Law", "Democracy Rulebook", "Model Code of Conduct (MCC)", "The Constitution"],
    correctAnswer: 2,
    explanation: "The Model Code of Conduct (MCC) ensures fair play and prevents the ruling party from misusing government machinery."
  },
  {
    id: 4,
    question: "How many seats are needed to reach a simple majority in the Lok Sabha?",
    options: ["250", "300", "272", "543"],
    correctAnswer: 2,
    explanation: "With 543 elected seats, a party or coalition needs 272 seats to form the government."
  },
  {
    id: 5,
    question: "The 'Silent Period' before polling begins lasts for how many hours?",
    options: ["12 hours", "24 hours", "48 hours", "72 hours"],
    correctAnswer: 2,
    explanation: "The 48-hour silent period ensures voters have time to reflect without the influence of active campaigning."
  },
  {
    id: 6,
    question: "What is the security deposit for a General category candidate in a Lok Sabha election?",
    options: ["₹10,000", "₹25,000", "₹50,000", "₹1,00,000"],
    correctAnswer: 1,
    explanation: "Candidates must deposit ₹25,000, which is forfeited if they fail to secure at least 1/6th of the valid votes."
  },
  {
    id: 7,
    question: "Which constitutional body is responsible for conducting elections in India?",
    options: ["Supreme Court", "Parliament", "Election Commission of India (ECI)", "NITI Aayog"],
    correctAnswer: 2,
    explanation: "The ECI is an autonomous constitutional authority responsible for administering election processes in India."
  }
];

export interface Candidate {
  id: number;
  name: string;
  party: string;
  symbol: string;
}

export const CANDIDATES: Candidate[] = [
  { id: 1, name: "Aravind Singh", party: "Progressive People's Party", symbol: "🚩" },
  { id: 2, name: "Meera Bai", party: "United Nature Alliance", symbol: "🌳" },
  { id: 3, name: "Vikram Rao", party: "Digital Bharat Front", symbol: "💻" },
  { id: 4, name: "Sana Khan", party: "Harmony & Peace Wing", symbol: "🕊️" },
  { id: 5, name: "Rajesh Gupta", party: "Swatantra Enterprise Group", symbol: "🏢" }
];
