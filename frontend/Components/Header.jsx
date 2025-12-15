import { Link2} from 'lucide-react';

export const Header = () => (
  <header className="flex items-center justify-between px-8 py-6">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-emerald-400 rounded-lg flex items-center justify-center">
        <Link2 className="w-5 h-5 text-gray-900" />
      </div>
      <span className="text-white text-xl font-bold">Shortener</span>
    </div>
    <div className="flex items-center gap-4">
      <button className="text-gray-300 hover:text-white transition-colors px-4 py-2">
        Login
      </button>
      <button className="bg-emerald-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-emerald-300 transition-colors">
        Sign Up
      </button>
    </div>
  </header>
);
