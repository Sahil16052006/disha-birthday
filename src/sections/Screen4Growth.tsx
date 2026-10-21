import React from 'react';
import { Sparkles, Footprints, Compass, Sunrise, ArrowRight } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';

export const Screen4Growth: React.FC = () => {
  const content = birthdayConfig.growth;

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-gold" />;
      case 'Footprints':
        return <Footprints className="w-5 h-5 text-gold" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-gold" />;
      case 'Sunrise':
        return <Sunrise className="w-5 h-5 text-gold" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <section id="her-growth" className="relative py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush/60 border border-dustyRose/30 text-burgundy text-xs font-serif tracking-widest uppercase mb-3">
            <span>{content.badge}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-burgundy tracking-tight">
            {content.title}
          </h2>

          <p className="font-serif italic text-warmDark/70 text-sm sm:text-base mt-2 max-w-lg mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* 4 Progressive Cards Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {content.steps.map((step, idx) => (
            <div
              key={step.number}
              className="group relative bg-white/70 hover:bg-white backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-dustyRose/30 hover:border-gold/60 shadow-soft-rose hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Step Top Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display text-3xl font-bold text-gold/80 group-hover:text-gold transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-blush/50 group-hover:bg-burgundy/10 flex items-center justify-center transition-colors">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                <span className="font-sans text-[11px] font-semibold tracking-wider uppercase text-dustyRose block mb-1">
                  {step.tagline}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-burgundy mb-3">
                  {step.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-warmDark/80 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress Connector Indicator */}
              <div className="mt-6 pt-4 border-t border-dustyRose/15 flex items-center justify-between text-xs text-warmDark/60">
                <span className="font-serif italic">Step {idx + 1} of 4</span>
                <ArrowRight className="w-4 h-4 text-dustyRose group-hover:text-gold group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Closing Blessing */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-3xl bg-blush/30 border border-dustyRose/30 max-w-2xl mx-auto shadow-sm">
          <p className="font-serif italic text-base sm:text-lg text-burgundy leading-relaxed">
            “{content.closingWish}”
          </p>
        </div>
      </div>
    </section>
  );
};
