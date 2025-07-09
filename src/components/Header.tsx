import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SpotifyLogo from './SpotifyLogo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <SpotifyLogo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-[#1DB954] transition-colors duration-200 font-medium">
              Premium
            </a>
            <a href="#" className="text-white hover:text-[#1DB954] transition-colors duration-200 font-medium">
              Support
            </a>
            <a href="#" className="text-white hover:text-[#1DB954] transition-colors duration-200 font-medium">
              Download
            </a>
            <div className="h-6 w-px bg-gray-600 mx-4"></div>
            <a href="#" className="text-white hover:text-[#1DB954] transition-colors duration-200 font-medium">
              Sign up
            </a>
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-200">
              Log in
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black border-t border-gray-800">
            <nav className="px-4 py-4 space-y-4">
              <a href="#" className="block text-white hover:text-[#1DB954] transition-colors duration-200 font-medium">
                Premium
              </a>
              <a href="#" className="block text-white hover:text-[#1DB954] transition-colors duration-200 font-medium">
                Support
              </a>
              <a href="#" className="block text-white hover:text-[#1DB954] transition-colors duration-200 font-medium">
                Download
              </a>
              <a href="#" className="block text-white hover:text-[#1DB954] transition-colors duration-200 font-medium">
                Sign up
              </a>
              <button className="w-full bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-200">
                Log in
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}