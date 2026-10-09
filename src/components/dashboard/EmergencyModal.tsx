import React from 'react';
import { X, Phone, Shield, AlertTriangle, HeartPulse, ShieldAlert, ExternalLink } from 'lucide-react';
import { EMERGENCY_CONTACTS } from '../../data/safetyData';
import { DemoBadge } from '../layout/DemoBadge';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div
        className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
      >
        {/* Modal Header */}
        <div className="bg-rose-600 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Pune Emergency Helplines</h3>
              <p className="text-xs text-rose-100">Official 24/7 Government & Emergency Numbers</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Emergency Speed Dial
            </span>
            <span className="text-xs text-rose-600 font-bold flex items-center gap-1">
              Tap any number to call directly
            </span>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {EMERGENCY_CONTACTS.map((item, idx) => (
              <a
                key={idx}
                href={`tel:${item.number.split('/')[0].trim()}`}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-rose-50/70 border border-slate-200 hover:border-rose-300 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-rose-700">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500">{item.type} � {item.available}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-white font-mono font-bold text-sm text-rose-700 border border-slate-200 shadow-2xs group-hover:bg-rose-600 group-hover:text-white group-hover:border-rose-600 transition-all">
                    {item.number}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Guidelines Box */}
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-amber-900">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              For Travelers & Solo Visitors in Pune:
            </div>
            <p className="text-amber-800 leading-relaxed text-[11px]">
              If you feel uncomfortable or lost, head to the nearest Pune Metro Station or major Chowk where Pune Police Marshals and CCTV surveillance are active.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between">
          <DemoBadge label="Verified Pune Numbers" tooltip="Official government numbers verified for Maharashtra & Pune district" />
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-200 hover:bg-slate-300 text-slate-700 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
