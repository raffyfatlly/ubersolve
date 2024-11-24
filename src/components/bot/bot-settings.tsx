import React, { useState } from 'react';
import { FileText, BookOpen, Bot, Loader2 } from 'lucide-react';

export default function BotSettings() {
  const [activeTab, setActiveTab] = useState<'instructions' | 'knowledge'>('instructions');
  const [isSaving, setIsSaving] = useState(false);
  const [settings, setSettings] = useState({
    name: "Test Agent",
    description: "A helpful AI assistant",
    model: "openai/gpt-3.5-turbo"
  });
  const [instructions, setInstructions] = useState('');

  const handleSettingChange = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    // Simulate saving
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur opacity-20" />
        
        <div className="relative rounded-2xl border border-gray-800/40 bg-gradient-to-b from-gray-900/50 to-[#0A0C10] overflow-hidden">
          {/* Settings Header */}
          <div className="p-6 border-b border-gray-800/40">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Bot Settings</h3>
              {isSaving && (
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Saving...
                </div>
              )}
            </div>
            <div className="space-y-5 mt-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  value={settings.name}
                  onChange={(e) => handleSettingChange('name', e.target.value)}
                  className="flex h-11 w-full rounded-xl border border-gray-800/40 bg-gray-900/50 px-4 py-2 text-sm shadow-sm transition-colors focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/50 placeholder:text-gray-600"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Description</label>
                <textarea
                  value={settings.description}
                  onChange={(e) => handleSettingChange('description', e.target.value)}
                  className="flex h-20 w-full rounded-xl border border-gray-800/40 bg-gray-900/50 px-4 py-3 text-sm shadow-sm transition-colors focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/50 placeholder:text-gray-600 resize-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Model</label>
                <select
                  value={settings.model}
                  onChange={(e) => handleSettingChange('model', e.target.value)}
                  className="flex h-11 w-full rounded-xl border border-gray-800/40 bg-gray-900/50 px-4 py-2 text-sm shadow-sm transition-colors focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/50"
                >
                  <option value="openai/gpt-3.5-turbo">GPT-3.5 Turbo</option>
                  <option value="openai/gpt-4">GPT-4</option>
                  <option value="anthropic/claude-2">Claude 2</option>
                </select>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-800/40">
            <div className="flex px-6">
              <button 
                onClick={() => setActiveTab('instructions')}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all ${
                  activeTab === 'instructions' 
                    ? 'text-green-500 border-b-2 border-green-500 bg-gray-900/50' 
                    : 'text-gray-400 hover:text-gray-300 hover:bg-gray-900/30'
                }`}
              >
                <FileText className="h-4 w-4" />
                Instructions
              </button>
              <button 
                onClick={() => setActiveTab('knowledge')}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all ${
                  activeTab === 'knowledge' 
                    ? 'text-green-500 border-b-2 border-green-500 bg-gray-900/50' 
                    : 'text-gray-400 hover:text-gray-300 hover:bg-gray-900/30'
                }`}
              >
                <BookOpen className="h-4 w-4" />
                Knowledge
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'instructions' ? (
              <div className="space-y-4">
                <textarea
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  placeholder={`# Bot Instructions\n\nYou are a [business type] assistant. Your main responsibilities are:\n\n1. Customer Support\n   • Answer product inquiries\n   • Handle order status questions\n   • Process refund requests\n\n2. Sales Assistance\n   • Recommend products\n   • Explain pricing\n   • Handle availability questions`}
                  className="flex min-h-[400px] w-full rounded-xl border border-gray-800/40 bg-gray-900/50 px-4 py-3 text-sm shadow-sm focus:border-green-500/50 focus:outline-none focus:ring-1 focus:ring-green-500/50 font-mono text-gray-300 placeholder:text-gray-600"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="p-3 rounded-xl bg-green-500/10 ring-1 ring-green-500/20 mb-4">
                  <Bot className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-lg font-medium mb-2">Enhance Your Bot with Custom Knowledge</h3>
                <p className="text-sm text-gray-400 max-w-sm mb-6">
                  Upload documents and add custom knowledge to make your bot smarter and more specialized.
                </p>
                <button className="px-6 py-2.5 rounded-xl bg-green-500 text-white hover:bg-green-600 transition-all font-medium">
                  Enable Knowledge Base
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}