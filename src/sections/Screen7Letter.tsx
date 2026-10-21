import React, { useState } from 'react';
import { Mail, Sparkles, Heart, ChevronUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../data/birthdayConfig';

export const Screen7Letter: React.FC = () => {
  const content = birthdayConfig.letter;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenLetter = () => {
    setIsOpen(true);
    // Tasteful celebratory sparkle
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.65 },
      colors: ['#D6A0A6', '#C8A46B', '#F2D6D7', '#702D42'],
      disableForReducedMotion: true,
    });
  };

  return (
    <section id="letter-from-sahil" className="relative py-24 px-4 sm:px-6 bg-ivory-dark/30">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 border border-dustyRose/30 text-burgundy text-xs font-serif tracking-widest uppercase mb-3">
            <Mail className="w-3.5 h-3.5 text-gold" />
            <span>{content.badge}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-burgundy tracking-tight">
            {content.envelopeTitle}
          </h2>

          <p className="font-serif italic text-warmDark/70 text-sm sm:text-base mt-2">
            Written with heartfelt brotherly warmth and genuine appreciation.
          </p>
        </div>

        {/* Envelope Container */}
        {!isOpen ? (
          <div className="relative mx-auto max-w-lg bg-blush/40 p-8 sm:p-12 rounded-3xl border border-dustyRose/40 shadow-envelope text-center flex flex-col items-center">
            {/* Burgundy Ribbon */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-burgundy/20 pointer-events-none" />
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-8 bg-burgundy/20 pointer-events-none" />

            {/* Wax Seal Circle */}
            <button
              onClick={handleOpenLetter}
              className="relative z-10 w-20 h-20 rounded-full wax-seal text-gold flex flex-col items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-all shadow-xl group border-2 border-gold/40"
              aria-label="Click to break wax seal and open letter"
            >
              <Heart className="w-6 h-6 fill-gold/80 text-gold group-hover:scale-110 transition-transform" />
              <span className="font-display text-[10px] tracking-widest text-ivory uppercase font-bold mt-0.5">
                Disha
              </span>
            </button>

            {/* Prompt */}
            <h3 className="relative z-10 font-serif text-xl sm:text-2xl text-burgundy font-medium mt-6">
              For my Diduu Disha, with lots of love
            </h3>

            <p className="relative z-10 font-sans text-xs sm:text-sm text-warmDark/70 mt-1 max-w-xs">
              Click the seal or button below to unseal your birthday letter.
            </p>

            <button
              onClick={handleOpenLetter}
              className="relative z-10 mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-burgundy hover:bg-burgundy-light text-ivory font-serif tracking-wide text-sm shadow-md hover:shadow-gold-glow transition-all"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span>{content.openButtonText}</span>
            </button>
          </div>
        ) : (
          /* Unfolded Letter Sheet */
          <div className="relative bg-parchment p-8 sm:p-14 rounded-3xl shadow-2xl border border-dustyRose/40 animate-fadeIn">
            {/* Fine gold corner accents */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-gold/50 pointer-events-none" />
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-gold/50 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-gold/50 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-gold/50 pointer-events-none" />

            {/* Salutation */}
            <p className="font-display text-2xl sm:text-3xl font-semibold text-burgundy mb-6">
              {content.salutation}
            </p>

            {/* Paragraphs */}
            <div className="space-y-4 font-serif text-base sm:text-lg leading-relaxed text-warmDark/90">
              {content.paragraphs.map((para, idx) => (
                <p key={idx} className={para.includes('Aur haan') ? "p-4 bg-blush/30 rounded-2xl border-l-2 border-burgundy italic text-burgundy" : ""}>
                  {para}
                </p>
              ))}
            </div>

            {/* Sign-off */}
            <div className="mt-10 pt-6 border-t border-dustyRose/20 text-right">
              <p className="font-serif italic text-warmDark/70 text-base">
                {content.signOff}
              </p>
              <p className="font-display text-2xl sm:text-3xl font-semibold text-burgundy mt-1">
                {content.senderName}
              </p>
            </div>

            {/* Fold Back Button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/70 hover:bg-blush/40 text-warmDark/70 hover:text-burgundy text-xs font-serif transition-colors border border-dustyRose/30"
              >
                <ChevronUp className="w-3.5 h-3.5" />
                <span>{content.closeButtonText}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
