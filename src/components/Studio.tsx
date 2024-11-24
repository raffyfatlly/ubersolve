import React, { useState } from 'react';
import { ArrowLeft, Bot, Share2, Settings, MessageSquare, Rocket } from 'lucide-react';
import ChatInterface from './chat/chat-interface';
import BotSettings from './bot/bot-settings';

interface StudioProps {
  onBack: () => void;
}

export default function Studio({ onBack }: StudioProps) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0C10]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/40 bg-[#0A0C10]/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={onBack}
                className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors text-gray-400 hover:text-white"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10 ring-1 ring-green-500/20">
                  <Bot className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">Test Agent</h1>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Draft</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {showSettings ? (
                <button 
                  onClick={() => setShowSettings(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-800/50 transition-colors text-gray-400 hover:text-white"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span className="text-sm font-medium">Chat Preview</span>
                </button>
              ) : (
                <button 
                  onClick={() => setShowSettings(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-800/50 transition-colors text-gray-400 hover:text-white"
                >
                  <Settings className="h-4 w-4" />
                  <span className="text-sm font-medium">Configure Bot</span>
                </button>
              )}
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-800/50 transition-colors text-gray-400 hover:text-white">
                <Share2 className="h-4 w-4" />
                <span className="text-sm font-medium">Share</span>
              </button>
              <button className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-medium text-white shadow-xl shadow-green-500/20 transition-all duration-200 hover:shadow-green-500/10 group-hover:translate-y-[1px] flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  Deploy
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 gap-6">
          {showSettings ? (
            <BotSettings />
          ) : (
            <ChatInterface />
          )}
        </div>
      </div>
    </div>
  );
}