import React, { useState, useEffect } from 'react';
import { Music, Volume2, VolumeX, Play, Pause, ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { ambientPlayer } from '../utils/ambientAudio';

interface MusicPlayerProps {
  initialPlay?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ initialPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);

  const playlist = birthdayConfig.music.playlist;
  const currentTrack = playlist[currentTrackIndex] || playlist[0];

  useEffect(() => {
    if (initialPlay && !isPlaying) {
      handleTogglePlay();
    }
  }, [initialPlay]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      ambientPlayer.pause();
      setIsPlaying(false);
    } else {
      ambientPlayer.play();
      ambientPlayer.setVolume(isMuted ? 0 : volume);
      setIsPlaying(true);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMuted) {
      setIsMuted(false);
      ambientPlayer.setVolume(volume);
    } else {
      setIsMuted(true);
      ambientPlayer.setVolume(0);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
    }
    ambientPlayer.setVolume(newVol);
  };

  return (
    <aside 
      aria-label="Background music player" 
      className="fixed bottom-5 right-5 z-40 max-w-sm font-sans"
    >
      {/* Expanded Playlist Drawer */}
      {isExpanded && (
        <div className="mb-3 p-4 bg-ivory/95 backdrop-blur-md rounded-2xl shadow-soft-rose border border-dustyRose/30 text-warmDark animate-float text-xs md:text-sm">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-dustyRose/20">
            <span className="font-serif font-semibold text-burgundy flex items-center gap-1.5 text-sm">
              <Music className="w-4 h-4 text-burgundy" /> Playlist for Disha
            </span>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-warmDark/60 hover:text-burgundy transition-colors"
              aria-label="Close playlist"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-warmDark/70 mb-3 italic">
            {birthdayConfig.music.helperText}
          </p>

          <div className="space-y-2">
            {playlist.map((track, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between p-2 rounded-xl transition-all ${
                  idx === currentTrackIndex && isPlaying
                    ? 'bg-blush/60 border border-dustyRose/40'
                    : 'bg-white/60 hover:bg-blush/30'
                }`}
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <button
                    onClick={() => {
                      setCurrentTrackIndex(idx);
                      if (!isPlaying) handleTogglePlay();
                    }}
                    className="w-7 h-7 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center hover:bg-burgundy hover:text-ivory transition-colors"
                    aria-label={`Play ${track.title}`}
                  >
                    {idx === currentTrackIndex && isPlaying ? (
                      <Pause className="w-3.5 h-3.5" />
                    ) : (
                      <Play className="w-3.5 h-3.5 translate-x-0.5" />
                    )}
                  </button>
                  <div className="truncate">
                    <p className="font-medium text-warmDark text-xs truncate">{track.title}</p>
                    <p className="text-[10px] text-warmDark/60 truncate">{track.artist}</p>
                  </div>
                </div>

                {track.externalLink && (
                  <a
                    href={track.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-burgundy p-1 ml-2 transition-colors flex-shrink-0"
                    title="Open on music service"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Volume Control */}
          <div className="mt-3 pt-2 border-t border-dustyRose/20 flex items-center gap-2">
            <button
              onClick={handleToggleMute}
              className="text-warmDark/70 hover:text-burgundy"
              aria-label={isMuted ? "Unmute sound" : "Mute sound"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-3.5 h-3.5 text-dustyRose" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-burgundy" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-full h-1 bg-dustyRose/30 rounded-lg appearance-none cursor-pointer accent-burgundy"
              aria-label="Volume slider"
            />
          </div>
        </div>
      )}

      {/* Floating Pill Player */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-ivory/90 backdrop-blur-md rounded-full shadow-soft-rose border border-dustyRose/40 hover:border-burgundy/40 transition-all group">
        <button
          onClick={handleTogglePlay}
          className="w-8 h-8 rounded-full bg-burgundy text-ivory flex items-center justify-center hover:bg-burgundy-light transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-burgundy/30"
          aria-label={isPlaying ? 'Pause background melody' : 'Play gentle background melody'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4 translate-x-0.5" />
          )}
        </button>

        {/* Track Info & Visualizer */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="cursor-pointer select-none max-w-[130px] sm:max-w-[170px]"
          title="Click to view playlist"
        >
          <div className="flex items-center gap-1.5">
            <p className="text-xs font-medium text-warmDark truncate">
              {currentTrack.title}
            </p>
            {isPlaying && (
              <span className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 h-2 bg-burgundy rounded-full animate-bounce"></span>
                <span className="w-0.5 h-3 bg-gold rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-0.5 h-1.5 bg-dustyRose rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </span>
            )}
          </div>
          <p className="text-[10px] text-warmDark/60 truncate">
            {isPlaying ? 'Playing softly' : 'Click to play melody'}
          </p>
        </div>

        {/* Quick Mute Toggle */}
        <button
          onClick={handleToggleMute}
          className="text-warmDark/60 hover:text-burgundy transition-colors p-1"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="w-4 h-4 text-dustyRose" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>

        {/* Expand / Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-warmDark/50 hover:text-burgundy transition-colors p-0.5"
          aria-label={isExpanded ? 'Collapse playlist' : 'Expand playlist'}
        >
          {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>
      </div>
    </aside>
  );
};
