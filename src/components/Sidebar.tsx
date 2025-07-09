import React, { useState } from 'react';
import { Home, Search, Library, Plus, Heart, Download, ChevronDown, Pin } from 'lucide-react';
import SpotifyLogo from './SpotifyLogo';

export default function Sidebar() {
  const [isLibraryExpanded, setIsLibraryExpanded] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Playlists', 'Artists', 'Albums', 'Podcasts & Shows'];
  
  const libraryItems = [
    { name: 'Liked Songs', type: 'Playlist', count: '1,247 songs', pinned: true, image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=60' },
    { name: 'Discover Weekly', type: 'Made for you', count: '30 songs', pinned: true, image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=60' },
    { name: 'Release Radar', type: 'Made for you', count: '30 songs', pinned: false, image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=60' },
    { name: 'Daily Mix 1', type: 'Made for you', count: '50 songs', pinned: false, image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=60' },
    { name: 'Chill Vibes', type: 'Playlist', count: '89 songs', pinned: false, image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=60' },
    { name: 'Workout Hits', type: 'Playlist', count: '156 songs', pinned: false, image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=60' },
    { name: 'Road Trip Mix', type: 'Playlist', count: '203 songs', pinned: false, image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=60' },
    { name: 'Focus Flow', type: 'Playlist', count: '67 songs', pinned: false, image: 'https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=60' },
    { name: 'The Weeknd', type: 'Artist', count: '5 albums', pinned: false, image: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=60' },
    { name: 'Billie Eilish', type: 'Artist', count: '3 albums', pinned: false, image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=60' },
    { name: 'After Hours', type: 'Album', count: 'The Weeknd', pinned: false, image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=60' },
    { name: 'Future Nostalgia', type: 'Album', count: 'Dua Lipa', pinned: false, image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=60' }
  ];

  const filteredItems = selectedFilter === 'All' 
    ? libraryItems 
    : libraryItems.filter(item => {
        if (selectedFilter === 'Playlists') return item.type === 'Playlist' || item.type === 'Made for you';
        if (selectedFilter === 'Artists') return item.type === 'Artist';
        if (selectedFilter === 'Albums') return item.type === 'Album';
        return item.type === selectedFilter;
      });

  return (
    <div className="w-64 bg-black h-full flex flex-col hidden lg:flex">
      {/* Main Navigation */}
      <div className="p-6">
        <div className="mb-8">
          <SpotifyLogo className="w-10 h-10" textSize="text-xl" />
        </div>
        
        <nav className="space-y-4">
          <a href="#" className="flex items-center text-white hover:text-white group">
            <Home className="w-6 h-6 mr-4" />
            <span className="font-bold">Home</span>
          </a>
          <a href="#" className="flex items-center text-gray-400 hover:text-white group transition-colors">
            <Search className="w-6 h-6 mr-4" />
            <span className="font-bold">Search</span>
          </a>
        </nav>
      </div>

      {/* Your Library */}
      <div className="flex-1 flex flex-col min-h-0">
        <div className="px-6 mb-4">
          <button 
            onClick={() => setIsLibraryExpanded(!isLibraryExpanded)}
            className="flex items-center justify-between w-full text-gray-400 hover:text-white group transition-colors"
          >
            <div className="flex items-center">
              <Library className="w-6 h-6 mr-4" />
              <span className="font-bold">Your Library</span>
            </div>
            <div className="flex items-center space-x-2">
              <Plus className="w-5 h-5 hover:bg-gray-800 rounded p-0.5 transition-colors" />
              <ChevronDown className={`w-5 h-5 transition-transform ${isLibraryExpanded ? 'rotate-180' : ''}`} />
            </div>
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-6 mb-4">
          <div className="flex flex-wrap gap-2">
            {filters.slice(0, 2).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedFilter === filter
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Library Items */}
        <div className="flex-1 px-6 overflow-y-auto">
          <div className="space-y-2">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-2 rounded-md hover:bg-gray-800 hover:bg-opacity-50 cursor-pointer group transition-colors"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded object-cover mr-3 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <h4 className="text-white text-sm font-medium truncate">{item.name}</h4>
                    {item.pinned && <Pin className="w-3 h-3 text-[#1DB954] ml-2 flex-shrink-0" />}
                  </div>
                  <p className="text-gray-400 text-xs truncate">{item.type} • {item.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Install App */}
      <div className="p-6 border-t border-gray-800">
        <button className="flex items-center text-gray-400 hover:text-white transition-colors">
          <Download className="w-5 h-5 mr-3" />
          <span className="text-sm font-bold">Install App</span>
        </button>
      </div>
    </div>
  );
}