import React, { useState, useEffect, useRef } from 'react';
import { Bot, ArrowDownCircle } from 'lucide-react';
import { ChatMessage } from './chat-message';
import { ChatInput } from './chat-input';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at?: string;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (content: string) => {
    if (!content.trim() || isLoading) return;
    setIsLoading(true);

    try {
      const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content,
      };
      setMessages(prev => [...prev, userMessage]);

      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: "I'm a simulated response. The actual API integration will be added soon!",
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-full max-w-4xl mx-auto h-[calc(100vh-8rem)]">
        {/* Premium Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur opacity-20" />
        
        <div className="relative flex h-full flex-col rounded-xl border border-gray-800/40 bg-gradient-to-b from-gray-900/50 to-[#0A0C10] text-gray-100 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-800/40 px-6 py-4 bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 ring-1 ring-green-500/20">
                <Bot className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <h3 className="text-sm font-medium">Chat Preview</h3>
                <p className="text-xs text-gray-500">Test your bot's responses</p>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          {messages.length === 0 ? (
            <div className="flex-1 flex items-center justify-center p-8">
              <div className="text-center space-y-4 max-w-md mx-auto">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-xl opacity-50 animate-pulse" />
                  <div className="relative">
                    <Bot className="h-12 w-12 mx-auto text-green-500 animate-float" />
                  </div>
                </div>
                <h3 className="text-lg font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Start a conversation
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Test your AI assistant's responses to different queries and scenarios. Try asking about products, services, or general information.
                </p>
                <div className="pt-4">
                  <button 
                    onClick={() => scrollToBottom()}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 transition-colors text-sm"
                  >
                    <ArrowDownCircle className="h-4 w-4" />
                    Start chatting
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && (
                <div className="flex items-center justify-center py-2">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-bounce"></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Input Area */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] to-transparent pointer-events-none h-24 -top-24" />
            <div className="border-t border-gray-800/40 p-6 bg-gradient-to-t from-[#0A0C10] to-gray-900/50 backdrop-blur-sm">
              <ChatInput onSend={handleSend} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}