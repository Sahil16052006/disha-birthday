import React, { useState } from 'react';
import { BookOpen, Bookmark, Sparkles, BookMarked } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';

export const Screen5Books: React.FC = () => {
  const content = birthdayConfig.books;
  const [activeBookId, setActiveBookId] = useState<string | null>(null);

  const toggleBook = (id: string) => {
    setActiveBookId(activeBookId === id ? null : id);
  };

  return (
    <section id="between-the-pages" className="relative py-20 px-4 sm:px-6 bg-ivory-dark/40">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/80 border border-dustyRose/30 text-burgundy text-xs font-serif tracking-widest uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5 text-gold" />
            <span>{content.badge}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-burgundy tracking-tight">
            {content.title}
          </h2>

          <p className="font-serif italic text-warmDark/70 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {content.list.map((book) => {
            const isOpen = activeBookId === book.id;

            return (
              <div
                key={book.id}
                className="relative bg-white/80 rounded-3xl p-6 sm:p-8 shadow-soft-rose border border-dustyRose/30 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Book Bookmark Ribbon */}
                <div
                  className="absolute -top-3 right-8 w-6 h-12 rounded-b shadow-sm flex items-end justify-center pb-1 text-ivory text-xs"
                  style={{ backgroundColor: book.coverTone }}
                >
                  <Bookmark className="w-3.5 h-3.5 fill-current" />
                </div>

                {/* Book Hardcover Representation */}
                <div>
                  <div
                    className="p-6 rounded-2xl mb-6 shadow-md border border-white/20 text-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${book.coverTone} 0%, #24181B 100%)`,
                      color: '#FFF9F3',
                    }}
                  >
                    {/* Spine Shadow Effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/25 pointer-events-none" />

                    <div className="py-6">
                      <span className="font-sans text-[10px] tracking-widest uppercase text-gold/90 block mb-2">
                        Literary Selection
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-wide text-ivory mb-2">
                        {book.title}
                      </h3>
                      <p className="font-serif italic text-xs sm:text-sm text-blush/90 max-w-xs mx-auto">
                        {book.subtitle}
                      </p>
                    </div>

                    <div className="border-t border-gold/30 pt-3 flex items-center justify-center gap-1.5 text-xs text-gold">
                      <Sparkles className="w-3 h-3" />
                      <span className="font-serif">Shared by Sahil</span>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-warmDark/80 mb-4 leading-relaxed">
                    {book.description}
                  </p>

                  {/* Toggleable Page Turn Reflection */}
                  {isOpen && (
                    <div className="p-4 bg-blush/30 rounded-2xl border-l-2 border-burgundy mb-4 text-xs sm:text-sm font-serif italic text-warmDark/90 animate-fadeIn">
                      <span className="font-sans text-[10px] font-semibold tracking-wider uppercase text-burgundy block not-italic mb-1">
                        A Quiet Reflection:
                      </span>
                      {book.reflection}
                    </div>
                  )}
                </div>

                {/* Turn Page / Peek Inside Button */}
                <button
                  onClick={() => toggleBook(book.id)}
                  className="mt-4 w-full py-2.5 px-4 rounded-xl bg-ivory-dark/70 hover:bg-blush/50 text-burgundy border border-dustyRose/30 text-xs sm:text-sm font-serif font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  aria-label={isOpen ? `Close page for ${book.title}` : `Turn page and read reflection for ${book.title}`}
                >
                  <BookMarked className="w-4 h-4 text-gold" />
                  <span>{isOpen ? 'Close page' : 'Turn the page & read reflection'}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Personal Note on Sharing Books */}
        <div className="bg-white/90 p-6 sm:p-8 rounded-3xl shadow-soft-rose border border-gold/30 text-center max-w-2xl mx-auto">
          <span className="font-sans text-xs tracking-widest uppercase text-gold font-semibold block mb-2">
            A Note on Stories
          </span>
          <p className="font-serif text-base sm:text-lg text-warmDark/90 italic leading-relaxed">
            “{content.personalNote}”
          </p>
        </div>
      </div>
    </section>
  );
};
