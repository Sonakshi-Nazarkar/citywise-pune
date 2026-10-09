import React from 'react';
import { Landmark, Shield, Users, AlertCircle } from 'lucide-react';

interface QuickStatsProps {
  placeCount: number;
  areaCount: number;
  reportCount: number;
}

export const QuickStats: React.FC<QuickStatsProps> = ({
  placeCount,
  areaCount,
  reportCount
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
      <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-2 text-indigo-600 mb-1">
          <Landmark className="w-4 h-4" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Curated Spots</span>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{placeCount}</div>
        <p className="text-[11px] text-slate-500 mt-0.5">Heritage, food, nature & stays</p>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-2 text-violet-600 mb-1">
          <Shield className="w-4 h-4" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Localities</span>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{areaCount}</div>
        <p className="text-[11px] text-slate-500 mt-0.5">Safety & transit metrics</p>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-2 text-amber-600 mb-1">
          <AlertCircle className="w-4 h-4" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Community Reports</span>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{reportCount}</div>
        <p className="text-[11px] text-slate-500 mt-0.5">Live civic issue tracking</p>
      </div>

      <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
        <div className="flex items-center gap-2 text-emerald-600 mb-1">
          <Users className="w-4 h-4" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Verified Helplines</span>
        </div>
        <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">24 / 7</div>
        <p className="text-[11px] text-slate-500 mt-0.5">Police, ambulance & SOS</p>
      </div>
    </div>
  );
};
