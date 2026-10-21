import React, { useState } from 'react';
import { Screen1Opening } from './sections/Screen1Opening';
import { Screen2Hero } from './sections/Screen2Hero';
import { Screen3LittleThings } from './sections/Screen3LittleThings';
import { Screen4Growth } from './sections/Screen4Growth';
import { Screen5Books } from './sections/Screen5Books';
import { Screen6Gallery } from './sections/Screen6Gallery';
import { Screen7Letter } from './sections/Screen7Letter';
import { Screen8Countdown } from './sections/Screen8Countdown';
import { Screen9Surprise } from './sections/Screen9Surprise';
import { Screen10Final } from './sections/Screen10Final';
import { Navbar } from './components/Navbar';
import { PetalsCanvas } from './components/PetalsCanvas';
import { MusicPlayer } from './components/MusicPlayer';
import { ambientPlayer } from './utils/ambientAudio';

export const App: React.FC = () => {
  const [isGiftOpened, setIsGiftOpened] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  const handleOpenGift = (withSound: boolean) => {
    setIsGiftOpened(true);
    setSoundEnabled(withSound);
    if (withSound) {
      ambientPlayer.play();
    }
  };

  const handleReplay = () => {
    ambientPlayer.pause();
    setSoundEnabled(false);
    setIsGiftOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-ivory text-warmDark font-sans selection:bg-dustyRose/30 selection:text-burgundy">
      {/* Delicate floating petals & golden dust particles */}
      <PetalsCanvas active={true} />

      {/* Floating Ambient Music Player */}
      <MusicPlayer initialPlay={soundEnabled && isGiftOpened} />

      {/* SCREEN 1: Full-screen opening curtain / gate */}
      {!isGiftOpened && <Screen1Opening onOpenGift={handleOpenGift} />}

      {/* MAIN BIRTHDAY EXPERIENCE (Revealed upon opening) */}
      <main
        className={`transition-opacity duration-1000 ${
          isGiftOpened ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
        }`}
      >
        <Navbar />
        <Screen2Hero />
        <Screen3LittleThings />
        <Screen4Growth />
        <Screen5Books />
        <Screen6Gallery />
        <Screen7Letter />
        <Screen8Countdown />
        <Screen9Surprise />
        <Screen10Final onReplay={handleReplay} />
      </main>
    </div>
  );
};

export default App;
