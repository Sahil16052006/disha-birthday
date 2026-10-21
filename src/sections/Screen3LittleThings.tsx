import React from 'react';
import { Heart, Sparkles, Feather } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';

export const Screen3LittleThings: React.FC = () => {
  const content = birthdayConfig.littleThings;

  return (
    <section
      id="the-little-things"
      className="relative py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-blush/20 to-transparent flex justify-center"
    >
      <div className="max-w-3xl w-full">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-dustyRose/30 text-burgundy text-xs font-serif tracking-widest uppercase mb-3">
            <Feather className="w-3.5 h-3.5 text-gold" />
            <span>{content.sectionBadge}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-burgundy tracking-tight">
            {content.heading}
          </h2>

          <p className="font-serif italic text-warmDark/70 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            {content.subheading}
          </p>
        </div>

        {/* Parchment Paper Note */}
        <div className="relative bg-parchment p-8 sm:p-12 rounded-3xl shadow-soft-rose border border-dustyRose/40 text-warmDark">
          {/* Subtle Top Bookmark / Ribbon */}
          <div className="absolute -top-3 left-10 w-8 h-10 bg-burgundy rounded-b-md shadow-md flex items-end justify-center pb-1">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
          </div>

          {/* Letter Content */}
          <div className="space-y-5 font-serif text-base sm:text-lg leading-relaxed text-warmDark/90">
            <p className="first-letter:text-4xl first-letter:font-display first-letter:text-burgundy first-letter:float-left first-letter:mr-2 first-letter:leading-none">
              {content.paragraphs[0]}
            </p>

            <p>{content.paragraphs[1]}</p>

            <p className="font-medium text-burgundy/90">
              {content.paragraphs[2]}
            </p>

            <p>{content.paragraphs[3]}</p>

            {/* Hinglish Quote Highlight Box */}
            <div className="my-6 p-4 sm:p-5 bg-blush/30 rounded-2xl border-l-4 border-burgundy italic text-burgundy font-serif text-lg sm:text-xl">
              {content.hinglishHighlight}
            </div>

            <p>{content.paragraphs[4]}</p>
          </div>

          {/* Closing Heartfelt Note */}
          <div className="mt-8 pt-6 border-t border-dustyRose/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-handwritten text-xl sm:text-2xl text-burgundy font-semibold text-center sm:text-left">
              {content.closingNote}
            </p>
            <div className="w-10 h-10 rounded-full bg-blush/50 flex items-center justify-center text-burgundy">
              <Heart className="w-5 h-5 fill-burgundy/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
