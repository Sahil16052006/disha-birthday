import React, { useState } from 'react';
import { Camera, ZoomIn, Plus, Heart } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { PhotoLightbox } from '../components/PhotoLightbox';

export const Screen6Gallery: React.FC = () => {
  const content = birthdayConfig.gallery;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Subtle alternating tilts for organic scrapbook feel
  const tilts = ['-rotate-2 hover:rotate-0', 'rotate-2 hover:rotate-0', '-rotate-1 hover:rotate-0', 'rotate-1 hover:rotate-0'];

  return (
    <section id="memory-gallery" className="relative py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush/60 border border-dustyRose/30 text-burgundy text-xs font-serif tracking-widest uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-gold" />
            <span>{content.badge}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-burgundy tracking-tight">
            {content.title}
          </h2>

          <p className="font-serif italic text-warmDark/70 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Scrapbook Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {content.photos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhotoIndex(idx)}
              className={`group relative bg-white p-4 pb-6 rounded-2xl shadow-soft-rose hover:shadow-2xl border border-dustyRose/20 cursor-pointer transition-all duration-300 transform hover:-translate-y-2 ${
                tilts[idx % tilts.length]
              }`}
            >
              {/* Washi Tape Accent */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-blush/70 border-t border-b border-dustyRose/40 transform -rotate-1 opacity-80 shadow-xs pointer-events-none" />

              {/* Photo Frame */}
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-ivory-dark flex items-center justify-center">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-burgundy/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-ivory">
                  <div className="w-9 h-9 rounded-full bg-ivory/80 text-burgundy flex items-center justify-center shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Handwritten Caption */}
              <div className="mt-4 text-center">
                <p className="font-handwritten text-lg sm:text-xl text-burgundy font-semibold leading-tight">
                  {photo.caption}
                </p>
                {photo.subcaption && (
                  <p className="font-sans text-[11px] text-warmDark/60 mt-1 line-clamp-1">
                    {photo.subcaption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Easy Instructions / Add Photos Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-white/60 border border-dustyRose/30 flex items-center justify-between gap-4 text-xs sm:text-sm text-warmDark/70 max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-burgundy fill-burgundy/20 flex-shrink-0" />
            <span>Actual moments of Disha. To add more photos, drop them in <code className="bg-blush/50 px-1 py-0.5 rounded text-burgundy font-mono text-[11px]">public/images/</code> and update <code className="bg-blush/50 px-1 py-0.5 rounded text-burgundy font-mono text-[11px]">birthdayConfig.ts</code>.</span>
          </div>
        </div>

        {/* Lightbox Modal */}
        <PhotoLightbox
          photos={content.photos}
          currentIndex={selectedPhotoIndex}
          onClose={() => setSelectedPhotoIndex(null)}
          onNavigate={(newIndex) => setSelectedPhotoIndex(newIndex)}
        />
      </div>
    </section>
  );
};
