/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  History, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck,
  ChevronDown, 
  ChevronUp, 
  Send, 
  Bot, 
  User, 
  RefreshCcw,
  Flag,
  Vote,
  Calendar,
  Info,
  Hand,
  Download,
  Share2,
  MapPin,
  Search,
  Building2,
  PhoneCall,
  ExternalLink,
  ArrowLeft,
  Globe
} from 'lucide-react';
import { CANDIDATES, TimelinePhase, QuizQuestion, Candidate } from './constants';
import { askElectSense, factCheckClaim, findConstituency } from './services/geminiService';
import { translations, Language, LANGUAGES } from './translations';
import LandingPage from './LandingPage';
import html2canvas from 'html2canvas';

// --- Components ---

const TimelineTab = ({ translations }: { translations: any }) => {
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const t = translations;

  return (
    <div className="space-y-4 max-w-3xl mx-auto py-6">
      <h2 className="text-2xl font-bold text-[#1A3A6B] mb-6 flex items-center gap-2">
        <Calendar className="w-6 h-6" /> {t.timeline.heading}
      </h2>
      {t.timelineData.map((phase: any) => (
        <motion.div 
          key={phase.id}
          id={`phase-${phase.id}`}
          className="bg-white border-l-4 border-[#FF9933] rounded-r-xl shadow-md overflow-hidden"
          layout
        >
          <button 
            onClick={() => setExpandedId(expandedId === phase.id ? null : phase.id)}
            className="w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            <div>
              <span className="text-xs font-bold text-[#FF9933] uppercase tracking-wider">{t.timeline.phasePrefix} {phase.id}</span>
              <h3 className="text-lg font-semibold text-[#1A3A6B]">{phase.title}</h3>
            </div>
            {expandedId === phase.id ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
          </button>
          
          <AnimatePresence>
            {expandedId === phase.id && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="px-5 pb-5 border-t border-gray-100"
              >
                <p className="text-gray-600 mt-4 mb-4 font-medium italic">{phase.description}</p>
                <ul className="space-y-3">
                  {phase.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

const AskAITab = ({ translations, language }: { translations: any, language: string }) => {
  const t = translations;
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([
    { role: 'bot', content: t.askAi.greeting }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setInput('');
    setLoading(true);

    const response = await askElectSense(userMsg, language);
    setMessages(prev => [...prev, { role: 'bot', content: response }]);
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-220px)] max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 mt-6">
      <div className="bg-[#1A3A6B] p-4 text-white flex items-center gap-3">
        <div className="bg-white/20 p-2 rounded-full">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <h2 className="font-bold">{t.askAi.heading}</h2>
          <p className="text-xs text-white/70">{t.askAi.subheading}</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm flex gap-3 ${
              msg.role === 'user' 
                ? 'bg-[#1A3A6B] text-white rounded-br-none' 
                : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
            }`}>
              {msg.role === 'bot' && <Bot className="w-5 h-5 shrink-0 mt-1 text-[#FF9933]" />}
              <p className="text-sm leading-relaxed">{msg.content}</p>
              {msg.role === 'user' && <User className="w-5 h-5 shrink-0 mt-1 text-white/50" />}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-2 items-center">
              <RefreshCcw className="w-4 h-4 animate-spin text-[#FF9933]" />
              <span className="text-sm text-gray-500 italic">{t.askAi.thinking}</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-gray-200">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.askAi.placeholder}
            className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1A3A6B] focus:border-transparent outline-none text-sm"
          />
          <button 
            type="submit"
            disabled={loading}
            className="bg-[#FF9933] hover:bg-[#E68A2E] text-white p-3 rounded-xl transition-colors disabled:opacity-50"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

const QuizTab = ({ translations }: { translations: any }) => {
  const t = translations;
  const [shuffledQuestions, setShuffledQuestions] = useState<any[]>(() => {
    // Initial shuffle
    return [...t.quizData].sort(() => Math.random() - 0.5);
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Still update if translations change (language switch)
  useEffect(() => {
    setShuffledQuestions([...t.quizData].sort(() => Math.random() - 0.5));
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsCorrect(null);
  }, [t.quizData]);

  const shuffleAndSetQuestions = () => {
    setShuffledQuestions([...t.quizData].sort(() => Math.random() - 0.5));
  };

  const handleOptionSelect = (idx: number) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(idx);
    const correct = idx === shuffledQuestions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(prev => prev + 1);
  };

  const nextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    shuffleAndSetQuestions();
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const getCivicRank = (s: number) => {
    if (s === 7) return "Election Expert 🏆";
    if (s >= 5) return "Informed Voter ⭐";
    if (s >= 3) return "Civic Learner 📚";
    return "Just Getting Started 🌱";
  };

  const downloadCard = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: '#ffffff',
        scale: 2,
      });
      const link = document.createElement('a');
      link.download = `electsense-score-${score}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  const shareOnWhatsApp = () => {
    const appUrl = window.location.href;
    const text = `I scored ${score}/7 on the ElectSense India civic quiz! Are you election-ready? Try it here: ${appUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (showResult) {
    const rank = getCivicRank(score);
    const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

    return (
      <div className="max-w-xl mx-auto py-10 space-y-8">
        {/* Score Card for Export */}
        <div 
          ref={cardRef}
          className="bg-white p-1 rounded-[32px] shadow-2xl relative overflow-hidden max-w-sm mx-auto"
        >
          {/* Flag Border Gradient Wrapper */}
          <div className="absolute inset-0 p-[8px] rounded-[32px]">
            <div className="w-full h-full rounded-[24px] bg-white relative z-10 p-8 shadow-inner border border-gray-100">
              <div className="text-center relative z-10">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="w-12 h-12 bg-[#1A3A6B] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl rotate-3">
                    V
                  </div>
                  <div>
                    <h1 className="text-2xl font-black text-[#1A3A6B] tracking-tight leading-none">
                      ElectSense <span className="text-[#FF9933]">India</span>
                    </h1>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Civic Excellence</p>
                  </div>
                </div>

                <div className="bg-gray-50/50 rounded-2xl p-6 mb-6 border border-gray-100">
                  <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-3">Quiz Result</h2>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-7xl font-black text-[#1A3A6B] tracking-tighter">{score}</span>
                    <span className="text-2xl font-bold text-gray-300">/ 7</span>
                  </div>
                  <div className="mt-4 bg-[#FF9933] text-white py-2 px-4 rounded-xl inline-block text-sm font-bold shadow-sm">
                    {rank}
                  </div>
                </div>

                <p className="text-gray-600 font-medium italic mb-8 mx-auto text-sm leading-relaxed px-4">
                  "I tested my election knowledge on ElectSense India!"
                </p>

                <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                  <div className="text-left">
                    <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Authenticated On</p>
                    <p className="text-[10px] font-black text-[#1A3A6B]">{today}</p>
                  </div>
                  <div className="flex items-center gap-2 opacity-30 grayscale">
                    <Flag className="w-4 h-4 text-[#1A3A6B]" />
                    <span className="text-[8px] font-black text-[#1A3A6B] uppercase tracking-widest leading-none">Digital<br/>Pradesh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Flag Gradient Backgrounds */}
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-[#FF9933]"></div>
          <div className="absolute top-1/3 left-0 right-0 h-1/3 bg-white"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[#138808]"></div>
          
          {/* Subtle Overlays */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/5 rounded-full blur-2xl -ml-16 -mb-16"></div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            onClick={downloadCard}
            className="flex items-center justify-center gap-2 bg-[#1A3A6B] text-white font-bold py-4 rounded-2xl hover:bg-[#132C52] transition-all shadow-md"
          >
            <Download className="w-5 h-5" /> Download Card
          </button>
          <button 
            onClick={shareOnWhatsApp}
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 rounded-2xl hover:bg-[#1DA851] transition-all shadow-md"
          >
            <Share2 className="w-5 h-5" /> Share on WhatsApp
          </button>
          <button 
            onClick={resetQuiz}
            className="md:col-span-2 flex items-center justify-center gap-2 bg-gray-100 text-gray-600 font-bold py-4 rounded-2xl hover:bg-gray-200 transition-all"
          >
            <RefreshCcw className="w-5 h-5" /> Try Again
          </button>
        </div>
      </div>
    );
  }

  if (shuffledQuestions.length === 0) return null;

  const q = shuffledQuestions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <span className="text-xs font-bold text-[#FF9933] uppercase tracking-widest">{t.quiz.questionPrefix} {currentQuestion + 1} {t.quiz.of} {shuffledQuestions.length}</span>
          <h2 className="text-2xl font-bold text-[#1A3A6B] mt-1">{q.question}</h2>
        </div>
      </div>

      <div className="space-y-4">
        {q.options.map((opt: string, idx: number) => (
          <button
            key={idx}
            onClick={() => handleOptionSelect(idx)}
            disabled={selectedOption !== null}
            className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex justify-between items-center ${
              selectedOption === idx 
                ? idx === q.correctAnswer 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-red-500 bg-red-50'
                : selectedOption !== null && idx === q.correctAnswer
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-[#1A3A6B] hover:bg-blue-50'
            }`}
          >
            <span className="font-medium text-gray-800">{opt}</span>
            {selectedOption !== null && idx === q.correctAnswer && <CheckCircle2 className="w-6 h-6 text-green-500" />}
            {selectedOption === idx && idx !== q.correctAnswer && <span className="text-red-500 font-bold">X</span>}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selectedOption !== null && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-8 p-5 rounded-2xl border ${isCorrect ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}
          >
            <div className="flex items-start gap-4">
              <Info className={`w-6 h-6 shrink-0 ${isCorrect ? 'text-green-600' : 'text-red-600'}`} />
              <div>
                <h4 className={`font-bold mb-1 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {isCorrect ? 'Correct Answer!' : 'Learning Moment'}
                </h4>
                <p className="text-sm text-gray-700">{q.explanation}</p>
                <button 
                  onClick={nextQuestion}
                  className="mt-4 bg-[#1A3A6B] text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg"
                >
                  {currentQuestion < shuffledQuestions.length - 1 ? t.quiz.next : t.quiz.results}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FactCheckTab = ({ translations, language }: { translations: any, language: string }) => {
  const t = translations;
  const [claim, setClaim] = useState('');
  const [verdictData, setVerdictData] = useState<{ verdict: string, explanation: string, source: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const examples = [
    "EVMs are connected to the internet during voting",
    "You need a Voter ID card to vote — no other ID works",
    "The MCC bans all government announcements during elections"
  ];

  const handleCheck = async (textToCheck: string) => {
    const text = textToCheck || claim.trim();
    if (!text || loading) return;
    
    setLoading(true);
    setVerdictData(null);
    if (textToCheck) setClaim(textToCheck);

    const response = await factCheckClaim(text, language);
    
    // Parse response
    const verdictMatch = response.match(/VERDICT:\s*(TRUE|FALSE|MISLEADING|UNVERIFIED)/i);
    const explanationMatch = response.match(/EXPLANATION:\s*([\s\S]*?)(?=SOURCE:|$)/i);
    const sourceMatch = response.match(/SOURCE:\s*([\s\S]*?)$/i);

    setVerdictData({
      verdict: verdictMatch ? verdictMatch[1].toUpperCase() : 'UNVERIFIED',
      explanation: explanationMatch ? explanationMatch[1].trim() : 'Could not analyze claim details.',
      source: sourceMatch ? sourceMatch[1].trim() : 'Official ECI Guidelines'
    });
    setLoading(false);
  };

  const getVerdictStyles = (verdict: string) => {
    switch (verdict) {
      case 'TRUE': return { bg: 'bg-[#3B6D11]/10', text: 'text-[#3B6D11]', border: 'border-[#3B6D11]' };
      case 'FALSE': return { bg: 'bg-[#993C1D]/10', text: 'text-[#993C1D]', border: 'border-[#993C1D]' };
      case 'MISLEADING': return { bg: 'bg-[#FF9933]/10', text: 'text-[#FF9933]', border: 'border-[#FF9933]' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-300' };
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <div className="bg-[#1A3A6B] text-white p-8 rounded-3xl shadow-xl mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-3 flex items-center gap-3">
            <ShieldCheck className="w-10 h-10 text-[#FF9933]" />
            {t.factCheck.heading}
          </h2>
          <p className="text-blue-100/100 font-medium">{t.factCheck.subheading}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <label className="block text-sm font-bold text-[#1A3A6B] mb-3 uppercase tracking-wider">{t.factCheck.label}</label>
          <textarea 
            value={claim}
            onChange={(e) => setClaim(e.target.value)}
            disabled={loading}
            placeholder={t.factCheck.placeholder}
            className="w-full h-32 p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1A3A6B] focus:border-transparent outline-none transition-all resize-none text-gray-700 mb-4"
          />
          <div className="flex flex-wrap gap-2 mb-4">
            {examples.map((ex, i) => (
              <button 
                key={i} 
                onClick={() => handleCheck(ex)}
                disabled={loading}
                className="text-[10px] font-bold py-1.5 px-3 bg-gray-50 border border-gray-200 rounded-full text-gray-500 hover:border-[#FF9933] hover:text-[#1A3A6B] transition-all"
              >
                {ex.length > 40 ? ex.substring(0, 40) + '...' : ex}
              </button>
            ))}
          </div>
          <button 
            onClick={() => handleCheck('')}
            disabled={loading || !claim.trim()}
            className="w-full bg-[#1A3A6B] hover:bg-[#132C52] text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <RefreshCcw className="w-5 h-5 animate-spin" /> : <ShieldCheck className="w-5 h-5" />}
            {loading ? t.factCheck.verifying : t.factCheck.button}
          </button>
        </div>

        <AnimatePresence>
          {verdictData && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-8 rounded-2xl border-2 ${getVerdictStyles(verdictData.verdict).border} ${getVerdictStyles(verdictData.verdict).bg}`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 min-w-[140px] text-center">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{t.factCheck.verdict}</span>
                  <span className={`text-xl font-black ${getVerdictStyles(verdictData.verdict).text}`}>
                    {verdictData.verdict}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#1A3A6B] mb-2">{t.factCheck.explanation}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{verdictData.explanation}</p>
                  <div className="flex items-start gap-2 bg-white/50 p-3 rounded-lg border border-gray-100">
                    <Info className="w-4 h-4 text-[#1A3A6B] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block">{t.factCheck.source}</span>
                      <span className="text-xs font-bold text-[#1A3A6B]">{verdictData.source}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const TryVotingTab = ({ translations }: { translations: any }) => {
  const t = translations;
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [beep, setBeep] = useState(false);
  const [showVVPAT, setShowVVPAT] = useState(false);
  const [voteCast, setVoteCast] = useState(false);

  const handleVote = (candidate: Candidate) => {
    if (voteCast) return;
    
    setSelectedCandidate(candidate);
    setBeep(true);
    setVoteCast(true);
    
    // Play EVM Beep Sound
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        const audioCtx = new AudioContext();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(950, audioCtx.currentTime); 

        gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 1.2);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 1.2);
      }
    } catch (e) {
      console.warn("Audio beep failed", e);
    }
    
    // Visual beep effect duration
    setTimeout(() => setBeep(false), 500);
    
    // VVPAT delay simulation
    setTimeout(() => {
      setShowVVPAT(true);
      // VVPAT shows for 7 seconds
      setTimeout(() => setShowVVPAT(false), 7000);
    }, 800);
  };

  const resetVoting = () => {
    setVoteCast(false);
    setSelectedCandidate(null);
    setShowVVPAT(false);
    setBeep(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 flex flex-col md:flex-row gap-10 items-start">
      {/* EVM Unit */}
      <div className="flex-1">
        <div className="bg-[#E5E7EB] rounded-3xl p-6 border-4 border-[#9CA3AF] shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative">
          <div className="bg-[#DC2626] w-6 h-6 rounded-full absolute top-6 right-6 shadow-[0_0_15px_rgba(220,38,38,0.5)] border-2 border-white/30"></div>
          {beep && (
            <div className="absolute inset-0 bg-red-400/20 rounded-3xl animate-pulse pointer-events-none"></div>
          )}
          
          <div className="text-center mb-8">
            <h3 className="text-gray-500 font-black tracking-[0.3em] uppercase text-xl">{t.tryVoting.ballotUnit}</h3>
            <div className="w-24 h-1.5 bg-gray-400 mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="space-y-3">
            {CANDIDATES.map((candidate) => (
              <div 
                key={candidate.id} 
                className="bg-white border-2 border-gray-300 rounded-xl flex items-center p-3 gap-4"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-gray-500 border border-gray-200">
                  {candidate.id}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{candidate.symbol}</span>
                    <div>
                      <h4 className="font-bold text-[#1A3A6B] text-sm leading-tight">{candidate.name}</h4>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{candidate.party}</p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => handleVote(candidate)}
                  disabled={voteCast}
                  className={`w-14 h-14 rounded-xl border-b-4 transition-all active:translate-y-1 active:border-b-0 ${
                    voteCast 
                    ? 'bg-gray-200 border-gray-300 cursor-not-allowed opacity-50' 
                    : 'bg-[#1A3A6B] border-[#132C52] hover:bg-[#132C52] shadow-lg'
                  }`}
                >
                  <div className="w-6 h-6 bg-blue-400/30 rounded-full mx-auto"></div>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-300 flex justify-between items-center px-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            </div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">{t.tryVoting.deviceInfo}</p>
          </div>
        </div>

        <div className="mt-10 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h4 className="font-bold text-[#1A3A6B] mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-[#FF9933]" /> {t.tryVoting.howItWorks}
          </h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1A3A6B] flex items-center justify-center text-[10px] font-black shrink-0">1</div>
              <p>{t.tryVoting.step1}</p>
            </li>
            <li className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1A3A6B] flex items-center justify-center text-[10px] font-black shrink-0">2</div>
              <p>{t.tryVoting.step2}</p>
            </li>
            <li className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-100 text-[#1A3A6B] flex items-center justify-center text-[10px] font-black shrink-0">3</div>
              <p>{t.tryVoting.step3}</p>
            </li>
          </ul>
        </div>
      </div>

      {/* VVPAT Unit */}
      <div className="w-full md:w-80 flex flex-col gap-6 sticky top-28">
        <div className="bg-[#D1D5DB] rounded-3xl p-5 border-4 border-[#9CA3AF] shadow-xl">
          <div className="bg-gray-800 h-48 rounded-xl relative overflow-hidden flex items-center justify-center border-4 border-gray-900 shadow-inner">
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/50 to-transparent z-20"></div>
            
            <AnimatePresence>
              {showVVPAT && selectedCandidate && (
                <motion.div 
                  initial={{ y: -200 }}
                  animate={{ y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="bg-white w-40 h-32 p-4 shadow-2xl relative"
                >
                  <div className="border-2 border-gray-100 h-full flex flex-col items-center justify-center text-center p-2">
                    <span className="text-3xl mb-1">{selectedCandidate.symbol}</span>
                    <h5 className="text-[10px] font-black text-[#1A3A6B] uppercase leading-tight">{selectedCandidate.name}</h5>
                    <div className="w-full h-[1px] bg-gray-200 my-1"></div>
                    <p className="text-[8px] font-bold text-green-600 uppercase">{t.tryVoting.success}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!showVVPAT && !voteCast && (
              <p className="text-gray-600 text-[10px] uppercase font-black tracking-widest animate-pulse">{t.tryVoting.waiting}</p>
            )}

            {voteCast && !showVVPAT && (
              <div className="text-center p-4">
                <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-2" />
                <p className="text-[10px] text-green-500 font-bold uppercase">{t.tryVoting.success}</p>
              </div>
            )}
          </div>
          <p className="text-center mt-3 text-[10px] font-black text-gray-500 uppercase tracking-widest">{t.tryVoting.vvpatSystem}</p>
        </div>

        {voteCast && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-green-500"
          >
            <h4 className="font-bold text-[#1A3A6B] mb-2">{t.tryVoting.success}</h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              {t.tryVoting.successDetail}
            </p>
            <button 
              onClick={resetVoting}
              className="w-full bg-[#1A3A6B] text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#132C52] transition-all"
            >
              <RefreshCcw className="w-4 h-4" /> {t.tryVoting.reset}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

const ConstituencyTab = ({ translations }: { translations: any }) => {
  const t = translations;
  const [pincode, setPincode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState<any>(null);

  const examples = [
    { code: '110001', label: 'Delhi' },
    { code: '400001', label: 'Mumbai' },
    { code: '682001', label: 'Kochi' }
  ];

  const handleSearch = async (val?: string) => {
    const code = val || pincode;
    if (!/^\d{6}$/.test(code)) {
      setError(t.constituency.invalid);
      return;
    }

    setError('');
    setLoading(true);
    setResult(null);
    if (val) setPincode(val);

    const response = await findConstituency(code);
    try {
      const data = JSON.parse(response);
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch (e) {
      setError("Failed to parse electoral data.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <div className="bg-[#1A3A6B] text-white p-8 rounded-3xl shadow-xl mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-3 flex items-center gap-3">
            <MapPin className="w-10 h-10 text-[#FF9933]" />
            {t.constituency.heading}
          </h2>
          <p className="text-blue-100 font-medium">{t.constituency.subheading}</p>
        </div>
      </div>

      {/* Quick Access Portal Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <a 
          href="https://electoralsearch.eci.gov.in/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between p-5 bg-white border-2 border-gray-100 rounded-3xl hover:border-[#FF9933] transition-all group shadow-sm hover:shadow-md"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FF9933]/10 rounded-2xl flex items-center justify-center text-[#FF9933]">
              <Search className="w-6 h-6" />
            </div>
            <div>
              <span className="font-black text-[#1A3A6B] block leading-tight">{t.constituency.voterList}</span>
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1">Direct Search</span>
            </div>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-[#FF9933]" />
        </a>
        <a 
          href="https://voters.eci.gov.in/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between p-5 bg-white border-2 border-gray-100 rounded-3xl hover:border-[#1A3A6B] transition-all group shadow-sm hover:shadow-md"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#1A3A6B]">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <span className="font-black text-[#1A3A6B] block leading-tight">Voter Portal</span>
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mt-1">ECI Official</span>
            </div>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-[#1A3A6B]" />
        </a>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              maxLength={6}
              value={pincode}
              onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
              placeholder={t.constituency.placeholder}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#1A3A6B] focus:border-transparent outline-none transition-all text-lg font-bold tracking-widest"
            />
          </div>
          <button 
            onClick={() => handleSearch()}
            disabled={loading || pincode.length !== 6}
            className="bg-[#1A3A6B] hover:bg-[#132C52] text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 min-w-[200px]"
          >
            {loading ? <RefreshCcw className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
            {t.constituency.button}
          </button>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t.constituency.examples}</span>
          {examples.map((ex) => (
            <button
              key={ex.code}
              onClick={() => handleSearch(ex.code)}
              disabled={loading}
              className="text-xs font-bold py-2 px-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-600 hover:border-[#FF9933] hover:text-[#1A3A6B] transition-all"
            >
              {ex.code} ({ex.label})
            </button>
          ))}
        </div>

        {error && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-red-500 font-bold text-sm bg-red-50 p-4 rounded-xl border border-red-100 text-center"
          >
            {error}
          </motion.p>
        )}
      </div>

      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-20"
          >
            <div className="w-16 h-16 border-4 border-[#FF9933]/20 border-t-[#FF9933] rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">{t.constituency.loading}</p>
          </motion.div>
        )}

        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-[#1A3A6B] p-6 text-white flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-black">{result.state}</h3>
                  <p className="text-xs text-white/70 uppercase font-bold tracking-widest">{result.district} District</p>
                </div>
                <Flag className="w-10 h-10 text-[#FF9933]/50" />
              </div>
              
              <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0 border border-orange-100">
                    <Vote className="w-7 h-7 text-[#FF9933]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">{t.constituency.lokSabha}</span>
                    <h4 className="text-xl font-bold text-[#1A3A6B]">{result.lok_sabha}</h4>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 border border-blue-100">
                    <Building2 className="w-7 h-7 text-[#1A3A6B]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">{t.constituency.vidhanSabha}</span>
                    <h4 className="text-xl font-bold text-[#1A3A6B]">{result.vidhan_sabha}</h4>
                  </div>
                </div>

                <div className="flex gap-5 md:col-span-2 pt-4 border-t border-gray-100">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center shrink-0 border border-green-100">
                    <User className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">{t.constituency.mp}</span>
                    <h4 className="text-xl font-bold text-[#1A3A6B]">{result.current_mp}</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href={result.eci_url || "https://electoralsearch.eci.gov.in/"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-[#1A3A6B] text-white font-bold py-5 rounded-2xl hover:bg-[#132C52] transition-all shadow-lg"
              >
                <ExternalLink className="w-5 h-5" /> {t.constituency.voterList}
              </a>
              <a 
                href={`tel:${result.voter_helpline}`}
                className="flex items-center justify-center gap-3 bg-white border-2 border-[#1A3A6B] text-[#1A3A6B] font-bold py-5 rounded-2xl hover:bg-gray-50 transition-all shadow-md"
              >
                <PhoneCall className="w-5 h-5" /> {t.constituency.helpline}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<'landing' | 'app'>('landing');
  const [activeTab, setActiveTab] = useState<'timeline' | 'ask' | 'quiz' | 'factcheck' | 'tryvoting' | 'constituency'>('timeline');
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('electSenseLanguage');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('electSenseLanguage', language);
  }, [language]);

  const t = translations[language];

  if (view === 'landing') {
    return <LandingPage onStart={() => setView('app')} language={language} setLanguage={setLanguage} />;
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#333333] font-sans selection:bg-[#FF9933]/30">
      {/* Header */}
      <header className="bg-white border-b-4 border-[#1A3A6B] sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setView('landing')}
              className="bg-[#1A3A6B] p-2.5 rounded-xl text-white hover:bg-[#132C52] transition-colors"
            >
              <Vote className="w-8 h-8" />
            </button>
            <div className="cursor-pointer" onClick={() => setView('landing')}>
              <h1 className="text-2xl font-black text-[#1A3A6B] tracking-tight flex items-center gap-2">
                {t.title} <span className="text-[#FF9933]">{t.subtitle}</span>
              </h1>
              <p className="text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em]">{t.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl border border-gray-100 mx-4">
            <div className="px-2 border-r border-gray-200">
              <Globe className="w-4 h-4 text-[#1A3A6B] opacity-50" />
            </div>
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-[150px] sm:max-w-none">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as Language)}
                  className={`px-2 sm:px-3 py-1.5 rounded-lg text-xs font-black transition-all whitespace-nowrap ${
                    language === lang.code 
                      ? 'bg-white text-[#1A3A6B] shadow-md' 
                      : 'text-gray-400 hover:text-[#1A3A6B]'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          <nav className="hidden md:flex bg-gray-100 p-1.5 rounded-2xl gap-2 border border-gray-200">
            <button 
              onClick={() => setActiveTab('timeline')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'timeline' ? 'bg-white text-[#1A3A6B] shadow-sm' : 'text-gray-500 hover:text-[#1A3A6B]'
              }`}
            >
              <History className="w-4 h-4" /> {t.tabs.timeline}
            </button>
            <button 
              onClick={() => setActiveTab('ask')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'ask' ? 'bg-white text-[#1A3A6B] shadow-sm' : 'text-gray-500 hover:text-[#1A3A6B]'
              }`}
            >
              <MessageSquare className="w-4 h-4" /> {t.tabs.ask}
            </button>
            <button 
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'quiz' ? 'bg-white text-[#1A3A6B] shadow-sm' : 'text-gray-500 hover:text-[#1A3A6B]'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" /> {t.tabs.quiz}
            </button>
            <button 
              onClick={() => setActiveTab('factcheck')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'factcheck' ? 'bg-white text-[#1A3A6B] shadow-sm' : 'text-gray-500 hover:text-[#1A3A6B]'
              }`}
            >
              <ShieldCheck className="w-4 h-4" /> {t.tabs.factcheck}
            </button>
            <button 
              onClick={() => setActiveTab('constituency')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'constituency' ? 'bg-white text-[#1A3A6B] shadow-sm' : 'text-gray-500 hover:text-[#1A3A6B]'
              }`}
            >
              <MapPin className="w-4 h-4" /> {t.tabs.constituency}
            </button>
            <button 
              onClick={() => setActiveTab('tryvoting')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'tryvoting' ? 'bg-white text-[#1A3A6B] shadow-sm' : 'text-gray-500 hover:text-[#1A3A6B]'
              }`}
            >
              <Hand className="w-4 h-4" /> {t.tabs.tryvoting}
            </button>
          </nav>

          <div className="flex gap-2">
            <div className="w-1.5 h-8 bg-[#FF9933] rounded-full"></div>
            <div className="w-1.5 h-8 bg-white border border-gray-200 rounded-full"></div>
            <div className="w-1.5 h-8 bg-[#128807] rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + language}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === 'timeline' && <TimelineTab translations={t} />}
            {activeTab === 'ask' && <AskAITab translations={t} language={LANGUAGES.find(l => l.code === language)?.name || 'English'} />}
            {activeTab === 'quiz' && <QuizTab translations={t} />}
            {activeTab === 'factcheck' && <FactCheckTab translations={t} language={LANGUAGES.find(l => l.code === language)?.name || 'English'} />}
            {activeTab === 'tryvoting' && <TryVotingTab translations={t} />}
            {activeTab === 'constituency' && <ConstituencyTab translations={t} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Mobile Footer Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3 px-2 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50 overflow-x-auto no-scrollbar">
        <button onClick={() => setActiveTab('timeline')} className={`flex flex-col items-center gap-1 min-w-[60px] ${activeTab === 'timeline' ? 'text-[#1A3A6B]' : 'text-gray-400'}`}>
          <History className="w-6 h-6" />
          <span className="text-[8px] font-bold">{t.tabs.timeline}</span>
        </button>
        <button onClick={() => setActiveTab('ask')} className={`flex flex-col items-center gap-1 min-w-[60px] ${activeTab === 'ask' ? 'text-[#1A3A6B]' : 'text-gray-400'}`}>
          <MessageSquare className="w-6 h-6" />
          <span className="text-[8px] font-bold">{t.tabs.ask}</span>
        </button>
        <button onClick={() => setActiveTab('constituency')} className={`flex flex-col items-center gap-1 min-w-[60px] ${activeTab === 'constituency' ? 'text-[#1A3A6B]' : 'text-gray-400'}`}>
          <MapPin className="w-6 h-6" />
          <span className="text-[8px] font-bold">{t.tabs.constituency}</span>
        </button>
        <button onClick={() => setActiveTab('quiz')} className={`flex flex-col items-center gap-1 min-w-[60px] ${activeTab === 'quiz' ? 'text-[#1A3A6B]' : 'text-gray-400'}`}>
          <CheckCircle2 className="w-6 h-6" />
          <span className="text-[8px] font-bold">{t.tabs.quiz}</span>
        </button>
        <button onClick={() => setActiveTab('factcheck')} className={`flex flex-col items-center gap-1 min-w-[60px] ${activeTab === 'factcheck' ? 'text-[#1A3A6B]' : 'text-gray-400'}`}>
          <ShieldCheck className="w-6 h-6" />
          <span className="text-[8px] font-bold">{t.tabs.factcheck}</span>
        </button>
        <button onClick={() => setActiveTab('tryvoting')} className={`flex flex-col items-center gap-1 min-w-[60px] ${activeTab === 'tryvoting' ? 'text-[#1A3A6B]' : 'text-gray-400'}`}>
          <Hand className="w-6 h-6" />
          <span className="text-[8px] font-bold">{t.tabs.tryvoting}</span>
        </button>
      </nav>

      {/* Footer Info */}
      <footer className="hidden md:block py-10 border-t border-gray-100 bg-gray-50/50 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 text-gray-400 grayscale">
            <Flag className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-widest">{t.motto}</span>
          </div>
          <p className="text-xs text-gray-400 font-medium">{t.copyright}</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-[10px] font-bold text-gray-400 uppercase">System Active</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
