import React from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Calendar, Heart, ArrowDown } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';

export const Screen2Hero: React.FC = () => {
  const triggerCelebration = () => {
    // Tasteful, soft pastel rose and gold celebration
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#F2D6D7', '#D6A0A6', '#C8A46B', '#FFF9F3', '#702D42'],
      disableForReducedMotion: true,
    });
  };

  const scrollToNext = () => {
    const el = document.getElementById('the-little-things');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="birthday-hero" className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 py-16 text-center">
      {/* Decorative top badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush/50 border border-dustyRose/40 text-burgundy text-xs sm:text-sm font-serif tracking-wider mb-6 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 text-gold" />
        <span>{birthdayConfig.hero.badge}</span>
        <Sparkles className="w-3.5 h-3.5 text-gold" />
      </div>

      {/* Main Heading */}
      <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-burgundy tracking-tight max-w-4xl mb-4 leading-tight">
        {birthdayConfig.hero.title}
      </h1>

      {/* Supporting Subheading */}
      <p className="font-serif italic text-lg sm:text-2xl md:text-3xl text-warmDark/85 max-w-2xl mb-4 font-normal">
        {birthdayConfig.hero.subtitle}
      </p>

      {/* Birthday Date Tag */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ivory-dark/70 border border-gold/40 text-warmDark text-xs sm:text-sm mb-8">
        <Calendar className="w-3.5 h-3.5 text-gold" />
        <span className="font-serif tracking-widest uppercase font-semibold text-burgundy">
          {birthdayConfig.hero.dateLabel}
        </span>
      </div>

      {/* Warm Editorial Letter Box */}
      <div className="max-w-2xl bg-white/70 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-soft-rose border border-dustyRose/30 text-left relative overflow-hidden">
        {/* Fine gold border corner accents */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-gold/40 rounded-tl-sm pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-gold/40 rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-gold/40 rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-gold/40 rounded-br-sm pointer-events-none" />

        <div className="space-y-4 text-warmDark/90 font-sans text-sm sm:text-base leading-relaxed">
          {birthdayConfig.hero.letterIntro.map((para, idx) => (
            <p key={idx} className={idx === 0 ? "font-serif text-lg sm:text-xl font-medium text-burgundy" : ""}>
              {para}
            </p>
          ))}

          {/* Hinglish Accent Line */}
          <p className="font-serif italic text-burgundy font-medium text-base sm:text-lg pt-2 border-t border-dustyRose/20">
            {birthdayConfig.hero.closingHinglish}
          </p>
        </div>

        {/* Small Interactive Confetti Button */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-dustyRose/20">
          <button
            onClick={triggerCelebration}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blush/60 hover:bg-blush text-burgundy text-xs font-medium transition-colors"
            title="Throw birthday petals"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold" /> Celebrate With Petals
          </button>

          <span className="font-handwritten text-xs sm:text-sm text-warmDark/60 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-burgundy inline fill-burgundy" /> for my Diduu Disha
          </span>
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <button
        onClick={scrollToNext}
        className="mt-12 inline-flex flex-col items-center gap-1.5 text-warmDark/60 hover:text-burgundy transition-colors group cursor-pointer"
        aria-label="Scroll to next section"
      >
        <span className="font-serif text-xs tracking-wider uppercase group-hover:text-burgundy">
          Read My Diduu’s Story
        </span>
        <ArrowDown className="w-4 h-4 text-dustyRose group-hover:translate-y-1 transition-transform" />
      </button>
    </header>
  );
};
