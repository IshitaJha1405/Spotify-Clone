import React, { useState } from 'react';
import { Play, MoreHorizontal, Clock, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { sampleTracks } from '../data/tracks';

interface MainContentProps {
  audioPlayer: ReturnType<typeof useAudioPlayer>;
}

export default function MainContent({ audioPlayer }: MainContentProps) {
  const [likedSongs, setLikedSongs] = useState(new Set([0, 2, 4]));
  const { playTrack, currentTrackIndex, isPlaying } = audioPlayer;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  const recentlyPlayed = [
    {
      title: 'Liked Songs',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
      type: 'Playlist',
      gradient: 'from-purple-700 to-blue-300'
    },
    {
      title: 'Discover Weekly',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300',
      type: 'Made for you',
      gradient: 'from-green-800 to-green-400'
    },
    {
      title: 'Daily Mix 1',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=300',
      type: 'Made for you',
      gradient: 'from-red-600 to-orange-400'
    },
    {
      title: 'Rock Classics',
      image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=300',
      type: 'Playlist',
      gradient: 'from-gray-700 to-gray-400'
    },
    {
      title: 'Chill Hits',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
      type: 'Playlist',
      gradient: 'from-blue-600 to-cyan-400'
    },
    {
      title: 'Pop Rising',
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
      type: 'Playlist',
      gradient: 'from-pink-600 to-purple-400'
    }
  ];

  const madeForYou = [
    {
      title: 'Discover Weekly',
      description: 'Your weekly mixtape of fresh music',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=300',
      type: 'Made for you'
    },
    {
      title: 'Release Radar',
      description: 'Catch all the latest music from artists you follow',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=300',
      type: 'Made for you'
    },
    {
      title: 'Daily Mix 1',
      description: 'The Weeknd, Dua Lipa, Billie Eilish and more',
      image: 'https://images.pexels.com/photos/1022923/pexels-photo-1022923.jpeg?auto=compress&cs=tinysrgb&w=300',
      type: 'Made for you'
    },
    {
      title: 'Daily Mix 2',
      description: 'Post Malone, Travis Scott, Drake and more',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
      type: 'Made for you'
    },
    {
      title: 'Daily Mix 3',
      description: 'Ed Sheeran, Taylor Swift, Maroon 5 and more',
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
      type: 'Made for you'
    },
    {
      title: 'On Repeat',
      description: 'Songs you can\'t stop playing',
      image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
      type: 'Made for you'
    }
  ];

  const toggleLike = (index: number) => {
    const newLikedSongs = new Set(likedSongs);
    if (newLikedSongs.has(index)) {
      newLikedSongs.delete(index);
    } else {
      newLikedSongs.add(index);
    }
    setLikedSongs(newLikedSongs);
  };

  const handleTrackPlay = (index: number) => {
    playTrack(index);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex-1 bg-gradient-to-b from-gray-900 to-black overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-black bg-opacity-90 backdrop-blur-md z-10 p-4 lg:p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 bg-black bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors">
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button className="w-8 h-8 bg-black bg-opacity-70 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors">
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform hidden sm:block">
              Upgrade
            </button>
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">U</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 lg:px-6 pb-32">
        {/* Greeting */}
        <h1 className="text-white text-2xl lg:text-3xl font-bold mb-6">{getGreeting()}</h1>

        {/* Recently Played Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-8">
          {recentlyPlayed.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 rounded-md flex items-center hover:bg-gray-700 hover:bg-opacity-50 transition-colors group cursor-pointer overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 lg:w-20 lg:h-20 object-cover flex-shrink-0"
              />
              <div className="flex-1 px-4 min-w-0">
                <h3 className="text-white font-bold text-sm lg:text-base truncate">{item.title}</h3>
              </div>
              <button 
                onClick={() => handleTrackPlay(0)}
                className="w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center mr-4 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Play className="w-5 h-5 text-black fill-current ml-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Made for You Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-xl lg:text-2xl font-bold">Made for you</h2>
            <button className="text-gray-400 hover:text-white text-sm font-bold transition-colors">Show all</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {madeForYou.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 bg-opacity-40 p-4 rounded-lg hover:bg-gray-800 hover:bg-opacity-60 transition-all duration-200 group cursor-pointer"
              >
                <div className="relative mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-square object-cover rounded-md shadow-lg"
                  />
                  <button 
                    onClick={() => handleTrackPlay(index % sampleTracks.length)}
                    className="absolute bottom-2 right-2 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 hover:scale-105 shadow-lg"
                  >
                    <Play className="w-5 h-5 text-black fill-current ml-1" />
                  </button>
                </div>
                <h3 className="text-white font-bold text-sm mb-1 truncate">{item.title}</h3>
                <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recently Played Tracks */}
        <div>
          <h2 className="text-white text-xl lg:text-2xl font-bold mb-4">Recently played</h2>
          <div className="bg-black bg-opacity-20 rounded-lg overflow-hidden">
            {/* Table Header - Hidden on mobile */}
            <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 border-b border-gray-800 text-gray-400 text-sm">
              <div className="col-span-1">#</div>
              <div className="col-span-6">TITLE</div>
              <div className="col-span-3">ALBUM</div>
              <div className="col-span-1">DATE ADDED</div>
              <div className="col-span-1">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            
            {/* Track List */}
            {sampleTracks.map((track, index) => (
              <div
                key={track.id}
                className="grid grid-cols-12 gap-2 lg:gap-4 px-4 lg:px-6 py-2 lg:py-3 hover:bg-gray-800 hover:bg-opacity-50 group cursor-pointer transition-colors"
                onClick={() => handleTrackPlay(index)}
              >
                <div className="col-span-1 flex items-center">
                  {currentTrackIndex === index && isPlaying ? (
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="flex space-x-0.5">
                        <div className="w-0.5 h-3 bg-[#1DB954] animate-pulse"></div>
                        <div className="w-0.5 h-2 bg-[#1DB954] animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-0.5 h-4 bg-[#1DB954] animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-0.5 h-2 bg-[#1DB954] animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <span className="text-gray-400 text-sm group-hover:hidden">{index + 1}</span>
                      <Play className="w-4 h-4 text-white hidden group-hover:block" />
                    </>
                  )}
                </div>
                <div className="col-span-8 lg:col-span-6 flex items-center min-w-0">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-10 h-10 rounded mr-3 flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className={`text-sm font-medium truncate ${
                      currentTrackIndex === index ? 'text-[#1DB954]' : 'text-white'
                    }`}>
                      {track.title}
                    </h4>
                    <p className="text-gray-400 text-xs truncate">{track.artist}</p>
                  </div>
                </div>
                <div className="hidden lg:flex lg:col-span-3 items-center">
                  <span className="text-gray-400 text-sm truncate">{track.album}</span>
                </div>
                <div className="hidden lg:flex lg:col-span-1 items-center">
                  <span className="text-gray-400 text-sm">{track.addedDate}</span>
                </div>
                <div className="col-span-2 lg:col-span-1 flex items-center justify-end space-x-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(index);
                    }}
                    className="opacity-0 group-hover:opacity-100 lg:opacity-100 transition-opacity"
                  >
                    <Heart className={`w-4 h-4 transition-colors ${
                      likedSongs.has(index) 
                        ? 'text-[#1DB954] fill-current' 
                        : 'text-gray-400 hover:text-white'
                    }`} />
                  </button>
                  <button 
                    onClick={(e) => e.stopPropagation()}
                    className="opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block"
                  >
                    <MoreHorizontal className="w-4 h-4 text-gray-400 hover:text-white" />
                  </button>
                  <span className="text-gray-400 text-sm">{formatTime(track.duration)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}