import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import SpotifyLogo from './SpotifyLogo';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <SpotifyLogo />
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">For the Record</a></li>
            </ul>
          </div>

          {/* Communities */}
          <div>
            <h3 className="text-white font-bold mb-4">COMMUNITIES</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">For Artists</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Developers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Advertising</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Investors</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Vendors</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white font-bold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Web Player</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Free Mobile App</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors duration-200">Legal</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Center</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-200">Cookies</a>
            <a href="#" className="hover:text-white transition-colors duration-200">About Ads</a>
          </div>
          <p className="text-sm text-gray-400">© 2024 Spotify AB</p>
        </div>
      </div>
    </footer>
  );
}