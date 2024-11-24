import React from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.role === 'assistant';

  return (
    <div className={`group flex gap-3 transition-opacity ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-lg bg-green-500/10 ring-1 ring-green-500/20">
          <Bot className="h-4 w-4 text-green-500" />
        </div>
      )}
      <div className={`relative rounded-2xl px-4 py-2.5 max-w-[80%] text-sm leading-relaxed ${
        isBot 
          ? 'bg-gray-800/50 text-gray-100 ring-1 ring-white/5' 
          : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/20'
      }`}>
        {message.content}
      </div>
      {!isBot && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/20">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}