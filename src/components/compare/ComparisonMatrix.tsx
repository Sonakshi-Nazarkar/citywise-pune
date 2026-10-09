import React from 'react';
import { Place } from '../../types';
import { PUNE_PLACES } from '../../data/punePlaces';
import { X, Check, Star, Shield, Accessibility, Train, Car, Plus, Sparkles, Trophy, Trash2, ArrowRight } from 'lucide-react';
import { DemoBadge } from '../layout/DemoBadge';

interface ComparisonMatrixProps {
  comparedPlaces: Place[];
  onRemovePlace: (placeId: string) => void;
  onAddPlace: (place: Place) => void;
  onClearAll: () => void;
  onNavigateToExplore: () => void;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({
  comparedPlaces,
  onRemovePlace,
  onAddPlace,
  onClearAll,
  onNavigateToExplore
}) => {
  const availableToAdd = PUNE_PLACES.filter(
    (p) => !comparedPlaces.some((cp) => cp.id === p.id)
  );

  // Compute highest badges if 2+ places are compared
  const highestRatingId = comparedPlaces.length > 1
    ? [...comparedPlaces].sort((a, b) => b.userRating - a.userRating)[0]?.id
    : null;

  const highestCleanlinessId = comparedPlaces.length > 1
    ? [...comparedPlaces].sort((a, b) => b.cleanlinessRating - a.cleanlinessRating)[0]?.id
    : null;

  const bestBudgetId = comparedPlaces.length > 1
    ? [...comparedPlaces].sort((a, b) => a.affordabilityScore - b.affordabilityScore)[0]?.id
    : null;

  const highestSafetyId = comparedPlaces.length > 1
    ? [...comparedPlaces].sort((a, b) => b.safetyScore - a.safetyScore)[0]?.id
    : null;

  return (
    <div className="space-y-6">
      {/* Header and Quick Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Side-by-Side Place Comparison
            </h2>
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700">
              {comparedPlaces.length} / 3 Places
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Compare affordability, cleanliness, community ratings, accessibility, and safety scores.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {comparedPlaces.length > 0 && (
            <button
              onClick={onClearAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>
          )}

          {/* Quick Add Dropdown */}
          {comparedPlaces.length < 3 && availableToAdd.length > 0 && (
            <div className="relative">
              <select
                onChange={(e) => {
                  const found = availableToAdd.find((p) => p.id === e.target.value);
                  if (found) onAddPlace(found);
                  e.target.value = '';
                }}
                defaultValue=""
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-3 py-2 rounded-xl border-none focus:outline-hidden cursor-pointer shadow-xs transition-colors"
              >
                <option value="" disabled>
                  + Add Place to Compare ({availableToAdd.length} available)
                </option>
                {availableToAdd.map((p) => (
                  <option key={p.id} value={p.id} className="text-slate-900 bg-white">
                    {p.name} ({p.locality})
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* When Empty */}
      {comparedPlaces.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white border border-dashed border-slate-300 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 mx-auto flex items-center justify-center">
            <Trophy className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">No places selected for comparison yet</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1">
              Select 2 or 3 places from our curated Pune catalog to compare affordability, cleanliness, accessibility, and safety side by side.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={onNavigateToExplore}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Explore Places & Add to Compare</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                onAddPlace(PUNE_PLACES[0]); // Shaniwar Wada
                onAddPlace(PUNE_PLACES[3]); // FC Road Hub
                onAddPlace(PUNE_PLACES[1]); // Aga Khan Palace
              }}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Load Sample Comparison (Heritage vs Food)</span>
            </button>
          </div>
        </div>
      ) : (
        /* Comparison Table Grid */
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/90 border-b border-slate-200">
                  <th className="p-4 w-44 min-w-[170px] text-xs font-bold text-slate-400 uppercase tracking-wider align-top">
                    Attribute
                  </th>
                  {comparedPlaces.map((place) => (
                    <th key={place.id} className="p-4 min-w-[240px] align-top">
                      <div className="space-y-2">
                        <div className="relative h-28 rounded-xl overflow-hidden bg-slate-100">
                          <img
                            src={place.image}
                            alt={place.name}
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => onRemovePlace(place.id)}
                            className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-900/70 hover:bg-rose-600 text-white transition-colors cursor-pointer"
                            title="Remove from comparison"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                          <span className="absolute bottom-2 left-2 text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-900/80 text-white backdrop-blur-xs">
                            {place.category}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-900 text-base leading-snug">
                          {place.name}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium">{place.locality}</p>
                      </div>
                    </th>
                  ))}
                  {/* Fill empty slot if fewer than 3 */}
                  {comparedPlaces.length < 3 && (
                    <th className="p-4 min-w-[200px] border-l border-slate-100 text-center align-middle bg-slate-50/30">
                      <div className="p-6 text-center space-y-2">
                        <div className="w-10 h-10 rounded-full border-2 border-dashed border-slate-300 text-slate-400 mx-auto flex items-center justify-center">
                          <Plus className="w-5 h-5" />
                        </div>
                        <p className="text-xs text-slate-400 font-semibold">Slot Empty</p>
                        <button
                          onClick={onNavigateToExplore}
                          className="text-xs text-indigo-600 hover:text-indigo-800 font-bold cursor-pointer"
                        >
                          Pick another place
                        </button>
                      </div>
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {/* 1. Affordability */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 bg-slate-50/40">
                    <div>Affordability</div>
                    <span className="text-[10px] text-slate-400 font-normal">Cost scale & estimate</span>
                  </td>
                  {comparedPlaces.map((place) => (
                    <td key={place.id} className="p-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-extrabold text-indigo-700 text-sm">
                            {'?'.repeat(place.affordabilityScore)}
                          </span>
                          <span className="text-slate-400">({place.affordabilityScore}/5)</span>
                          {place.id === bestBudgetId && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                              ?? Most Affordable
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 font-medium">{place.costEstimate}</p>
                      </div>
                    </td>
                  ))}
                  {comparedPlaces.length < 3 && <td className="bg-slate-50/20" />}
                </tr>

                {/* 2. Cleanliness */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 bg-slate-50/40">
                    <div>Cleanliness Rating</div>
                    <span className="text-[10px] text-slate-400 font-normal">Hygiene & maintenance</span>
                  </td>
                  {comparedPlaces.map((place) => (
                    <td key={place.id} className="p-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-slate-900 text-sm">
                            {place.cleanlinessRating} / 5.0
                          </span>
                          {place.id === highestCleanlinessId && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                              ? Cleanest
                            </span>
                          )}
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-emerald-500 h-full rounded-full"
                            style={{ width: `${(place.cleanlinessRating / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    </td>
                  ))}
                  {comparedPlaces.length < 3 && <td className="bg-slate-50/20" />}
                </tr>

                {/* 3. User Satisfaction */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 bg-slate-50/40">
                    <div>User Satisfaction</div>
                    <span className="text-[10px] text-slate-400 font-normal">Rating & review volume</span>
                  </td>
                  {comparedPlaces.map((place) => (
                    <td key={place.id} className="p-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5 font-bold text-slate-900">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm">{place.userRating.toFixed(1)}</span>
                          <span className="text-slate-400 font-normal">({place.reviewCount.toLocaleString()})</span>
                          {place.id === highestRatingId && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                              ? Top Rated
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                  ))}
                  {comparedPlaces.length < 3 && <td className="bg-slate-50/20" />}
                </tr>

                {/* 4. Safety Score */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 bg-slate-50/40">
                    <div>Safety Index</div>
                    <span className="text-[10px] text-slate-400 font-normal">Day & Night security score</span>
                  </td>
                  {comparedPlaces.map((place) => (
                    <td key={place.id} className="p-4">
                      <div className="flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-emerald-600" />
                        <span className="font-extrabold text-slate-900 text-sm">{place.safetyScore} / 5</span>
                        {place.id === highestSafetyId && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">
                            ??? Safest
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                  {comparedPlaces.length < 3 && <td className="bg-slate-50/20" />}
                </tr>

                {/* 5. Accessibility */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 bg-slate-50/40">
                    <div>Accessibility</div>
                    <span className="text-[10px] text-slate-400 font-normal">Wheelchair, Metro & Parking</span>
                  </td>
                  {comparedPlaces.map((place) => (
                    <td key={place.id} className="p-4 space-y-1.5">
                      <div className="flex flex-col gap-1 text-[11px]">
                        <span className={`flex items-center gap-1.5 ${place.accessibility.wheelchair ? 'text-emerald-700 font-semibold' : 'text-slate-400'}`}>
                          <Accessibility className="w-3.5 h-3.5" />
                          {place.accessibility.wheelchair ? 'Wheelchair Accessible' : 'Not Wheelchair Friendly'}
                        </span>
                        <span className={`flex items-center gap-1.5 ${place.accessibility.metroAccess ? 'text-indigo-700 font-semibold' : 'text-slate-400'}`}>
                          <Train className="w-3.5 h-3.5" />
                          {place.accessibility.metroAccess ? (place.accessibility.nearestMetro ?? 'Metro nearby') : 'No Metro Connectivity'}
                        </span>
                        <span className={`flex items-center gap-1.5 ${place.accessibility.parkingAvailable ? 'text-slate-700' : 'text-amber-700'}`}>
                          <Car className="w-3.5 h-3.5" />
                          {place.accessibility.parkingAvailable ? 'Dedicated Parking' : 'No Dedicated Parking'}
                        </span>
                      </div>
                    </td>
                  ))}
                  {comparedPlaces.length < 3 && <td className="bg-slate-50/20" />}
                </tr>

                {/* 6. Timings & Visiting hours */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 bg-slate-50/40">
                    <div>Timings</div>
                    <span className="text-[10px] text-slate-400 font-normal">Opening hours</span>
                  </td>
                  {comparedPlaces.map((place) => (
                    <td key={place.id} className="p-4 text-slate-700 font-medium">
                      {place.timings}
                    </td>
                  ))}
                  {comparedPlaces.length < 3 && <td className="bg-slate-50/20" />}
                </tr>

                {/* 7. Key Highlights */}
                <tr className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 font-bold text-slate-700 bg-slate-50/40">
                    <div>Top Highlights</div>
                    <span className="text-[10px] text-slate-400 font-normal">Signature features</span>
                  </td>
                  {comparedPlaces.map((place) => (
                    <td key={place.id} className="p-4">
                      <ul className="space-y-1">
                        {place.highlights.slice(0, 3).map((hl, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-slate-600 text-[11px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                  {comparedPlaces.length < 3 && <td className="bg-slate-50/20" />}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <DemoBadge label="Side-by-Side Analytical Matrix" />
            <p className="text-xs text-slate-500">
              Comparing up to 3 candidate places across 5 key urban metrics.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
