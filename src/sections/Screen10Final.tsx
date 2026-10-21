import React from 'react';
import { Heart, RotateCcw, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';

interface Screen10FinalProps {
  onReplay: () => void;
}

export const Screen10Final: React.FC<Screen10FinalProps> = ({ onReplay }) => {
  const content = birthdayConfig.closing;

  return (
    <footer id="final-page" className="relative py-24 px-4 sm:px-6 text-center border-t border-dustyRose/20 bg-ivory">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Subtle Floating Flower / Heart Motif */}
        <div className="w-12 h-12 rounded-full bg-blush/60 text-burgundy flex items-center justify-center mb-6 shadow-soft-rose animate-float">
          <Heart className="w-5 h-5 fill-burgundy text-burgundy" />
        </div>

        {/* Lines */}
        <p className="font-serif italic text-lg sm:text-2xl text-warmDark/80 mb-2">
          {content.line1}
        </p>
        <p className="font-serif italic text-base sm:text-xl text-warmDark/70 mb-6">
          {content.line2}
        </p>

        {/* Main birthday wish */}
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-burgundy tracking-tight mb-3">
          {content.birthdayWish}
        </h2>

        {/* Signature */}
        <p className="font-handwritten text-xl sm:text-2xl text-gold font-semibold mb-10">
          {content.signature}
        </p>

        {/* Working Replay Button */}
        <button
          onClick={onReplay}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-blush/50 text-burgundy border border-dustyRose/40 shadow-sm hover:shadow-soft-rose text-sm font-serif font-medium transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          aria-label="Replay the birthday experience from the beginning"
        >
          <RotateCcw className="w-4 h-4 text-gold" />
          <span>{content.replayButtonText}</span>
        </button>

        {/* Subtle Copyright / Date Footnote */}
        <div className="mt-14 text-center text-xs text-warmDark/40 font-sans flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-gold/60" />
          <span>22 October 2026 • Dedicated to Disha</span>
          <Sparkles className="w-3 h-3 text-gold/60" />
        </div>
      </div>
    </footer>
  );
};
