export const ErrorMessage = ({ message, onClose }) => (
  <div className="w-full max-w-3xl mx-auto px-8 mb-8">
    <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-4 backdrop-blur-sm">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-red-400 font-semibold mb-1">Error</h3>
            <p className="text-red-300 text-sm">{message}</p>
          </div>
        </div>
        <button onClick={onClose} className="text-red-400 hover:text-red-300">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);