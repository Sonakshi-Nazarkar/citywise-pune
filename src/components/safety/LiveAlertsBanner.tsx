import React from 'react';
import { SIMULATED_WEATHER_TRAFFIC } from '../../data/safetyData';
import { AlertTriangle, Clock, MapPin, CheckCircle, Navigation } from 'lucide-react';
import { DemoBadge } from '../layout/DemoBadge';

export const LiveAlertsBanner: React.FC = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Heavy Congestion':
        return 'bg-rose-100 text-rose-800 border-rose-200';
      case 'Moderate Flow':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-sky-100 text-sky-800 border-sky-200';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">Active Traffic & Navigation Alerts</h3>
          <p className="text-xs text-slate-500">
            Real-time simulated traffic congestion, metro pier works, and bypass updates across Pune.
          </p>
        </div>
        <DemoBadge label="Simulated Traffic Sensor Feed" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {SIMULATED_WEATHER_TRAFFIC.hotspots.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 hover:border-slate-300 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
                <h4 className="font-bold text-slate-900 text-sm leading-snug">{item.location}</h4>
              </div>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${getStatusBadge(item.status)}`}>
                {item.status}
              </span>
            </div>

            <p className="text-xs text-slate-600 pl-6 leading-relaxed">
              {item.advice}
            </p>

            <div className="flex items-center justify-between pl-6 pt-1 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {item.updatedAt}
              </span>
              <span className="text-indigo-600 font-semibold flex items-center gap-1">
                <Navigation className="w-3 h-3" />
                Check map bypass
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
