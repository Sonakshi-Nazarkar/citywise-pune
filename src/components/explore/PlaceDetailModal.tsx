import React from 'react';
import { Place } from '../../types';
import { X, Star, Shield, MapPin, Clock, Calendar, Check, Layers, Train, Accessibility, Car, AlertTriangle, Camera, Info } from 'lucide-react';
import { DemoBadge } from '../layout/DemoBadge';
import { SafeImage } from '../common/SafeImage';

interface PlaceDetailModalProps {
  place: Place | null;
  onClose: () => void;
  isCompared: boolean;
  onToggleCompare: (place: Place) => void;
}

export const PlaceDetailModal: React.FC<PlaceDetailModalProps> = ({
  place,
  onClose,
  isCompared,
  onToggleCompare
}) => {
  if (!place) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
      >
        {/* Image Header with SafeImage */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900">
          <SafeImage
            src={place.image}
            alt={place.name}
            placeName={place.name}
            category={place.category}
            attribution={place.imageAttribution}
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-xs transition-colors cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header titles on image */}
          <div className="absolute bottom-4 left-5 right-5 text-white z-10 pointer-events-none">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-600 text-white">
                {place.category}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-xs font-semibold">
                Cost: {place.costEstimate}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{place.name}</h2>
            <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-1.5 mt-1">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{place.address}</span>
            </p>
          </div>
        </div>

        {/* Real Location Photograph Attribution Ribbon */}
        {place.imageAttribution && (
          <div className="bg-slate-100 px-5 py-2 border-b border-slate-200/80 text-[11px] text-slate-600 flex items-center justify-between gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 truncate">
              <Camera className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span className="font-semibold text-slate-700">Photo Attribution:</span>
              <span className="truncate">
                {place.imageAttribution.isPlaceholder
                  ? 'Clean custom placeholder in lieu of unverified stock photos'
                  : `${place.imageAttribution.author} • ${place.imageAttribution.license}`}
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">
              {place.imageAttribution.source}
            </span>
          </div>
        )}

        {/* Content body */}
        <div className="p-6 space-y-6 max-h-[55vh] overflow-y-auto">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
            <div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase">User Rating</div>
              <div className="flex items-center justify-center gap-1 text-slate-900 font-extrabold text-base mt-0.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{place.userRating.toFixed(1)}</span>
                <span className="text-xs font-normal text-slate-400">({place.reviewCount.toLocaleString()})</span>
              </div>
            </div>
            <div className="border-x border-slate-200">
              <div className="text-[11px] font-semibold text-slate-500 uppercase">Cleanliness</div>
              <div className="text-emerald-700 font-extrabold text-base mt-0.5">
                {place.cleanlinessRating} <span className="text-xs text-slate-400">/ 5</span>
              </div>
            </div>
            <div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase">Safety Score</div>
              <div className="flex items-center justify-center gap-1 text-indigo-700 font-extrabold text-base mt-0.5">
                <Shield className="w-4 h-4 text-indigo-600" />
                <span>{place.safetyScore} <span className="text-xs text-slate-400">/ 5</span></span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">About this spot</h4>
            <p className="text-sm text-slate-700 leading-relaxed">{place.description}</p>
          </div>

          {/* Timings & Best visit season */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-800 block">Opening Timings</span>
                <span className="text-slate-600">{place.timings}</span>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-800 block">Best Time to Visit</span>
                <span className="text-slate-600">{place.bestTimeToVisit}</span>
              </div>
            </div>
          </div>

          {/* Accessibility & Transit Details */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Accessibility & Transit</h4>
            <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-xs space-y-2.5">
              <div className="flex flex-wrap items-center gap-4 text-slate-700 font-semibold">
                <span className={`flex items-center gap-1.5 ${place.accessibility.wheelchair ? 'text-emerald-700' : 'text-slate-400'}`}>
                  <Accessibility className="w-4 h-4" />
                  {place.accessibility.wheelchair ? 'Wheelchair Accessible Ramp' : 'Limited Wheelchair Access'}
                </span>
                <span className={`flex items-center gap-1.5 ${place.accessibility.metroAccess ? 'text-indigo-700' : 'text-slate-400'}`}>
                  <Train className="w-4 h-4" />
                  {place.accessibility.metroAccess ? 'Near Metro Network' : 'No Direct Metro Station'}
                </span>
                <span className={`flex items-center gap-1.5 ${place.accessibility.parkingAvailable ? 'text-slate-700' : 'text-amber-700'}`}>
                  <Car className="w-4 h-4" />
                  {place.accessibility.parkingAvailable ? 'Dedicated Parking Available' : 'Street Parking Only / Limited'}
                </span>
              </div>
              {place.accessibility.nearestMetro && (
                <p className="text-indigo-900 font-medium">
                  <strong>Nearest Metro:</strong> {place.accessibility.nearestMetro}
                </p>
              )}
              <p className="text-slate-600">
                <strong>Transit Note:</strong> {place.accessibility.publicTransitNote}
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Highlights</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {place.highlights.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Safety Tips */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-indigo-600" />
              Safety & Traveler Advisory
            </h4>
            <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs space-y-1.5">
              {place.safetyTips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-2 text-amber-950">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <DemoBadge label="Curated Pune Dataset" />
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleCompare(place)}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                isCompared
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white border border-slate-300 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200'
              }`}
            >
              {isCompared ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>In Comparison</span>
                </>
              ) : (
                <>
                  <Layers className="w-4 h-4" />
                  <span>Add to Compare</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-200 hover:bg-slate-300 text-slate-700 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
