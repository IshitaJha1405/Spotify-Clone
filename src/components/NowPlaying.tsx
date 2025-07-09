import React, { useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Maximize2, Heart, MoreHorizontal, Mic2, ListMusic, Monitor } from 'lucide-react';
import { useAudioPlayer } from '../hooks/useAudioPlayer';

interface NowPlayingProps {
  audioPlayer: ReturnType<typeof useAudioPlayer>;
}

export default function NowPlaying({ audioPlayer }: NowPlayingProps) {
  const progressRef = useRef<HTMLDivElement>(null);
  const volumeRef = useRef<HTMLDivElement>(null);

  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    volume,
    isLoading,
    isShuffled,
    repeatMode,
    togglePlay,
    seekTo,
    setVolume,
    handleNext,
    handlePrevious,
    toggleShuffle,
    toggleRepeat
  } = audioPlayer;

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && duration > 0) {
      const rect = progressRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newTime = (clickX / rect.width) * duration;
      seekTo(newTime);
    }
  };

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (volumeRef.current) {
      const rect = volumeRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newVolume = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
      setVolume(newVolume);
    }
  };

  const getRepeatIcon = () => {
    if (repeatMode === 2) return <Repeat className="w-4 h-4 text-[#1DB954]" />;
    return <Repeat className={`w-4 h-4 ${repeatMode === 1 ? 'text-[#1DB954]' : 'text-gray-400'}`} />;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (!currentTrack) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 px-2 sm:px-4 py-2 sm:py-3 z-50">
      <div className="flex items-center justify-between">
        {/* Currently Playing */}
        <div className="flex items-center space-x-2 sm:space-x-3 w-1/4 min-w-0">
          <img
            src={currentTrack.image}
            alt="Now playing"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded object-cover flex-shrink-0"
          />
          <div className="min-w-0 hidden sm:block">
            <h4 className="text-white text-sm font-medium truncate">{currentTrack.title}</h4>
            <p className="text-gray-400 text-xs truncate hover:text-white hover:underline cursor-pointer">
              {currentTrack.artist}
            </p>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors hidden sm:block">
            <Heart className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors hidden lg:block">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center w-2/4 max-w-md">
          <div className="flex items-center space-x-2 sm:space-x-4 mb-2">
            <button 
              onClick={toggleShuffle}
              className="text-gray-400 hover:text-white transition-colors hidden sm:block"
            >
              <Shuffle className={`w-4 h-4 ${isShuffled ? 'text-[#1DB954]' : ''}`} />
            </button>
            <button 
              onClick={handlePrevious}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipBack className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
            <button
              onClick={togglePlay}
              disabled={isLoading}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-4 h-4 text-black" />
              ) : (
                <Play className="w-4 h-4 text-black ml-0.5" />
              )}
            </button>
            <button 
              onClick={handleNext}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <SkipForward className="w-4 sm:w-5 h-4 sm:h-5" />
            </button>
            <button 
              onClick={toggleRepeat}
              className="text-gray-400 hover:text-white transition-colors hidden sm:block"
            >
              {getRepeatIcon()}
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="flex items-center space-x-2 w-full">
            <span className="text-gray-400 text-xs hidden sm:block">
              {formatTime(currentTime)}
            </span>
            <div 
              ref={progressRef}
              onClick={handleProgressClick}
              className="flex-1 bg-gray-600 rounded-full h-1 relative cursor-pointer group"
            >
              <div
                className="bg-white rounded-full h-1 relative transition-all duration-150"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <span className="text-gray-400 text-xs hidden sm:block">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Volume and Other Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3 w-1/4 justify-end">
          <button className="text-gray-400 hover:text-white transition-colors hidden lg:block">
            <Mic2 className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors hidden lg:block">
            <ListMusic className="w-4 h-4" />
          </button>
          <button className="text-gray-400 hover:text-white transition-colors hidden lg:block">
            <Monitor className="w-4 h-4" />
          </button>
          <div className="flex items-center space-x-2 hidden sm:flex">
            <Volume2 className="w-4 h-4 text-gray-400" />
            <div 
              ref={volumeRef}
              onClick={handleVolumeClick}
              className="w-16 lg:w-20 bg-gray-600 rounded-full h-1 relative cursor-pointer group"
            >
              <div
                className="bg-white rounded-full h-1 relative transition-all duration-150"
                style={{ width: `${volume}%` }}
              >
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors hidden lg:block">
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}