import React from 'react';
import { Compass, Layers, AlertTriangle, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

interface HeroBannerProps {
  onExplore: () => void;
  onCompare: () => void;
  onReport: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onExplore,
  onCompare,
  onReport
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-10 shadow-xl border border-slate-800">
      {/* Subtle background glow effect */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-indigo-200 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Hackathon Edition � City Life: Navigating the Chaos We Call Home</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
          Explore Smart. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-violet-200 to-amber-200">
            Travel Safe across Pune.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
          Discover historical landmarks, budget food secrets, and serene hill escapes in Pune. Compare affordability, cleanliness, ratings, and accessibility while staying informed with safety intelligence and community civic reports.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={onExplore}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>Discover Pune Spots</span>
          </button>

          <button
            onClick={onCompare}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm backdrop-blur-xs transition-all cursor-pointer"
          >
            <Layers className="w-4 h-4 text-violet-300" />
            <span>Compare Places</span>
          </button>

          <button
            onClick={onReport}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-200 border border-amber-500/30 font-semibold text-sm backdrop-blur-xs transition-all cursor-pointer"
          >
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>Report Road/Civic Issue</span>
          </button>
        </div>
      </div>
    </div>
  );
};
