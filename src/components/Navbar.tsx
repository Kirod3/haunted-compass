import { Link } from 'react-router-dom';
import { StateSelector } from './StateSelector';

export function Navbar() {
  return (
    <nav className="bg-gray-950/50 border-b border-gray-800 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-gray-300">
            <img 
              src="https://i.imgur.com/aEcTztn.png" 
              alt="HauntedCompass Logo" 
              className="logo-image animate-float"
            />
            <span className="font-bold text-xl">HauntedCompass</span>
          </Link>
          <StateSelector />
        </div>
      </div>
    </nav>
  );
}