import React, { useState, useEffect } from 'react';
import { ArrowRight, Bot, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import ContactForm from './ContactForm';

const chatExamples = [
  {
    title: "AI Assistant",
    subtitle: "Powered by GPT-4",
    conversations: [
      {
        user: "I'm interested to transform my WhatsApp with AI. How many languages can it handle?",
        bot: <>Hello! 👋 Thanks for your interest! Our AI is powered by GPT-4.0, which means it can understand and respond in virtually any language worldwide! 🌍
          <p className="mt-2">Most commonly used languages include:</p>
          <ul className="list-disc ml-4 mt-1">
            <li>English 🇬🇧</li>
            <li>Bahasa Malaysia 🇲🇾</li>
            <li>Mandarin 🇨🇳</li>
            <li>Tamil 🇮🇳</li>
          </ul>
          <p className="mt-2">And many more! The AI automatically detects and responds in your customer's preferred language. ✨</p>
        </>
      },
      {
        user: "How does the AI learn about my specific business information?",
        bot: <>Great question! 🎯 We train the AI with your business data, so it becomes your perfect virtual team member! It learns everything about:
          <ul className="list-disc ml-4 mt-2">
            <li>Your products and services 📦</li>
            <li>Business policies and procedures 📋</li>
            <li>Common customer questions ❓</li>
            <li>Your brand's unique communication style 🎨</li>
          </ul>
        </>
      }
    ]
  },
  {
    title: "Property Rental",
    subtitle: "Villa Booking Assistant",
    conversations: [
      {
        user: "Hi, is your Penang villa pet-friendly?",
        bot: "Hi! 🐾 Yes, our Penang villa is pet-friendly! Let us know in advance if you're bringing your furry friend, so we can prepare everything for your stay."
      },
      {
        user: "What's the rate for 2 nights this weekend?",
        bot: <>💰 Rate: RM 850 per night
          <br />📅 Total for 2 nights: RM 1,700
          <p className="mt-2">Would you like to book?</p>
        </>
      }
    ]
  },
  {
    title: "Museum Guide",
    subtitle: "Interactive Museum Assistant",
    conversations: [
      {
        user: "What are today's exhibition hours?",
        bot: <>Welcome! 🏛️ Our exhibition hours today are:
          <p className="mt-2">🕐 10:00 AM - 6:00 PM</p>
          <p className="mt-1">Last entry is at 5:00 PM. Would you like to know about our current exhibitions?</p>
        </>
      },
      {
        user: "Yes, what's the main exhibition now?",
        bot: <>Currently featuring: "Ancient Civilizations: Lost & Found" 🗿
          <p className="mt-2">Highlights include:</p>
          <ul className="list-disc ml-4 mt-1">
            <li>Egyptian artifacts (Level 1)</li>
            <li>Mesopotamian treasures (Level 2)</li>
            <li>Interactive archaeology zone</li>
          </ul>
          <p className="mt-2">Guided tours start every hour. Would you like to book a tour?</p>
        </>
      }
    ]
  },
  {
    title: "University Support",
    subtitle: "Student Services Assistant",
    conversations: [
      {
        user: "How do I apply for the Computer Science program?",
        bot: <>Hi! 👋 Here's how to apply for Computer Science:
          <p className="mt-2">1️⃣ Submit online application</p>
          <p className="mt-1">2️⃣ Upload required documents:</p>
          <ul className="list-disc ml-4 mt-1">
            <li>Academic transcripts</li>
            <li>English proficiency test</li>
            <li>Statement of purpose</li>
          </ul>
          <p className="mt-2">Application deadline: September 30th</p>
        </>
      },
      {
        user: "What are the entry requirements?",
        bot: <>For Computer Science, you need:
          <p className="mt-2">📚 Academic Requirements:</p>
          <ul className="list-disc ml-4 mt-1">
            <li>CGPA 3.0 or above</li>
            <li>Strong math background</li>
            <li>IELTS 6.5 or equivalent</li>
          </ul>
          <p className="mt-2">Would you like me to send you the detailed program structure?</p>
        </>
      }
    ]
  }
];

export default function Hero() {
  const [currentExample, setCurrentExample] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState(0);
  
  const platforms = ['Whatsapp', 'Website', 'Facebook', 'Instagram', 'Telegram'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatform((prev) => (prev + 1) % platforms.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextExample = () => {
    setCurrentExample((prev) => (prev + 1) % chatExamples.length);
  };

  const prevExample = () => {
    setCurrentExample((prev) => (prev - 1 + chatExamples.length) % chatExamples.length);
  };

  return (
    <header className="relative min-h-screen flex items-center">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl -top-48 -left-24 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl top-96 -right-24 animate-pulse delay-1000"></div>
        <div className="absolute w-[60px] h-[60px] bg-green-500/20 rounded-full blur-xl top-32 left-1/4"></div>
        <div className="absolute w-[30px] h-[30px] bg-emerald-500/20 rounded-full blur-lg bottom-32 right-1/3"></div>
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(to right, #22C55E 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-green-500/20 backdrop-blur-sm text-green-500 hover:border-green-500/30 transition-colors">
                by Ubersolve
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-white">
              Upgrade your{' '}
              <span className="relative inline-block">
                <span key={platforms[currentPlatform]} className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400 animate-slide-up">
                  {platforms[currentPlatform]}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0"></div>
              </span>
              {' '}with AI Chatbot
            </h1>
            
            <p className="text-xl text-gray-400 max-w-xl">
              Connect with all your customers anytime — on every channel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => setShowContactForm(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-semibold text-white shadow-xl shadow-green-500/20 hover:shadow-green-500/10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="flex items-center justify-center gap-2">
                  Let's Build Your Chatbot
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </button>
              
              <a 
                href="https://wa.link/5puj88" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-dark-lighter/50 hover:bg-dark-lighter rounded-xl font-semibold border border-gray-800 hover:border-green-500/30 transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <span>AirBnB Bot Demo</span>
                <MessageCircle className="group-hover:scale-110 transition-transform" size={20} />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full min-w-[300px] sm:min-w-[400px]" id="about">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-green-500/50 to-emerald-500/50 rounded-2xl blur opacity-20"></div>
              <div className="relative bg-gray-800/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl">
                <div className="flex items-center justify-between border-b border-gray-700/50 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Bot className="text-green-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{chatExamples[currentExample].title}</h3>
                      <p className="text-sm text-gray-400">{chatExamples[currentExample].subtitle}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={prevExample}
                      className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                      aria-label="Previous example"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={nextExample}
                      className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                      aria-label="Next example"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  {chatExamples[currentExample].conversations.map((conv, idx) => (
                    <React.Fragment key={idx}>
                      <div className="bg-gray-700/50 backdrop-blur-sm p-3 rounded-lg max-w-[80%]">
                        <p>{conv.user}</p>
                      </div>
                      <div className="bg-green-500/10 backdrop-blur-sm p-3 rounded-lg max-w-[80%] ml-auto">
                        {conv.bot}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </header>
  );
}