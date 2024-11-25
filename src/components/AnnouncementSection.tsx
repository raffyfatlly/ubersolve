import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Bot, ArrowRight } from 'lucide-react';

export default function AnnouncementSection({ onShowContactForm }) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* New Label */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="text-green-500" size={16} />
            <span className="text-green-500 text-sm font-semibold">Coming Soon</span>
          </div>

          {/* Main Content */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Introducing{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">
              AI Studio
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Build your own AI chatbot in minutes, no coding required. Drag, drop, and deploy your custom AI assistant instantly.
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Bot className="text-green-500" size={24} />,
                title: "No-Code Builder",
                description: "Build your AI chatbot with simple, intuitive interface"
              },
              {
                icon: <Sparkles className="text-green-500" size={24} />,
                title: "Bot Training",
                description: "Drag & drop your business documents"
              },
              {
                icon: <ArrowRight className="text-green-500" size={24} />,
                title: "Instant Deploy",
                description: "Deploy your live bot to any platform"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-dark-lighter/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800/50 hover:border-green-500/30 transition-all"
              >
                <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 justify-center">
            <Link 
              to="/studio"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-dark-lighter hover:bg-dark-card px-6 py-3 rounded-lg border border-gray-800 hover:border-green-500/30 transition-all"
            >
              <Bot size={20} />
              <span>Preview AI Studio</span>
            </Link>
            <button
              onClick={onShowContactForm}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all"
            >
              <Sparkles size={20} />
              <span>Join Waiting List</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}