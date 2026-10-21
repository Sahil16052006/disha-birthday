import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Heart, Lock, Unlock, Clock, Key } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../data/birthdayConfig';
import { calculateCountdown, CountdownState, BIRTHDAY_START_UTC } from '../utils/countdownUtils';

interface Screen1OpeningProps {
  onOpenGift: (withSound: boolean) => void;
}

export const Screen1Opening: React.FC<Screen1OpeningProps> = ({ onOpenGift }) => {
  const [withSound, setWithSound] = useState<boolean>(true);
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<CountdownState>(calculateCountdown());
  const [isBypassed, setIsBypassed] = useState<boolean>(false);
  const [justUnlocked, setJustUnlocked] = useState<boolean>(false);

  // Check if locked
  const isLocked = countdown.status === 'before' && !isBypassed;

  useEffect(() => {
    const timer = setInterval(() => {
      const nextState = calculateCountdown();
      setCountdown(nextState);

      // Trigger unlock transition if timer hits 00:00:00 live
      if (nextState.status !== 'before' && isLocked && !isBypassed) {
        setJustUnlocked(true);
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F2D6D7', '#D6A0A6', '#C8A46B', '#702D42', '#FFF9F3'],
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isLocked, isBypassed]);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpenGift(withSound);
    }, 900);
  };

  const handleBypassUnlock = () => {
    setIsBypassed(true);
    setJustUnlocked(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#F2D6D7', '#D6A0A6', '#C8A46B', '#702D42'],
      disableForReducedMotion: true,
    });
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-ivory via-blush/40 to-ivory transition-opacity duration-1000 ${
        isOpening ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(242,214,215,0.6)_0%,_rgba(255,249,243,0.9)_70%)] pointer-events-none" />

      {/* Decorative fine gold frame */}
      <div className="absolute inset-4 sm:inset-8 border border-gold/30 rounded-3xl pointer-events-none" />
      <div className="absolute inset-5 sm:inset-9 border border-dustyRose/20 rounded-3xl pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-xl text-center flex flex-col items-center">
        {/* ============================================================== */}
        {/* CASE A: LOCKED BEFORE OCTOBER 22, 2026 (00:00 IST)             */}
        {/* ============================================================== */}
        {isLocked ? (
          <div className="flex flex-col items-center animate-fadeIn w-full">
            {/* Lock Badge */}
            <div className="mb-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-xs font-serif tracking-wider border border-burgundy/20">
              <Lock className="w-3.5 h-3.5 text-burgundy animate-pulse" />
              <span>Surprise Locked Until 22 October 2026 (00:00 IST)</span>
            </div>

            {/* Teaser line */}
            <p className="font-serif italic text-base sm:text-xl text-warmDark/80 tracking-wide mb-2">
              “Some moments are worth waiting for…”
            </p>

            {/* Title */}
            <h1 className="font-display text-4xl sm:text-6xl font-bold text-burgundy tracking-tight mb-2 drop-shadow-sm">
              For My Diduu ♡
            </h1>

            {/* Subtext */}
            <p className="font-sans text-xs sm:text-sm text-warmDark/70 mb-6 max-w-md">
              Sahil has prepared a personal little world for you. The doors are locked and will open automatically the exact second it turns 12:00 AM on your birthday!
            </p>

            {/* Luxury Countdown Display */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-xs sm:max-w-md mb-8 w-full">
              {/* Days */}
              <div className="bg-white/80 p-3 sm:p-4 rounded-2xl shadow-soft-rose border border-dustyRose/30 flex flex-col items-center">
                <span className="font-display text-2xl sm:text-4xl font-bold text-burgundy">
                  {countdown.days}
                </span>
                <span className="font-sans text-[10px] tracking-wider uppercase text-warmDark/60 mt-1">
                  Days
                </span>
              </div>

              {/* Hours */}
              <div className="bg-white/80 p-3 sm:p-4 rounded-2xl shadow-soft-rose border border-dustyRose/30 flex flex-col items-center">
                <span className="font-display text-2xl sm:text-4xl font-bold text-burgundy">
                  {String(countdown.hours).padStart(2, '0')}
                </span>
                <span className="font-sans text-[10px] tracking-wider uppercase text-warmDark/60 mt-1">
                  Hours
                </span>
              </div>

              {/* Minutes */}
              <div className="bg-white/80 p-3 sm:p-4 rounded-2xl shadow-soft-rose border border-dustyRose/30 flex flex-col items-center">
                <span className="font-display text-2xl sm:text-4xl font-bold text-burgundy">
                  {String(countdown.minutes).padStart(2, '0')}
                </span>
                <span className="font-sans text-[10px] tracking-wider uppercase text-warmDark/60 mt-1">
                  Minutes
                </span>
              </div>

              {/* Seconds */}
              <div className="bg-white/80 p-3 sm:p-4 rounded-2xl shadow-soft-rose border border-gold/40 flex flex-col items-center">
                <span className="font-display text-2xl sm:text-4xl font-bold text-gold">
                  {String(countdown.seconds).padStart(2, '0')}
                </span>
                <span className="font-sans text-[10px] tracking-wider uppercase text-warmDark/60 mt-1">
                  Seconds
                </span>
              </div>
            </div>

            {/* Restricted Disabled Button */}
            <div className="relative group">
              <button
                disabled={true}
                className="cursor-not-allowed inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-burgundy/15 text-burgundy/70 rounded-full text-xs sm:text-sm font-serif tracking-wider border border-dustyRose/40 shadow-inner"
              >
                <Clock className="w-4 h-4 text-burgundy/60" />
                <span>
                  Unlocks Automatically at 12:00 AM IST
                </span>
              </button>
            </div>

            {/* Sahil Bypass Button for Preview & Testing */}
            <div className="mt-8 pt-4 border-t border-dustyRose/20 text-center">
              <button
                onClick={handleBypassUnlock}
                className="inline-flex items-center gap-1.5 text-xs text-warmDark/50 hover:text-burgundy transition-colors px-3 py-1.5 rounded-full hover:bg-white/60 border border-transparent hover:border-dustyRose/30"
                title="Bypass countdown for Sahil preview testing"
              >
                <Key className="w-3.5 h-3.5 text-gold" />
                <span>Sahil Preview Mode (Unlock Now)</span>
              </button>
            </div>
          </div>
        ) : (
          /* ============================================================== */
          /* CASE B: UNLOCKED (OCTOBER 22 OR BYPASSED)                       */
          /* ============================================================== */
          <div className="flex flex-col items-center animate-fadeIn w-full">
            {/* Unlocked Announcement Badge */}
            {justUnlocked && (
              <div className="mb-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blush/70 text-burgundy text-xs font-serif tracking-wider border border-gold/40 animate-bounce">
                <Unlock className="w-3.5 h-3.5 text-gold" />
                <span>The Vault Is Unlocked • Happy Birthday Diduu!</span>
              </div>
            )}

            {/* Romantic motif */}
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-blush/70 text-burgundy shadow-soft-rose border border-dustyRose/40 animate-float">
              <Heart className="w-6 h-6 fill-dustyRose/40 text-burgundy" />
            </div>

            {/* Lead-in line */}
            <p className="font-serif italic text-lg sm:text-2xl text-warmDark/80 tracking-wide mb-3 animate-fade-in">
              {birthdayConfig.opening.teaser}
            </p>

            {/* Disha's Name */}
            <h1 className="font-display text-5xl sm:text-7xl font-semibold text-burgundy tracking-tight mb-4 drop-shadow-sm">
              {birthdayConfig.opening.revealName}
            </h1>

            {/* Subtext */}
            <p className="font-sans text-sm sm:text-base text-warmDark/70 mb-8 max-w-md">
              {birthdayConfig.opening.subtext}
            </p>

            {/* Primary Action Button (Unlocked!) */}
            <button
              onClick={handleOpen}
              disabled={isOpening}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-burgundy hover:bg-burgundy-light text-ivory rounded-full shadow-soft-rose hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-base sm:text-lg font-serif tracking-wider cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-gold group-hover:rotate-12 transition-transform duration-300" />
              <span>{birthdayConfig.opening.buttonText}</span>
              <span className="absolute -inset-0.5 rounded-full border border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Audio Opt-in Toggle */}
            <div className="mt-8 flex items-center gap-2 text-xs text-warmDark/60 bg-white/50 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-dustyRose/30">
              <button
                onClick={() => setWithSound(!withSound)}
                className="flex items-center gap-1.5 hover:text-burgundy transition-colors"
                aria-label="Toggle audio on opening"
              >
                {withSound ? (
                  <Volume2 className="w-4 h-4 text-burgundy" />
                ) : (
                  <VolumeX className="w-4 h-4 text-dustyRose" />
                )}
                <span>{withSound ? 'Melody enabled' : 'Melody muted'}</span>
              </button>
              <span className="text-dustyRose/60">•</span>
              <span className="hidden sm:inline">{birthdayConfig.opening.audioNotice}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
