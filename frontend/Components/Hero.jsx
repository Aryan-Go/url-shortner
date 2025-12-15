import React, { useState } from 'react';
import { Link2} from 'lucide-react';

export const Hero = ({  onShorten,  loading }) => {
  const [url, setUrl] = useState('');

  const handleShorten = () => {
    onShorten(url);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleShorten();
    }
  };

  return (
    <section className="flex flex-col items-center justify-center px-8 py-20 text-center">
      <h1 className="text-6xl font-bold text-white mb-6">
        Make it short.
      </h1>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl">
        Paste your long URL below to get a shorter, cleaner version
        instantly. Enhance your sharing experience.
      </p>
      
      <div className="w-full max-w-3xl">
        <div className="flex items-center gap-4 bg-gray-800/50 rounded-full p-2 backdrop-blur-sm border border-gray-700/50">
          <div className="flex items-center gap-3 flex-1 px-4">
            <Link2 className="w-5 h-5 text-gray-500" />
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Paste your long link here..."
              className="bg-transparent text-gray-300 placeholder-gray-500 outline-none w-full"
              disabled={loading}
            />
          </div>
          <button
            onClick={handleShorten}
            disabled={loading}
            className="bg-emerald-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-emerald-300 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Shortening...' : 'Shorten'}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}