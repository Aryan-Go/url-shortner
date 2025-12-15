import { useState } from 'react';
import {  Copy, Share2, Check } from 'lucide-react';

export const SuccessMessage = ({ message, shortUrl, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-8 mb-20">
      <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
            <div className="w-20 h-20 bg-emerald-400/20 rounded-lg grid grid-cols-3 gap-1 p-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-emerald-400 rounded-sm"></div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-emerald-400 text-xl font-semibold">{shortUrl}</span>
              <Check className="w-5 h-5 text-emerald-400" />
            </div>
            {message && (
              <p className="text-gray-500 text-sm mb-4">
                {message}
              </p>
            )}
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy Link'}
              </button>
              <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <button onClick={onClose} className="text-gray-500 hover:text-gray-300">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};