import React from 'react';
import { Compass, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { DemoBadge } from './DemoBadge';

interface FooterProps {
  onOpenSos: () => void;
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSos, setActiveTab }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">CityWise</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Navigating the vibrant chaos of city life. Curated spots, safety intelligence, and crowd-powered civic insights for Pune.
            </p>
            <div className="pt-2">
              <DemoBadge label="Hackathon Prototype • Simulated APIs" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-200 tracking-wider mb-3">Explore Pune</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('explore')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Heritage & Landmarks
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('explore')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Iconic Street Food & Cafes
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('explore')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Budget & Free Escapes
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('compare')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Compare Attractions Side-by-Side
                </button>
              </li>
            </ul>
          </div>

          {/* Civic & Safety */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-200 tracking-wider mb-3">Civic & Safety</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('safety')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Area Safety Index & Night Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('safety')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pune Metro & PMPML Transit Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('reports')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Report Road Pothole or Lighting
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSos}
                  className="text-rose-400 hover:text-rose-300 font-semibold transition-colors cursor-pointer flex items-center gap-1"
                >
                  Emergency Helplines (112, 1091) <ExternalLink className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Hackathon Meta & Ethics */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-200 tracking-wider mb-3">Ethical Transparency</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Built for the <em>“City Life: Exploring, Experiencing & Navigating the Chaos We Call Home”</em> hackathon challenge.
            </p>
            <div className="mt-3 p-3 rounded-lg bg-slate-800/80 border border-slate-700/80 text-[11px] text-slate-300">
              <span className="font-semibold text-amber-400 block mb-1">Notice on Data:</span>
              Civic reports, weather, and traffic feeds are demonstrative prototypes. In an emergency, always call official numbers directly.
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>for Pune citizens and travelers worldwide.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Community Verified Prototype
            </span>
            <span>•</span>
            <span className="text-slate-400">Ready for Vercel & GitHub</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
