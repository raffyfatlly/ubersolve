import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-1 group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-1000" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message..."
          className="relative w-full h-11 rounded-xl border border-gray-800/40 bg-gray-900/50 px-4 py-2 text-sm shadow-sm backdrop-blur-sm transition-colors placeholder:text-gray-500 focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/50 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        className="relative group"
        disabled={isLoading}
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-1000" />
        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/20 transition-all duration-200 hover:shadow-green-500/10 group-hover:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-50">
          <Send className="h-4 w-4" />
        </div>
      </button>
    </form>
  );
}