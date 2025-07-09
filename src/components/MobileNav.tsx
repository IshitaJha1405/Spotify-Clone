import React from 'react';
import { Home, Search, Library, Menu, X } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

export default function MobileNav({ isOpen, onToggle }: MobileNavProps) {
  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-20 left-0 right-0 bg-gray-900 border-t border-gray-800 px-4 py-2">
        <div className="flex items-center justify-around">
          <button className="flex flex-col items-center space-y-1 text-white">
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-gray-400">
            <Search className="w-6 h-6" />
            <span className="text-xs font-medium">Search</span>
          </button>
          <button 
            onClick={() => onToggle(!isOpen)}
            className="flex flex-col items-center space-y-1 text-gray-400"
          >
            <Library className="w-6 h-6" />
            <span className="text-xs font-medium">Your Library</span>
          </button>
        </div>
      </div>

      {/* Mobile Library Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <h1 className="text-white text-xl font-bold">Your Library</h1>
            <button 
              onClick={() => onToggle(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Library Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-4">
              {/* Recently Created */}
              <div>
                <h2 className="text-gray-400 text-sm font-bold mb-3">RECENTLY CREATED</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-700 to-blue-300 rounded flex items-center justify-center">
                      <span className="text-white text-lg">♥</span>
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Liked Songs</h3>
                      <p className="text-gray-400 text-sm">1,247 songs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Made for You */}
              <div>
                <h2 className="text-gray-400 text-sm font-bold mb-3">MADE FOR YOU</h2>
                <div className="space-y-3">
                  {[
                    { name: 'Discover Weekly', desc: '30 songs' },
                    { name: 'Release Radar', desc: '30 songs' },
                    { name: 'Daily Mix 1', desc: '50 songs' },
                    { name: 'Daily Mix 2', desc: '50 songs' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <img
                        src={`https://images.pexels.com/photos/${1190297 + index * 100}/pexels-photo-${1190297 + index * 100}.jpeg?auto=compress&cs=tinysrgb&w=60`}
                        alt={item.name}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div>
                        <h3 className="text-white font-medium">{item.name}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Your Playlists */}
              <div>
                <h2 className="text-gray-400 text-sm font-bold mb-3">YOUR PLAYLISTS</h2>
                <div className="space-y-3">
                  {[
                    'Chill Vibes',
                    'Workout Hits',
                    'Road Trip Mix',
                    'Focus Flow'
                  ].map((playlist, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <img
                        src={`https://images.pexels.com/photos/${1105666 + index * 200}/pexels-photo-${1105666 + index * 200}.jpeg?auto=compress&cs=tinysrgb&w=60`}
                        alt={playlist}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div>
                        <h3 className="text-white font-medium">{playlist}</h3>
                        <p className="text-gray-400 text-sm">Playlist</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}