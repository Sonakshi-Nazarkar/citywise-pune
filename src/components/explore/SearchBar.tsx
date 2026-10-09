import React from 'react';
import { Search, SlidersHorizontal, X, Accessibility, Train } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  affordabilityFilter: number | null;
  setAffordabilityFilter: (val: number | null) => void;
  wheelchairOnly: boolean;
  setWheelchairOnly: (val: boolean) => void;
  metroOnly: boolean;
  setMetroOnly: (val: boolean) => void;
  sortBy: string;
  setSortBy: (val: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  affordabilityFilter,
  setAffordabilityFilter,
  wheelchairOnly,
  setWheelchairOnly,
  metroOnly,
  setMetroOnly,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
      <div className="flex flex-col md:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by landmark name, food, locality (e.g. Sinhagad, Deccan, Irani Chai)..."
            className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-indigo-500 focus:bg-white transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-700 focus:outline-hidden focus:border-indigo-500 cursor-pointer"
          >
            <option value="rating">Highest Rated</option>
            <option value="safety">Safest Spots</option>
            <option value="cleanliness">Cleanliness Rating</option>
            <option value="budget">Most Budget-Friendly</option>
          </select>
        </div>
      </div>

      {/* Filter Row: Affordability & Accessibility */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-100 text-xs">
        {/* Affordability Pills */}
        <div className="flex items-center gap-1.5">
          <span className="text-slate-500 font-medium">Price:</span>
          <button
            onClick={() => setAffordabilityFilter(null)}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              affordabilityFilter === null
                ? 'bg-indigo-100 text-indigo-700'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Any
          </button>
          <button
            onClick={() => setAffordabilityFilter(1)}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              affordabilityFilter === 1
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
            title="Free or Under ?100"
          >
            ? Free / Budget
          </button>
          <button
            onClick={() => setAffordabilityFilter(2)}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              affordabilityFilter === 2
                ? 'bg-indigo-100 text-indigo-700'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            ?? Moderate
          </button>
          <button
            onClick={() => setAffordabilityFilter(4)}
            className={`px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
              affordabilityFilter === 4
                ? 'bg-indigo-100 text-indigo-700'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            ???+ Premium
          </button>
        </div>

        {/* Accessibility Toggles */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setWheelchairOnly(!wheelchairOnly)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-semibold border transition-all cursor-pointer ${
              wheelchairOnly
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Accessibility className="w-3.5 h-3.5" />
            <span>Wheelchair Accessible</span>
          </button>

          <button
            onClick={() => setMetroOnly(!metroOnly)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-semibold border transition-all cursor-pointer ${
              metroOnly
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Train className="w-3.5 h-3.5" />
            <span>Near Metro Station</span>
          </button>
        </div>
      </div>
    </div>
  );
};
