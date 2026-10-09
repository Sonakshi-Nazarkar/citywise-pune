import React, { useState } from 'react';
import { PUNE_AREAS_SAFETY } from '../../data/safetyData';
import { ShieldCheck, ShieldAlert, Phone, Sun, Moon, Lightbulb, Users, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { DemoBadge } from '../layout/DemoBadge';

export const SafetyZoneList: React.FC = () => {
  const [expandedArea, setExpandedArea] = useState<string | null>('kothrud');

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case 'Safe':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Moderate':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-rose-100 text-rose-800 border-rose-200';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">Pune Neighborhood Safety Index</h3>
          <p className="text-xs text-slate-500">
            Civic lighting, nighttime crowd density, and local police station coordinates by area.
          </p>
        </div>
        <DemoBadge label="Area Safety Assessment" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PUNE_AREAS_SAFETY.map((area) => {
          const isExpanded = expandedArea === area.id;

          return (
            <div
              key={area.id}
              className={`rounded-2xl border transition-all ${
                isExpanded
                  ? 'bg-white border-indigo-200 shadow-md ring-1 ring-indigo-500/10'
                  : 'bg-white/80 border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <div
                onClick={() => setExpandedArea(isExpanded ? null : area.id)}
                className="p-4 cursor-pointer flex items-start justify-between gap-3 select-none"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-900 text-base">{area.areaName}</h4>
                    <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {area.safetyRating} / 5
                    </span>
                  </div>

                  {/* Day vs Night badges */}
                  <div className="flex items-center gap-2 text-xs pt-1">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[11px] font-semibold ${getTierBadge(area.daySafetyTier)}`}>
                      <Sun className="w-3 h-3 text-amber-500" />
                      Day: {area.daySafetyTier}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[11px] font-semibold ${getTierBadge(area.nightSafetyTier)}`}>
                      <Moon className="w-3 h-3 text-indigo-500" />
                      Night: {area.nightSafetyTier}
                    </span>
                  </div>
                </div>

                <button className="p-1 rounded-lg text-slate-400 hover:text-slate-600">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Expanded details */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-2 border-t border-slate-100 space-y-3 text-xs animate-in fade-in-50 duration-150">
                  {/* Street lighting & Crowd presence */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200/80">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Street Lighting</div>
                        <span className="font-bold">{area.lightingScore} / 5.0</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Users className="w-4 h-4 text-indigo-500 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">Footfall Density</div>
                        <span className="font-bold">{area.crowdPresence}</span>
                      </div>
                    </div>
                  </div>

                  {/* Police Station */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-indigo-50/70 border border-indigo-100 text-indigo-950">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0" />
                      <div>
                        <div className="text-[10px] font-semibold text-indigo-600 uppercase">Local Police Station</div>
                        <span className="font-medium text-slate-800">{area.policeChauki}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Tips */}
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Safety Recommendations
                    </div>
                    <ul className="space-y-1.5">
                      {area.keyTips.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 text-slate-600">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
