import React from 'react';
import { Place } from '../../types';
import { Star, MapPin, Shield, Sparkles, Check, Plus, Layers, Train, Accessibility } from 'lucide-react';

interface PlaceCardProps {
  place: Place;
  isCompared: boolean;
  onToggleCompare: (place: Place) => void;
  onViewDetails: (place: Place) => void;
}

export const PlaceCard: React.FC<PlaceCardProps> = ({
  place,
  isCompared,
  onToggleCompare,
  onViewDetails,
}) => {
  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'historical':
        return 'bg-amber-500/90 text-white';
      case 'food':
        return 'bg-rose-500/90 text-white';
      case 'budget':
        return 'bg-emerald-600/90 text-white';
      case 'hotel':
        return 'bg-blue-600/90 text-white';
      default:
        return 'bg-indigo-600/90 text-white';
    }
  };

  const getAffordabilitySigns = (score: number) => {
    return '?'.repeat(Math.max(1, score));
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col group">
      {/* Image Banner */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span
            className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs backdrop-blur-xs ${getCategoryBadgeClass(
              place.category
            )}`}
          >
            {place.category}
          </span>
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-900/80 text-white backdrop-blur-xs border border-white/20">
            {getAffordabilitySigns(place.affordabilityScore)}
          </span>
        </div>

        {/* Bottom image overlay metadata */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-1 font-semibold text-amber-300">
            <Star className="w-3.5 h-3.5 fill-amber-300 inline" />
            <span>{place.userRating.toFixed(1)}</span>
            <span className="text-white/70 text-[11px]">({(place.reviewCount / 1000).toFixed(1)}k)</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] bg-slate-900/70 px-2 py-0.5 rounded-full backdrop-blur-xs font-medium">
            <Shield className="w-3 h-3 text-emerald-400" />
            <span>Safety {place.safetyScore}/5</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors line-clamp-1">
              {place.name}
            </h3>
          </div>

          <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mt-0.5">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{place.locality}</span>
          </p>

          <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {place.tagline}
          </p>
        </div>

        {/* Metric Badges: Cleanliness & Accessibility */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between text-[11px] text-slate-600">
            <span className="font-medium">Cleanliness:</span>
            <div className="flex items-center gap-1.5">
              <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: `${(place.cleanlinessRating / 5) * 100}%` }}
                />
              </div>
              <span className="font-bold text-slate-800">{place.cleanlinessRating} / 5</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span className="font-medium">Est. Cost:</span>
            <span className="font-bold text-slate-700 truncate max-w-[150px]">{place.costEstimate}</span>
          </div>

          {/* Transit accessibility icons */}
          <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500">
            {place.accessibility.metroAccess && (
              <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 font-medium">
                <Train className="w-3 h-3" />
                <span>Metro</span>
              </span>
            )}
            {place.accessibility.wheelchair && (
              <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-medium">
                <Accessibility className="w-3 h-3" />
                <span>Accessible</span>
              </span>
            )}
          </div>
        </div>

        {/* Actions Row */}
        <div className="pt-2 flex items-center gap-2">
          <button
            onClick={() => onViewDetails(place)}
            className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors cursor-pointer text-center"
          >
            View Details
          </button>

          <button
            onClick={() => onToggleCompare(place)}
            className={`py-2 px-3 rounded-xl font-semibold text-xs flex items-center gap-1 transition-all cursor-pointer ${
              isCompared
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200'
            }`}
            title={isCompared ? 'Remove from comparison' : 'Add to compare'}
          >
            {isCompared ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Layers className="w-3.5 h-3.5" />
                <span>Compare</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
