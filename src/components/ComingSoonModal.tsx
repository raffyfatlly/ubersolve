import React from 'react';
import { Bot, X, Sparkles } from 'lucide-react';

interface ComingSoonModalProps {
  onClose: () => void;
  onEarlyAccess: () => void;
}

export default function ComingSoonModal({ onClose, onEarlyAccess }: ComingSoonModalProps) {
  const handleEarlyAccess = () => {
    onEarlyAccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Premium Backdrop */}
      <div className="absolute inset-0 bg-[#0A0C10]/80 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-emerald-500/10" />
      </div>

      <div className="relative w-full max-w-lg mx-auto">
        {/* Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-2xl blur opacity-20" />

        <div className="relative bg-[#0A0C10] rounded-xl border border-gray-800/50 shadow-2xl">
          <div className="p-6">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-800/50 rounded-lg transition-colors text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center space-y-4">
              <div className="relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative p-4 rounded-full bg-green-500/10 ring-1 ring-green-500/20">
                  <Bot className="h-8 w-8 text-green-500" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  AI Studio Coming Soon!
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
                  We're crafting something extraordinary – a no-code platform where you can build, train, and deploy AI chatbots in minutes. Preview our studio interface and be among the first to experience the future of conversational AI.
                </p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleEarlyAccess}
                  className="relative inline-flex group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000" />
                  <div className="relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-medium text-white shadow-xl shadow-green-500/20 transition-all duration-200 hover:shadow-green-500/10 group-hover:translate-y-[1px] flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Join Early Access
                  </div>
                </button>
              </div>

              <button
                onClick={onClose}
                className="mt-4 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Continue to Preview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}