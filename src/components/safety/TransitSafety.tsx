import React from 'react';
import { Train, Bus, Navigation, ShieldCheck, Clock, AlertCircle } from 'lucide-react';
import { DemoBadge } from '../layout/DemoBadge';

export const TransitSafety: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">Public Transit & Commute Navigator</h3>
          <p className="text-xs text-slate-500">
            Guide to Pune Metro, PMPML public buses, and late-night travel security.
          </p>
        </div>
        <DemoBadge label="Transit Guidelines" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pune Metro Card */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center gap-2.5 text-indigo-700">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
              <Train className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Maha Metro Pune</h4>
              <span className="text-[11px] text-slate-500">Purple & Aqua Corridors</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            The safest and most reliable way to traverse between Vanaz (Kothrud), Deccan, Civil Court Interchange, Yerawada, and Ramwadi (Viman Nagar).
          </p>
          <ul className="text-xs space-y-1.5 text-slate-700 pt-1">
            <li className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-500" />
              <span>Timings: 6:00 AM � 10:00 PM</span>
            </li>
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Dedicated women coach + CCTV guards</span>
            </li>
          </ul>
        </div>

        {/* PMPML Bus Card */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center gap-2.5 text-sky-700">
            <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center">
              <Bus className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">PMPML City Buses</h4>
              <span className="text-[11px] text-slate-500">Extensive 400+ Routes</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Covers routes to Sinhagad foothills, Khadakwasla Dam, Katraj, and Hinjawadi IT corridors. Economical daily bus passes available for ?50-?70.
          </p>
          <ul className="text-xs space-y-1.5 text-slate-700 pt-1">
            <li className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-500" />
              <span>Night buses connect Swargate & Rly Stn</span>
            </li>
            <li className="flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
              <span>Board at designated illuminated terminals</span>
            </li>
          </ul>
        </div>

        {/* Auto & Cab Advice Card */}
        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3">
          <div className="flex items-center gap-2.5 text-emerald-700">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
              <Navigation className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Auto-Rickshaws & Cabs</h4>
              <span className="text-[11px] text-slate-500">Meter Standards & Rideshare</span>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            By Pune RTO rule, autos run strictly by electronic meter. Prepaid rickshaw booths operate at Pune Railway Station and Swargate ST Stand.
          </p>
          <ul className="text-xs space-y-1.5 text-slate-700 pt-1">
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>App ride sharing (Uber/Ola) for late night</span>
            </li>
            <li className="flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
              <span>Night tariff applies between 12 AM � 5 AM (+25%)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
