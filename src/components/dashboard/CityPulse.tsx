import React from 'react';
import { CloudSun, Wind, Car, ShieldCheck, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import { WeatherTrafficInfo } from '../../types';
import { DemoBadge } from '../layout/DemoBadge';

interface CityPulseProps {
  weatherTraffic: WeatherTrafficInfo;
  onExploreClick: () => void;
  onSafetyClick: () => void;
}

export const CityPulse: React.FC<CityPulseProps> = ({
  weatherTraffic,
  onExploreClick,
  onSafetyClick
}) => {
  return (
    <section className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Pune Live Pulse</h2>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
          <p className="text-xs text-slate-500">Simulated real-time conditions across Pune metropolitan area</p>
        </div>
        <DemoBadge label="Simulated Live Feeds" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Weather Card */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-semibold tracking-wider uppercase">Weather</span>
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
              <CloudSun className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {weatherTraffic.temperature}�C
            </span>
            <span className="text-xs font-medium text-slate-500">Pune City</span>
          </div>
          <p className="text-xs font-medium text-slate-700 mt-1">{weatherTraffic.condition}</p>
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Forecast: Clear evening</span>
            <span className="text-sky-600 font-semibold">Mild</span>
          </div>
        </div>

        {/* AQI Card */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-semibold tracking-wider uppercase">Air Quality</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Wind className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-emerald-600 tracking-tight">
              {weatherTraffic.aqi}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              AQI
            </span>
          </div>
          <p className="text-xs font-medium text-slate-700 mt-1 line-clamp-1">{weatherTraffic.aqiStatus}</p>
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Outdoor safety: Good</span>
            <span className="text-emerald-600 font-semibold">Walk-friendly</span>
          </div>
        </div>

        {/* Traffic Index Card */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-semibold tracking-wider uppercase">City Mobility</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Car className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-amber-700 tracking-tight">
              {weatherTraffic.trafficIndex}
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            4 active congestion hotspots detected
          </p>
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <button
              onClick={onSafetyClick}
              className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-1 cursor-pointer"
            >
              View transit hotspots <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Safety Rating Overview Card */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50/60 border border-indigo-100 shadow-xs hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-semibold tracking-wider uppercase text-indigo-900">Safety Index</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow-xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-indigo-900 tracking-tight">
              4.5
            </span>
            <span className="text-xs font-medium text-slate-500">/ 5.0 (City Avg)</span>
          </div>
          <p className="text-xs font-medium text-indigo-800 mt-1">High daytime confidence & transit security</p>
          <div className="mt-3 pt-3 border-t border-indigo-100 flex items-center justify-between text-[11px]">
            <button
              onClick={onSafetyClick}
              className="text-indigo-700 hover:text-indigo-900 font-semibold flex items-center gap-1 cursor-pointer"
            >
              Explore area safety <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
