import React, { useState, useEffect, useMemo } from 'react';
import { Place, CitizenReport, PlaceCategory } from './types';
import { PUNE_PLACES } from './data/punePlaces';
import { INITIAL_CITIZEN_REPORTS } from './data/initialReports';
import { PUNE_AREAS_SAFETY, SIMULATED_WEATHER_TRAFFIC } from './data/safetyData';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { DemoBadge } from './components/layout/DemoBadge';

import { HeroBanner } from './components/dashboard/HeroBanner';
import { CityPulse } from './components/dashboard/CityPulse';
import { QuickStats } from './components/dashboard/QuickStats';
import { EmergencyModal } from './components/dashboard/EmergencyModal';

import { CategoryFilter } from './components/explore/CategoryFilter';
import { SearchBar } from './components/explore/SearchBar';
import { PlaceCard } from './components/explore/PlaceCard';
import { PlaceDetailModal } from './components/explore/PlaceDetailModal';

import { ComparisonMatrix } from './components/compare/ComparisonMatrix';

import { SafetyZoneList } from './components/safety/SafetyZoneList';
import { TransitSafety } from './components/safety/TransitSafety';
import { LiveAlertsBanner } from './components/safety/LiveAlertsBanner';

import { CitizenReportForm } from './components/reports/CitizenReportForm';
import { CommunityFeed } from './components/reports/CommunityFeed';

import { ArrowRight, Sparkles, Compass, Shield, Layers, AlertTriangle } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [sosModalOpen, setSosModalOpen] = useState<boolean>(false);
  const [selectedDetailPlace, setSelectedDetailPlace] = useState<Place | null>(null);

  // Staged places for side-by-side comparison (up to 3)
  const [comparedPlaces, setComparedPlaces] = useState<Place[]>(() => {
    try {
      const saved = localStorage.getItem('citywise_compared_places');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    // Pre-populate with 2 iconic contrasting places for instant hackathon showcase
    return [PUNE_PLACES[0], PUNE_PLACES[3]]; // Shaniwar Wada & FC Road Hub
  });

  // Citizen Reports with LocalStorage persistence
  const [reports, setReports] = useState<CitizenReport[]>(() => {
    try {
      const saved = localStorage.getItem('citywise_citizen_reports');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    return INITIAL_CITIZEN_REPORTS;
  });

  // Save comparison places to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('citywise_compared_places', JSON.stringify(comparedPlaces));
    } catch (e) {
      console.error(e);
    }
  }, [comparedPlaces]);

  // Save reports to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('citywise_citizen_reports', JSON.stringify(reports));
    } catch (e) {
      console.error(e);
    }
  }, [reports]);

  // Explore tab filters
  const [selectedCategory, setSelectedCategory] = useState<PlaceCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [affordabilityFilter, setAffordabilityFilter] = useState<number | null>(null);
  const [wheelchairOnly, setWheelchairOnly] = useState<boolean>(false);
  const [metroOnly, setMetroOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>('rating');

  // Comparison toggle handler
  const handleToggleCompare = (place: Place) => {
    setComparedPlaces((prev) => {
      const exists = prev.some((p) => p.id === place.id);
      if (exists) {
        return prev.filter((p) => p.id !== place.id);
      } else {
        if (prev.length >= 3) {
          alert('You can compare up to 3 places simultaneously. Remove one to add this.');
          return prev;
        }
        return [...prev, place];
      }
    });
  };

  const handleAddComparePlace = (place: Place) => {
    if (comparedPlaces.length < 3 && !comparedPlaces.some((p) => p.id === place.id)) {
      setComparedPlaces((prev) => [...prev, place]);
    }
  };

  const handleRemoveComparePlace = (placeId: string) => {
    setComparedPlaces((prev) => prev.filter((p) => p.id !== placeId));
  };

  const handleClearCompareAll = () => {
    setComparedPlaces([]);
  };

  // Citizen report handlers
  const handleAddReport = (newReport: CitizenReport) => {
    setReports((prev) => [newReport, ...prev]);
  };

  const handleUpvoteReport = (reportId: string) => {
    setReports((prev) =>
      prev.map((r) => {
        if (r.id === reportId) {
          const isUpvoted = r.userUpvoted;
          return {
            ...r,
            upvotes: isUpvoted ? r.upvotes - 1 : r.upvotes + 1,
            userUpvoted: !isUpvoted
          };
        }
        return r;
      })
    );
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<PlaceCategory, number> = {
      all: PUNE_PLACES.length,
      attraction: 0,
      food: 0,
      historical: 0,
      hotel: 0,
      budget: 0
    };
    PUNE_PLACES.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });
    return counts;
  }, []);

  // Filtered & sorted places
  const filteredPlaces = useMemo(() => {
    return PUNE_PLACES.filter((place) => {
      // Category filter
      if (selectedCategory !== 'all' && place.category !== selectedCategory) {
        return false;
      }

      // Search query (name, locality, tagline, description)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = place.name.toLowerCase().includes(query);
        const matchesLoc = place.locality.toLowerCase().includes(query);
        const matchesTagline = place.tagline.toLowerCase().includes(query);
        const matchesCategory = place.category.toLowerCase().includes(query);
        if (!matchesName && !matchesLoc && !matchesTagline && !matchesCategory) {
          return false;
        }
      }

      // Affordability
      if (affordabilityFilter !== null && place.affordabilityScore !== affordabilityFilter) {
        return false;
      }

      // Wheelchair
      if (wheelchairOnly && !place.accessibility.wheelchair) {
        return false;
      }

      // Metro
      if (metroOnly && !place.accessibility.metroAccess) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.userRating - a.userRating;
      if (sortBy === 'safety') return b.safetyScore - a.safetyScore;
      if (sortBy === 'cleanliness') return b.cleanlinessRating - a.cleanlinessRating;
      if (sortBy === 'budget') return a.affordabilityScore - b.affordabilityScore;
      return 0;
    });
  }, [selectedCategory, searchQuery, affordabilityFilter, wheelchairOnly, metroOnly, sortBy]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-indigo-600 selection:text-white">
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        compareCount={comparedPlaces.length}
        onOpenSos={() => setSosModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-10">
        {/* ================= DASHBOARD TAB ================= */}
        {activeTab === 'dashboard' && (
          <div className="space-y-10 animate-in fade-in-50 duration-200">
            {/* Hero Banner with problem statement */}
            <HeroBanner
              onExplore={() => setActiveTab('explore')}
              onCompare={() => setActiveTab('compare')}
              onReport={() => setActiveTab('reports')}
            />

            {/* Quick Stats Grid */}
            <QuickStats
              placeCount={PUNE_PLACES.length}
              areaCount={PUNE_AREAS_SAFETY.length}
              reportCount={reports.length}
            />

            {/* Live City Pulse (Weather, AQI, Traffic, Safety) */}
            <CityPulse
              weatherTraffic={SIMULATED_WEATHER_TRAFFIC}
              onExploreClick={() => setActiveTab('explore')}
              onSafetyClick={() => setActiveTab('safety')}
            />

            {/* Featured Pune Spots Preview */}
            <section className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-slate-200">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                    Featured Pune Highlights
                  </h2>
                  <p className="text-xs text-slate-500">
                    Hand-picked heritage sights, culinary icons, and urban green escapes.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('explore')}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
                >
                  <span>Explore all {PUNE_PLACES.length} places</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PUNE_PLACES.slice(0, 3).map((place) => (
                  <PlaceCard
                    key={place.id}
                    place={place}
                    isCompared={comparedPlaces.some((p) => p.id === place.id)}
                    onToggleCompare={handleToggleCompare}
                    onViewDetails={(p) => setSelectedDetailPlace(p)}
                  />
                ))}
              </div>
            </section>

            {/* Active Civic Alert Bar */}
            <section className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-amber-950">
                    Encountered an obstacle or safety concern on Pune roads?
                  </h3>
                  <p className="text-xs text-amber-800 mt-0.5">
                    Help fellow commuters by submitting a geo-tagged issue report with photo proof.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('reports')}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shrink-0 cursor-pointer transition-colors shadow-xs"
              >
                File Citizen Report
              </button>
            </section>
          </div>
        )}

        {/* ================= EXPLORE TAB ================= */}
        {activeTab === 'explore' && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Explore Pune City
                </h2>
                <p className="text-xs text-slate-500">
                  Discover cultural landmarks, student food alleys, peaceful nature tekdis, and boutique stays.
                </p>
              </div>
              <DemoBadge label="Curated Pune Dataset" />
            </div>

            {/* Category Filter Pills */}
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              counts={categoryCounts}
            />

            {/* Search and Secondary Filters */}
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              affordabilityFilter={affordabilityFilter}
              setAffordabilityFilter={setAffordabilityFilter}
              wheelchairOnly={wheelchairOnly}
              setWheelchairOnly={setWheelchairOnly}
              metroOnly={metroOnly}
              setMetroOnly={setMetroOnly}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />

            {/* Active Filters Summary / Results Count */}
            <div className="flex items-center justify-between text-xs text-slate-500 px-1">
              <span>
                Showing <strong>{filteredPlaces.length}</strong> of {PUNE_PLACES.length} places
              </span>
              {comparedPlaces.length > 0 && (
                <button
                  onClick={() => setActiveTab('compare')}
                  className="text-indigo-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>View comparison ({comparedPlaces.length})</span>
                </button>
              )}
            </div>

            {/* Places Grid */}
            {filteredPlaces.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPlaces.map((place) => (
                  <PlaceCard
                    key={place.id}
                    place={place}
                    isCompared={comparedPlaces.some((p) => p.id === place.id)}
                    onToggleCompare={handleToggleCompare}
                    onViewDetails={(p) => setSelectedDetailPlace(p)}
                  />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center rounded-3xl bg-white border border-slate-200 space-y-3">
                <p className="text-base font-bold text-slate-700">No places match your criteria</p>
                <p className="text-xs text-slate-500">Try adjusting your search keywords, price filter, or accessibility toggles.</p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    setAffordabilityFilter(null);
                    setWheelchairOnly(false);
                    setMetroOnly(false);
                  }}
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-xs cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* ================= COMPARE TAB ================= */}
        {activeTab === 'compare' && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <ComparisonMatrix
              comparedPlaces={comparedPlaces}
              onRemovePlace={handleRemoveComparePlace}
              onAddPlace={handleAddComparePlace}
              onClearAll={handleClearCompareAll}
              onNavigateToExplore={() => setActiveTab('explore')}
            />
          </div>
        )}

        {/* ================= SAFETY & TRANSIT TAB ================= */}
        {activeTab === 'safety' && (
          <div className="space-y-10 animate-in fade-in-50 duration-200">
            {/* Emergency Hotline Banner */}
            <div className="p-5 rounded-3xl bg-rose-600 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg shadow-rose-600/20">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                  <h3 className="text-lg font-bold">24x7 Pune Emergency Assistance</h3>
                </div>
                <p className="text-xs text-rose-100">
                  Direct government helpline connections for Women�s Safety (1091), Police (112), and Medical Trauma (108).
                </p>
              </div>
              <button
                onClick={() => setSosModalOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-white text-rose-700 font-bold text-xs hover:bg-rose-50 transition-colors shadow-xs cursor-pointer self-start sm:self-auto"
              >
                Open Emergency Directory
              </button>
            </div>

            {/* Neighborhood Safety Index */}
            <SafetyZoneList />

            {/* Simulated Live Traffic Hotspots */}
            <LiveAlertsBanner />

            {/* Transit Navigator (Pune Metro & PMPML) */}
            <TransitSafety />
          </div>
        )}

        {/* ================= CITIZEN REPORTS TAB ================= */}
        {activeTab === 'reports' && (
          <div className="space-y-10 animate-in fade-in-50 duration-200">
            {/* Reporting Form */}
            <CitizenReportForm onSubmitReport={handleAddReport} />

            {/* Live Community Feed */}
            <CommunityFeed reports={reports} onUpvote={handleUpvoteReport} />
          </div>
        )}
      </main>

      {/* Place Details Modal */}
      <PlaceDetailModal
        place={selectedDetailPlace}
        onClose={() => setSelectedDetailPlace(null)}
        isCompared={selectedDetailPlace ? comparedPlaces.some((p) => p.id === selectedDetailPlace.id) : false}
        onToggleCompare={handleToggleCompare}
      />

      {/* Emergency Helpline Modal */}
      <EmergencyModal
        isOpen={sosModalOpen}
        onClose={() => setSosModalOpen(false)}
      />

      {/* Footer */}
      <Footer
        onOpenSos={() => setSosModalOpen(true)}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}

export default App;
