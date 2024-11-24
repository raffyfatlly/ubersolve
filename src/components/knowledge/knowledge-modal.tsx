import React, { useState } from 'react';
import { X, Upload, File, Trash2, Plus, BookOpen, ArrowLeft } from 'lucide-react';

interface Document {
  id: string;
  name: string;
  type: string;
  size: string;
}

export default function KnowledgeModal({ onClose }: { onClose: () => void }) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [text, setText] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newDocs: Document[] = Array.from(files).map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      type: file.type,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`
    }));

    setDocuments(prev => [...prev, ...newDocs]);
  };

  const removeDocument = (id: string) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Premium Backdrop */}
      <div className="absolute inset-0 bg-[#0A0C10]/80 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-transparent to-emerald-500/10" />
      </div>

      <div className="relative w-full max-w-5xl">
        {/* Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-2xl blur opacity-20" />

        <div className="relative bg-[#0A0C10] rounded-xl border border-gray-800/50 shadow-2xl">
          {/* Premium Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800/50">
            <div className="flex items-center gap-6">
              <button
                onClick={onClose}
                className="group p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </button>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-green-500/10 ring-1 ring-green-500/20">
                  <BookOpen className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Knowledge Base</h3>
                  <p className="text-sm text-gray-400">Add custom knowledge and documents</p>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-8 p-8">
            {/* Text Input Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-400">Custom Knowledge</h4>
                <div className="text-xs text-gray-500">Markdown supported</div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000" />
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="# Products & Services
[List your products/services with details]

# Pricing
[Include pricing information]

# Policies
[Add business policies]

# FAQs
[Common questions and answers]"
                  className="relative w-full h-[500px] rounded-lg border border-gray-800/50 bg-gray-900/50 p-4 text-sm font-mono focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* Document Upload Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-400">Documents</h4>
                <div className="text-xs text-gray-500">PDF, DOCX, XLSX, CSV</div>
              </div>

              {/* Upload Area */}
              <label className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000" />
                <div className="relative flex flex-col items-center justify-center w-full h-40 rounded-lg border-2 border-dashed border-gray-800/50 bg-gray-900/50 hover:bg-gray-800/50 transition-all cursor-pointer group">
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="p-3 rounded-full bg-green-500/10 ring-1 ring-green-500/20 mb-3 group-hover:scale-110 transition-transform">
                      <Upload className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="text-sm text-gray-300 mb-1">
                      <span className="font-medium">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">Maximum file size: 10MB</p>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    accept=".pdf,.docx,.xlsx,.csv"
                    onChange={handleFileChange}
                  />
                </div>
              </label>

              {/* Document List */}
              <div className="space-y-3 mt-6">
                {documents.map(doc => (
                  <div
                    key={doc.id}
                    className="group flex items-center justify-between p-4 rounded-lg border border-gray-800/50 bg-gray-900/50 hover:bg-gray-800/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-gray-800/50 text-gray-400 group-hover:bg-green-500/10 group-hover:text-green-500 transition-colors">
                        <File className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">{doc.name}</p>
                        <p className="text-xs text-gray-500">{doc.size}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeDocument(doc.id)}
                      className="p-2 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}

                {documents.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-8 text-center text-gray-500">
                    <File className="h-8 w-8 mb-3 opacity-50" />
                    <p className="text-sm">No documents uploaded yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-800/50 bg-gray-900/50">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-800/50 hover:bg-gray-800/50 transition-all"
            >
              Cancel
            </button>
            <button className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition-all">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}