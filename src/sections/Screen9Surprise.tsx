import React, { useState } from 'react';
import { Gift, Sparkles, Heart, ArrowUp, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { birthdayConfig } from '../data/birthdayConfig';

export const Screen9Surprise: React.FC = () => {
  const content = birthdayConfig.surprise;
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const handleReveal = () => {
    setIsRevealed(true);
    // Multi-stage celebratory sparkle
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F2D6D7', '#D6A0A6', '#C8A46B', '#702D42', '#FFF9F3'],
      disableForReducedMotion: true,
    });
  };

  const scrollToLetter = () => {
    const el = document.getElementById('letter-from-sahil');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="secret-surprise" className="relative py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-blush/30 to-ivory">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 border border-dustyRose/30 text-burgundy text-xs font-serif tracking-widest uppercase mb-3">
          <Gift className="w-3.5 h-3.5 text-gold" />
          <span>{content.badge}</span>
        </div>

        {!isRevealed ? (
          /* Unopened Gift Box State */
          <div className="relative mx-auto max-w-lg bg-white/80 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-dustyRose/40 shadow-soft-rose flex flex-col items-center">
            {/* Gift Box Icon / Graphic */}
            <div className="relative mb-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blush to-dustyRose/40 flex items-center justify-center text-burgundy shadow-inner border border-dustyRose/30 animate-float">
                <Gift className="w-10 h-10" />
              </div>
              <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gold text-ivory flex items-center justify-center text-xs shadow">
                <Sparkles className="w-3 h-3" />
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-burgundy mb-2">
              {content.teaser}
            </h3>

            <p className="font-serif italic text-warmDark/70 text-sm sm:text-base mb-8 max-w-xs">
              A quiet, personal thought before this birthday chapter closes.
            </p>

            <button
              onClick={handleReveal}
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-burgundy hover:bg-burgundy-light text-ivory rounded-full shadow-soft-rose hover:shadow-gold-glow transition-all duration-300 font-serif text-base tracking-wider cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-gold text-gold group-hover:scale-110 transition-transform" />
              <span>{content.buttonText}</span>
            </button>
          </div>
        ) : (
          /* Revealed Surprise Card */
          <div className="relative bg-parchment p-8 sm:p-12 rounded-3xl shadow-2xl border border-gold/40 text-left animate-fadeIn">
            {/* Fine gold border corner accents */}
            <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-gold pointer-events-none" />
            <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-gold pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-gold pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-gold pointer-events-none" />

            {/* Note Header */}
            <div className="text-center pb-6 mb-6 border-b border-dustyRose/20">
              <span className="font-sans text-xs uppercase tracking-widest text-gold font-semibold block mb-1">
                {content.title}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-burgundy">
                For Disha
              </h3>
            </div>

            {/* Surprise Letter Content */}
            <div className="space-y-4 font-serif text-base sm:text-lg leading-relaxed text-warmDark/90">
              {content.letterContent.map((para, idx) => (
                <p key={idx} className={idx === 0 ? "font-display text-xl text-burgundy font-semibold" : ""}>
                  {para}
                </p>
              ))}
            </div>

            {/* Heartfelt Closing Wish */}
            <div className="mt-8 pt-6 border-t border-dustyRose/20 text-center">
              <p className="font-display text-2xl sm:text-3xl font-bold text-burgundy">
                {content.closingWish}
              </p>
            </div>

            {/* Navigation Options */}
            <div className="mt-8 pt-6 border-t border-dustyRose/15 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={scrollToLetter}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-blush/40 text-burgundy text-xs font-serif border border-dustyRose/30 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Revisit Sahil's Letter</span>
              </button>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-blush/40 text-warmDark/70 hover:text-burgundy text-xs font-serif border border-dustyRose/30 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Return to Beginning</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
