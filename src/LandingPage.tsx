import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight, 
  Search, 
  History, 
  ShieldCheck, 
  Hand, 
  Vote, 
  Globe, 
  Menu, 
  X,
  Building2,
  Calendar
} from 'lucide-react';

import { LANGUAGES, Language } from './translations';

interface LandingPageProps {
  onStart: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart, language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [selectedQuizIndex, setSelectedQuizIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quizOptions = [
    { text: "A. 200 or more seats", correct: false },
    { text: "B. 272 or more seats", correct: true },
    { text: "C. 300 or more seats", correct: false },
    { text: "D. All 543 seats", correct: false }
  ];

  const handleQuizSelect = (index: number) => {
    if (quizAnswered) return;
    setSelectedQuizIndex(index);
    setQuizAnswered(true);
  };

  return (
    <div className="bg-[#FAFAF9] text-[#0F2447] font-sans antialiased selection:bg-[#FF9933]/30">
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-sm' : 'bg-white py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href="#" className="text-2xl font-black tracking-tight text-[#0F2447]">
              ElectSense<span className="text-[#FF9933]">.</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm font-semibold text-gray-500 hover:text-[#0F2447] transition-colors">How it works</a>
              <a href="#features" className="text-sm font-semibold text-gray-500 hover:text-[#0F2447] transition-colors">Features</a>
              <a href="#languages" className="text-sm font-semibold text-gray-500 hover:text-[#0F2447] transition-colors">Languages</a>
              <a href="#quiz" className="text-sm font-semibold text-gray-500 hover:text-[#0F2447] transition-colors">Quiz</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-1 bg-gray-50 p-1 rounded-xl border border-gray-100 mr-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as Language)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all whitespace-nowrap ${
                    language === lang.code 
                      ? 'bg-white text-[#0F2447] shadow-sm shadow-black/5' 
                      : 'text-gray-400 hover:text-[#0F2447]'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
            <button 
              onClick={onStart}
              className="bg-[#FF9933] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/20"
            >
              Try for free
            </button>
            <button 
              className="md:hidden text-[#0F2447]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                <div className="flex flex-wrap gap-2 pb-4 border-b border-gray-100">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as Language)}
                      className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                        language === lang.code 
                          ? 'bg-[#0F2447] text-white shadow-md' 
                          : 'bg-gray-50 text-gray-400 hover:text-[#0F2447]'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
                <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">How it works</a>
                <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">Features</a>
                <a href="#languages" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">Languages</a>
                <a href="#quiz" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">Quiz</a>
                <button 
                  onClick={() => { setIsMenuOpen(false); onStart(); }}
                  className="bg-[#0F2447] text-white py-4 rounded-xl font-bold"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-[700px] mx-auto text-center relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full shadow-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#138808] animate-pulse"></span>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Now available in 6 Indian languages</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-[#0F2447] mb-8 leading-[1.05]"
          >
            Your guide to India's democracy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 leading-relaxed mb-12 max-w-[600px] mx-auto"
          >
            ElectSense helps every Indian citizen understand how elections work — from voter registration to counting day. Clear, trusted, and in your language.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <button 
              onClick={onStart}
              className="bg-[#0F2447] text-white px-8 py-4 rounded-full text-lg font-bold w-full sm:w-auto hover:scale-105 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2"
            >
              Get started free <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="#how-it-works"
              className="border-2 border-[#0F2447] text-[#0F2447] px-8 py-4 rounded-full text-lg font-bold w-full sm:w-auto hover:bg-[#0F2447] hover:text-white transition-all text-center"
            >
              See how it works
            </a>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[10px] text-gray-400 font-black tracking-widest uppercase"
          >
            Trusted by 10,000+ first-time voters · Based on official ECI guidelines
          </motion.p>

          {/* Hero Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: 'spring', damping: 20 }}
            className="mt-20 max-w-[320px] mx-auto relative z-10"
          >
            <div className="bg-white rounded-[40px] p-4 border-[10px] border-gray-200/50 shadow-2xl shadow-black/10 aspect-[9/16] overflow-hidden text-left">
              <div className="h-1.5 w-16 bg-gray-100 rounded-full mx-auto mb-8"></div>
              <div className="px-2">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">EVM Simulator</span>
                  <div className="w-2 h-2 rounded-full bg-[#138808]"></div>
                </div>
                <h4 className="text-xl font-black text-[#0F2447] mb-6">Select Candidate</h4>
                
                <div className="space-y-3 mb-8">
                  <div className="p-3 border border-gray-100 rounded-2xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-xl">🦁</div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-[#0F2447]">Amir Khan</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Independent</p>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-gray-100"></div>
                  </div>
                  <div className="p-3 border-2 border-[#FF9933] rounded-2xl flex items-center gap-3 bg-[#FF9933]/5">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#FF9933]/20 flex items-center justify-center text-xl">🐘</div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-[#0F2447]">Sarah Paul</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Regional Party</p>
                    </div>
                    <div className="w-5 h-5 rounded-full border-4 border-[#FF9933] bg-white"></div>
                  </div>
                </div>

                <div className="text-center p-4 bg-[#138808]/10 rounded-2xl border border-[#138808]/20 mt-10">
                  <CheckCircle2 className="w-8 h-8 text-[#138808] mx-auto mb-2" />
                  <p className="text-[10px] font-black text-[#138808] uppercase tracking-[0.2em]">Vote cast success</p>
                </div>
              </div>
            </div>
            {/* Absolute element for depth */}
            <div className="absolute top-0 -right-20 w-40 h-40 bg-[#FF9933]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 -left-20 w-40 h-40 bg-[#138808]/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-12 italic">Built using data from</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale transition-all hover:grayscale-0 hover:opacity-100">
            <span className="text-sm font-bold text-[#0F2447]">Election Commission of India</span>
            <span className="text-sm font-bold text-[#0F2447]">Representation of the People Act</span>
            <span className="text-sm font-bold text-[#0F2447]">Delimitation Commission</span>
            <span className="text-sm font-bold text-[#0F2447]">Voter Helpline 1950</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-block bg-gray-50 px-4 py-1 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-widest border border-gray-100 mb-6">How it works</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F2447] mb-24 max-w-[500px] leading-tight">From confused to confident in 3 steps</h2>
          
          <div className="grid md:grid-cols-3 gap-16 relative">
            <div className="absolute h-1 top-7 left-12 right-12 bg-gray-50 hidden md:block z-0"></div>
            {/* Step 1 */}
            <div className="relative z-10 group">
              <div className="w-14 h-14 bg-[#0F2447] text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:rotate-6 transition-transform">
                <History className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F2447] mb-4">Choose your topic</h3>
              <p className="text-gray-500 leading-relaxed font-medium">Pick from the election timeline, voter registration, candidate rules, or EVM process.</p>
            </div>
            {/* Step 2 */}
            <div className="relative z-10 group">
              <div className="w-14 h-14 bg-[#0F2447] text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:rotate-6 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F2447] mb-4">Ask or explore</h3>
              <p className="text-gray-500 leading-relaxed font-medium">Read the interactive guide or ask our AI anything about India's election process.</p>
            </div>
            {/* Step 3 */}
            <div className="relative z-10 group">
              <div className="w-14 h-14 bg-[#0F2447] text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:rotate-6 transition-transform">
                <Hand className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F2447] mb-4">Share your knowledge</h3>
              <p className="text-gray-500 leading-relaxed font-medium">Take the civic quiz and share your score card with friends and family.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES BENTO GRID */}
      <section id="features" className="py-32 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-block bg-white border border-gray-100 px-4 py-1 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6 shadow-sm">Features</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0F2447] mb-20 leading-tight">One platform. Every election question answered.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card: Timeline */}
            <div className="md:col-span-2 bg-white rounded-3xl p-10 border border-gray-200 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all h-[400px]">
              <div>
                <h3 className="text-2xl font-bold text-[#0F2447] mb-4">Interactive Election Timeline</h3>
                <p className="text-gray-500 max-w-[500px] font-medium leading-relaxed">Walk through all 7 phases of India's Lok Sabha election — from the ECI announcement to the PM's oath — with expandable detail cards for each phase.</p>
              </div>
              <div className="mt-12 relative flex items-center justify-between px-4 pb-4 overflow-x-auto no-scrollbar gap-8">
                <div className="absolute h-[1px] bg-gray-100 left-8 right-8 top-1/2 -z-0"></div>
                {[1, 2, 3, 4, 5, 6, 7].map(i => (
                  <div key={i} className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-black text-xs shrink-0 transition-all ${
                    i <= 3 ? 'bg-[#0F2447] text-white shadow-lg' : 'bg-gray-100 text-gray-400'
                  } ${i === 3 ? 'scale-125 border-4 border-white' : ''}`}>
                    {i}
                  </div>
                ))}
              </div>
            </div>

            {/* Small Card: Fake News */}
            <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm flex flex-col group hover:shadow-xl transition-all h-[400px]">
              <div className="inline-block bg-[#0F2447]/5 text-[#0F2447] text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-md mb-6 w-fit">Powered by AI</div>
              <h3 className="text-2xl font-bold text-[#0F2447] mb-4">Fake News Detector</h3>
              <p className="text-gray-500 font-medium leading-relaxed">Paste any election claim. Our AI checks it against official data and returns a clear verdict.</p>
              <div className="mt-auto pt-8">
                <div className="w-full h-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200 flex items-center justify-center text-gray-300">
                  <Search className="w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Small Card: EVM */}
            <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm flex flex-col group hover:shadow-xl transition-all h-[400px]">
              <h3 className="text-2xl font-bold text-[#0F2447] mb-4">EVM Simulator</h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-8">Experience exactly how voting feels on polling day — including the VVPAT slip confirmation.</p>
              <div className="mt-auto bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl">🦁</div>
                <div className="flex-1 h-3 bg-gray-200 rounded-full"></div>
                <div className="w-10 h-10 shadow-lg rounded-xl bg-[#0F2447] text-white text-[8px] font-black flex items-center justify-center">BEEP</div>
              </div>
            </div>

            {/* Large Card: Languages & Finder */}
            <div className="md:col-span-2 bg-[#0F2447] rounded-3xl p-10 border border-[#0F2447] shadow-xl flex flex-col md:flex-row gap-12 group hover:shadow-2xl transition-all">
              <div className="flex-1">
                <div className="inline-block bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-md mb-6 w-fit">Localized</div>
                <h3 className="text-2xl font-bold text-white mb-4">6 Indian Languages</h3>
                <p className="text-white/60 font-medium leading-relaxed mb-8">Switch between English, Hindi, Tamil, Telugu, Malayalam, and Bengali instantly.</p>
                <div className="flex flex-wrap gap-2">
                  {['English', 'हिंदी', 'தமிழ்', 'తెలుగు', 'മലയാളം', 'বাংলা'].map(l => (
                    <span key={l} className="px-3 py-1.5 rounded-full bg-white/5 text-white/80 text-xs font-bold border border-white/10">{l}</span>
                  ))}
                </div>
              </div>
              <div className="flex-1 bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col justify-between">
                <div>
                   <h3 className="text-xl font-bold text-white mb-2">Constituency Finder</h3>
                   <p className="text-white/40 text-xs font-medium">Verify your electoral boundaries in seconds.</p>
                </div>
                <div className="mt-8 flex items-center gap-3">
                   <div className="flex-1 bg-white/10 py-3 px-4 rounded-xl text-white/50 font-bold text-sm tracking-widest border border-white/5">110001</div>
                   <div className="w-12 h-12 bg-[#FF9933] rounded-xl flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                     <Search className="w-5 h-5" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE QUIZ */}
      <section id="quiz" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block bg-gray-50 px-4 py-1 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-widest border border-gray-100 mb-6">Try it now</div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0F2447] mb-6 leading-tight">How well do you know your rights?</h2>
            <p className="text-lg text-gray-500 font-medium">Answer a sample question from our civic knowledge quiz.</p>
          </div>

          <div className="max-w-[560px] mx-auto bg-white rounded-3xl border border-gray-200 shadow-2xl p-10">
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Question 1 of 7</span>
                <span className="text-[10px] font-black text-[#FF9933] uppercase tracking-widest">Election Basics</span>
              </div>
              <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '14.28%' }}
                  className="h-full bg-[#FF9933] rounded-full"
                ></motion.div>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-black text-[#0F2447] mb-10 leading-snug">How many seats does a party need to win a Lok Sabha majority?</h3>
            
            <div className="space-y-3">
              {quizOptions.map((opt, i) => (
                <button 
                  key={i}
                  onClick={() => handleQuizSelect(i)}
                  disabled={quizAnswered}
                  className={`w-full text-left p-5 rounded-2xl font-bold transition-all border-2 flex justify-between items-center ${
                    quizAnswered
                    ? opt.correct 
                      ? 'bg-[#138808] border-[#138808] text-white' 
                      : selectedQuizIndex === i ? 'bg-red-500 border-red-500 text-white' : 'bg-gray-50 border-gray-100 text-gray-300'
                    : 'bg-white border-gray-100 text-[#0F2447] hover:border-[#0F2447] shadow-sm hover:shadow-md'
                  }`}
                >
                  <span>{opt.text}</span>
                  {quizAnswered && opt.correct && <CheckCircle2 className="w-5 h-5 text-white" />}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {quizAnswered && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-10 p-6 bg-[#138808]/5 border border-[#138808]/10 rounded-2xl"
                >
                  <p className="text-[#138808] text-sm leading-relaxed font-bold">
                    272 seats is the magic number. With 543 elected Lok Sabha seats, a party or alliance needs at least 272 to command a majority and form the government.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-center mt-10 text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">Take the full quiz in the app after starting</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-[#0F2447] mb-24 text-center leading-tight">What first-time voters are saying</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "I had no idea how EVMs worked or what happens after polling day. ElectSense explained everything in Malayalam and I felt confident.", author: "Nithya R., Thrissur" },
              { quote: "The fake news detector caught a viral forward I almost believed. It explained exactly why it was false using ECI guidelines.", author: "Arjun M., Delhi" },
              { quote: "I used the constituency finder and discovered my booth location and checked my name on the voter list in under a minute.", author: "Priya S., Chennai" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all">
                <p className="text-lg text-gray-500 italic leading-relaxed mb-10 font-medium">
                  "{t.quote}"
                </p>
                <div className="flex flex-col">
                  <span className="text-base font-black text-[#0F2447]">{t.author}</span>
                  <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest mt-1">First-time voter, 2024</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F2447] py-32 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-[800px] mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div className="flex h-1.5 w-[80px] overflow-hidden rounded-full shadow-lg">
              <div className="w-1/3 bg-[#FF9933]"></div>
              <div className="w-1/3 bg-white"></div>
              <div className="w-1/3 bg-[#138808]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">Every vote begins with understanding</h2>
          <p className="text-xl text-white/40 mb-14 max-w-[600px] mx-auto font-medium">
            Join thousands of Indian citizens learning how democracy works — before they step into the polling booth.
          </p>
          <button 
            onClick={onStart}
            className="bg-[#FF9933] text-white px-12 py-5 rounded-full text-xl font-black hover:scale-105 transition-all shadow-2xl shadow-orange-500/20 active:scale-95"
          >
            Start learning free
          </button>
          <p className="mt-12 text-[10px] text-white/20 tracking-[0.4em] font-black uppercase">
            No signup required · Works on any device · 100% free
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF9933]/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2 md:col-span-1">
              <a href="#" className="text-2xl font-black tracking-tight text-[#0F2447] mb-6 inline-block">
                ElectSense<span className="text-[#FF9933]">.</span>
              </a>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[200px] font-medium">
                Civic education for every Indian voter. Clear, neutral, and factual.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">Learn</span>
              <div className="flex flex-col gap-3 font-bold text-sm text-gray-400">
                <a href="#" className="hover:text-[#0F2447] transition-colors">Timeline</a>
                <a href="#" className="hover:text-[#0F2447] transition-colors">Ask AI</a>
                <a href="#" className="hover:text-[#0F2447] transition-colors">EVM Simulator</a>
                <a href="#" className="hover:text-[#0F2447] transition-colors">Constituency Finder</a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">Resources</span>
              <div className="flex flex-col gap-3 font-bold text-sm text-gray-400">
                <a href="https://eci.gov.in" target="_blank" className="hover:text-[#0F2447] transition-colors">ECI Website</a>
                <a href="tel:1950" className="hover:text-[#0F2447] transition-colors">Voter Helpline 1950</a>
                <a href="https://voters.eci.gov.in" target="_blank" className="hover:text-[#0F2447] transition-colors">Check Voter Roll</a>
                <a href="#" className="hover:text-[#0F2447] transition-colors">About Elections</a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">Languages</span>
              <div className="flex flex-col gap-2 text-sm font-bold text-gray-400">
                <span>English · हिंदी</span>
                <span>தமிழ் · తెలుగు</span>
                <span>മലയാളം · বাংলা</span>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">© 2026 ElectSense India</p>
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Privacy</span>
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Terms</span>
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest border border-gray-200 px-3 py-1 rounded-full">Satyamev Jayate</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
