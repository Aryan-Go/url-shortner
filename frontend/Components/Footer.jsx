export const Footer = () => (
  <footer className="px-8 py-6 border-t border-gray-800">
    <div className="flex items-center justify-between">
      <p className="text-gray-500 text-sm">
        © 2023 Shortener. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
          API
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
          Privacy
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
          Terms
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
          Contact
        </a>
      </div>
    </div>
  </footer>
);