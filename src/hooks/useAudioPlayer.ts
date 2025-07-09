import { useState, useRef, useEffect, useCallback } from 'react';

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  image: string;
  audioUrl: string;
  duration: number;
}

export interface AudioPlayerState {
  currentTrack: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isLoading: boolean;
  isShuffled: boolean;
  repeatMode: number; // 0: off, 1: all, 2: one
}

export const useAudioPlayer = (playlist: Track[] = []) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [state, setState] = useState<AudioPlayerState>({
    currentTrack: playlist[0] || null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 70,
    isLoading: false,
    isShuffled: false,
    repeatMode: 0
  });

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;

    const handleLoadStart = () => setState(prev => ({ ...prev, isLoading: true }));
    const handleCanPlay = () => setState(prev => ({ ...prev, isLoading: false }));
    const handleLoadedMetadata = () => {
      setState(prev => ({ ...prev, duration: audio.duration }));
    };
    const handleTimeUpdate = () => {
      setState(prev => ({ ...prev, currentTime: audio.currentTime }));
    };
    const handleEnded = () => {
      handleNext();
    };
    const handleError = () => {
      setState(prev => ({ ...prev, isLoading: false }));
      console.error('Audio playback error');
    };

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.pause();
    };
  }, []);

  // Update current track when index changes
  useEffect(() => {
    if (playlist[currentTrackIndex]) {
      const newTrack = playlist[currentTrackIndex];
      setState(prev => ({ ...prev, currentTrack: newTrack }));
      
      if (audioRef.current) {
        audioRef.current.src = newTrack.audioUrl;
        audioRef.current.load();
      }
    }
  }, [currentTrackIndex, playlist]);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = state.volume / 100;
    }
  }, [state.volume]);

  const play = useCallback(async () => {
    if (audioRef.current && state.currentTrack) {
      try {
        await audioRef.current.play();
        setState(prev => ({ ...prev, isPlaying: true }));
      } catch (error) {
        console.error('Play failed:', error);
      }
    }
  }, [state.currentTrack]);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setState(prev => ({ ...prev, isPlaying: false }));
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (state.isPlaying) {
      pause();
    } else {
      play();
    }
  }, [state.isPlaying, play, pause]);

  const seekTo = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setState(prev => ({ ...prev, currentTime: time }));
    }
  }, []);

  const setVolume = useCallback((volume: number) => {
    setState(prev => ({ ...prev, volume }));
  }, []);

  const getNextTrackIndex = useCallback(() => {
    if (state.isShuffled) {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * playlist.length);
      } while (nextIndex === currentTrackIndex && playlist.length > 1);
      return nextIndex;
    }
    return (currentTrackIndex + 1) % playlist.length;
  }, [currentTrackIndex, playlist.length, state.isShuffled]);

  const getPrevTrackIndex = useCallback(() => {
    if (state.isShuffled) {
      let prevIndex;
      do {
        prevIndex = Math.floor(Math.random() * playlist.length);
      } while (prevIndex === currentTrackIndex && playlist.length > 1);
      return prevIndex;
    }
    return currentTrackIndex === 0 ? playlist.length - 1 : currentTrackIndex - 1;
  }, [currentTrackIndex, playlist.length, state.isShuffled]);

  const handleNext = useCallback(() => {
    if (state.repeatMode === 2) {
      // Repeat one - replay current track
      seekTo(0);
      if (state.isPlaying) play();
      return;
    }

    const nextIndex = getNextTrackIndex();
    if (nextIndex !== currentTrackIndex || state.repeatMode === 1) {
      setCurrentTrackIndex(nextIndex);
    } else if (state.repeatMode === 0) {
      // No repeat - stop at end of playlist
      pause();
    }
  }, [state.repeatMode, state.isPlaying, getNextTrackIndex, currentTrackIndex, seekTo, play, pause]);

  const handlePrevious = useCallback(() => {
    if (state.currentTime > 3) {
      // If more than 3 seconds played, restart current track
      seekTo(0);
    } else {
      // Go to previous track
      const prevIndex = getPrevTrackIndex();
      setCurrentTrackIndex(prevIndex);
    }
  }, [state.currentTime, getPrevTrackIndex, seekTo]);

  const toggleShuffle = useCallback(() => {
    setState(prev => ({ ...prev, isShuffled: !prev.isShuffled }));
  }, []);

  const toggleRepeat = useCallback(() => {
    setState(prev => ({ ...prev, repeatMode: (prev.repeatMode + 1) % 3 }));
  }, []);

  const playTrack = useCallback((trackIndex: number) => {
    setCurrentTrackIndex(trackIndex);
    // Play will be triggered by the useEffect when track changes
    setTimeout(() => play(), 100);
  }, [play]);

  return {
    ...state,
    play,
    pause,
    togglePlay,
    seekTo,
    setVolume,
    handleNext,
    handlePrevious,
    toggleShuffle,
    toggleRepeat,
    playTrack,
    currentTrackIndex,
    playlist
  };
};