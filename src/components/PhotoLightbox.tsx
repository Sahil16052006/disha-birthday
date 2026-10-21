import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PhotoItem } from '../data/birthdayConfig';

interface PhotoLightboxProps {
  photos: PhotoItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  if (currentIndex === null || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + photos.length) % photos.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % photos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, photos.length, onClose, onNavigate]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged photograph view"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-warmDark/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] bg-ivory p-4 sm:p-6 rounded-2xl shadow-2xl border border-dustyRose/40 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-ivory/80 text-burgundy flex items-center justify-center hover:bg-burgundy hover:text-ivory transition-colors z-10 shadow-sm"
          aria-label="Close photo view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Previous Button */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + photos.length) % photos.length)}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ivory/80 text-burgundy flex items-center justify-center hover:bg-burgundy hover:text-ivory transition-colors z-10 shadow-md"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % photos.length)}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-ivory/80 text-burgundy flex items-center justify-center hover:bg-burgundy hover:text-ivory transition-colors z-10 shadow-md"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Frame */}
        <div className="overflow-hidden rounded-xl bg-ivory-dark max-h-[65vh] flex items-center justify-center border border-dustyRose/20 shadow-inner">
          <img
            src={currentPhoto.url}
            alt={currentPhoto.caption}
            className="object-contain max-h-[65vh] max-w-full w-auto transition-transform duration-300"
          />
        </div>

        {/* Caption */}
        <div className="mt-4 text-center">
          <h3 className="font-serif text-lg sm:text-xl text-burgundy font-medium">
            {currentPhoto.caption}
          </h3>
          {currentPhoto.subcaption && (
            <p className="font-sans text-xs sm:text-sm text-warmDark/70 mt-1">
              {currentPhoto.subcaption}
            </p>
          )}
          <span className="inline-block mt-2 font-handwritten text-xs text-gold">
            {currentIndex + 1} of {photos.length}
          </span>
        </div>
      </div>
    </div>
  );
};
