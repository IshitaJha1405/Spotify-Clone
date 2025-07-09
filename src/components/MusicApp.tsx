import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import NowPlaying from './NowPlaying';
import MobileNav from './MobileNav';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { sampleTracks } from '../data/tracks';

export default function MusicApp() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const audioPlayer = useAudioPlayer(sampleTracks);

  return (
    <div className="h-screen flex flex-col bg-black overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent audioPlayer={audioPlayer} />
      </div>
      <NowPlaying audioPlayer={audioPlayer} />
      <MobileNav isOpen={isMobileNavOpen} onToggle={setIsMobileNavOpen} />
    </div>
  );
}