import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Settings, Share2, Rocket, Send } from 'lucide-react';
import BotSettings from '../components/studio/BotSettings';
import ComingSoonModal from '../components/studio/ComingSoonModal';

export default function AIStudio() {
  const [message, setMessage] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);
  const [comingSoonTrigger, setComingSoonTrigger] = useState<'deploy' | 'chat'>('deploy');

  const handleComingSoonOpen = (trigger: 'deploy' | 'chat') => {
    setComingSoonTrigger(trigger);
    setIsComingSoonOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#111111]">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-gray-400 hover:text-white">
                <ArrowLeft size={20} />
              </Link>
              <div className="flex items-center gap-2">
                <Bot className="text-green-500" size={24} />
                <span className="font-semibold">Test Agent</span>
              </div>
              <span className="text-sm text-gray-500">Draft</span>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSettingsOpen(true)}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Settings size={20} />
              </button>
              <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors">
                <Share2 size={20} />
              </button>
              <button 
                onClick={() => handleComingSoonOpen('deploy')}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                <Rocket size={20} />
                Deploy
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Chat Preview Section */}
          <div className="bg-[#111111] rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <Bot className="text-green-500" size={24} />
                <div>
                  <h2 className="font-semibold">Chat Preview</h2>
                  <p className="text-sm text-gray-400">Test your bot's responses</p>
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="h-[500px] flex flex-col">
              {/* Empty State */}
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                  <Bot className="text-green-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Start a conversation</h3>
                <p className="text-gray-400 max-w-md">
                  Test your AI assistant's responses to different queries and scenarios. Try asking about products, services, or general information.
                </p>
                <button 
                  onClick={() => handleComingSoonOpen('chat')}
                  className="mt-6 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Start chatting
                </button>
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-800">
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Send a message..."
                    className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500 transition-colors"
                  />
                  <button 
                    onClick={() => handleComingSoonOpen('chat')}
                    className="p-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!message.trim()}
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Settings Modal */}
      <BotSettings 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      {/* Coming Soon Modal */}
      <ComingSoonModal
        isOpen={isComingSoonOpen}
        onClose={() => setIsComingSoonOpen(false)}
        onJoinWaitlist={() => {
          setIsComingSoonOpen(false);
          // Navigate back to landing page and open contact form
          window.location.href = '/?join=waitlist';
        }}
        message={
          comingSoonTrigger === 'chat' 
            ? "We're crafting something extraordinary – a no-code platform where you can test and preview your AI chatbot's responses in real-time. Join our early access list to be among the first to experience the future of conversational AI."
            : "We're crafting something extraordinary – a no-code platform where you can build, train, and deploy AI chatbots in minutes. Preview our studio interface and be among the first to experience the future of conversational AI."
        }
      />
    </div>
  );
}