import React, { useState, useEffect } from 'react';
import { Clock, Sparkles, Heart } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { calculateCountdown, CountdownState, BIRTHDAY_START_UTC, BIRTHDAY_END_UTC } from '../utils/countdownUtils';

export const Screen8Countdown: React.FC = () => {
  const content = birthdayConfig.countdown;
  const [countdown, setCountdown] = useState<CountdownState>(calculateCountdown());
  const [simulationMode, setSimulationMode] = useState<'live' | 'before' | 'during' | 'after'>('live');

  useEffect(() => {
    const update = () => {
      let simulatedMs: number | undefined;
      if (simulationMode === 'before') {
        // 2 hours before birthday
        simulatedMs = BIRTHDAY_START_UTC - (2 * 3600 * 1000 + 15 * 60 * 1000);
      } else if (simulationMode === 'during') {
        // Noon on birthday
        simulatedMs = BIRTHDAY_START_UTC + 12 * 3600 * 1000;
      } else if (simulationMode === 'after') {
        // Day after
        simulatedMs = BIRTHDAY_END_UTC + 3600 * 1000;
      }

      setCountdown(calculateCountdown(simulatedMs));
    };

    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, [simulationMode]);

  return (
    <section id="birthday-countdown" className="relative py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush/60 border border-dustyRose/30 text-burgundy text-xs font-serif tracking-widest uppercase mb-3">
          <Clock className="w-3.5 h-3.5 text-gold" />
          <span>{content.badge}</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-3xl sm:text-5xl font-semibold text-burgundy tracking-tight">
          {content.heading}
        </h2>

        <p className="font-serif italic text-warmDark/70 text-sm sm:text-base mt-2 mb-10">
          {content.subtitle}
        </p>

        {/* STATE 1: BEFORE BIRTHDAY -> Live Tiles */}
        {countdown.status === 'before' && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto">
              {/* Days */}
              <div className="bg-white/80 p-5 rounded-2xl shadow-soft-rose border border-dustyRose/30 flex flex-col items-center">
                <span className="font-display text-3xl sm:text-5xl font-bold text-burgundy">
                  {countdown.days}
                </span>
                <span className="font-sans text-[11px] tracking-wider uppercase text-warmDark/60 mt-1">
                  Days
                </span>
              </div>

              {/* Hours */}
              <div className="bg-white/80 p-5 rounded-2xl shadow-soft-rose border border-dustyRose/30 flex flex-col items-center">
                <span className="font-display text-3xl sm:text-5xl font-bold text-burgundy">
                  {String(countdown.hours).padStart(2, '0')}
                </span>
                <span className="font-sans text-[11px] tracking-wider uppercase text-warmDark/60 mt-1">
                  Hours
                </span>
              </div>

              {/* Minutes */}
              <div className="bg-white/80 p-5 rounded-2xl shadow-soft-rose border border-dustyRose/30 flex flex-col items-center">
                <span className="font-display text-3xl sm:text-5xl font-bold text-burgundy">
                  {String(countdown.minutes).padStart(2, '0')}
                </span>
                <span className="font-sans text-[11px] tracking-wider uppercase text-warmDark/60 mt-1">
                  Minutes
                </span>
              </div>

              {/* Seconds */}
              <div className="bg-white/80 p-5 rounded-2xl shadow-soft-rose border border-gold/40 flex flex-col items-center">
                <span className="font-display text-3xl sm:text-5xl font-bold text-gold">
                  {String(countdown.seconds).padStart(2, '0')}
                </span>
                <span className="font-sans text-[11px] tracking-wider uppercase text-warmDark/60 mt-1">
                  Seconds
                </span>
              </div>
            </div>

            <p className="font-serif italic text-xs sm:text-sm text-warmDark/70">
              Counting down to midnight in India (Asia/Kolkata timezone)
            </p>
          </div>
        )}

        {/* STATE 2: DURING BIRTHDAY -> Celebration Banner */}
        {countdown.status === 'during' && (
          <div className="p-8 sm:p-10 rounded-3xl bg-blush/60 border border-gold/50 shadow-gold-glow max-w-xl mx-auto text-center animate-glow">
            <div className="w-14 h-14 rounded-full bg-burgundy text-gold flex items-center justify-center mx-auto mb-4 shadow-md">
              <Sparkles className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-bold text-burgundy mb-2">
              {content.duringBirthdayTitle}
            </h3>
            <p className="font-serif italic text-base sm:text-lg text-warmDark/90 leading-relaxed">
              {content.duringBirthdayMessage}
            </p>
          </div>
        )}

        {/* STATE 3: AFTER BIRTHDAY -> Warm Continuation */}
        {countdown.status === 'after' && (
          <div className="p-8 sm:p-10 rounded-3xl bg-white/80 border border-dustyRose/40 shadow-soft-rose max-w-xl mx-auto text-center">
            <div className="w-12 h-12 rounded-full bg-blush/60 text-burgundy flex items-center justify-center mx-auto mb-3">
              <Heart className="w-6 h-6 fill-burgundy/20" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-burgundy mb-2">
              {content.afterBirthdayTitle}
            </h3>
            <p className="font-serif italic text-base text-warmDark/80 leading-relaxed">
              {content.afterBirthdayMessage}
            </p>
          </div>
        )}

        {/* QA Timezone & Simulation Selector for testing all 3 states */}
        <div className="mt-10 pt-4 border-t border-dustyRose/15 inline-flex items-center gap-2 text-[11px] text-warmDark/50">
          <span>Date Preview:</span>
          <div className="inline-flex rounded-lg bg-white/70 p-0.5 border border-dustyRose/20">
            {(['live', 'before', 'during', 'after'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setSimulationMode(mode)}
                className={`px-2 py-0.5 rounded capitalize transition-colors ${
                  simulationMode === mode
                    ? 'bg-burgundy text-ivory font-medium'
                    : 'hover:text-burgundy'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
