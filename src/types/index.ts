export type PlaceCategory = 'all' | 'attraction' | 'food' | 'historical' | 'hotel' | 'budget';

export interface AccessibilityInfo {
  wheelchair: boolean;
  metroAccess: boolean;
  nearestMetro?: string;
  parkingAvailable: boolean;
  publicTransitNote: string;
}

export interface Place {
  id: string;
  name: string;
  category: 'attraction' | 'food' | 'historical' | 'hotel' | 'budget';
  tagline: string;
  description: string;
  locality: string;
  address: string;
  image: string;
  affordabilityScore: number; // 1 (budget/free) to 5 (luxury)
  costEstimate: string;
  cleanlinessRating: number; // 1 to 5
  userRating: number; // 1 to 5
  reviewCount: number;
  safetyScore: number; // 1 to 5
  accessibility: AccessibilityInfo;
  timings: string;
  bestTimeToVisit: string;
  highlights: string[];
  safetyTips: string[];
}

export type ReportCategory = 'pothole' | 'lighting' | 'cleanliness' | 'safety' | 'transit' | 'other';
export type ReportSeverity = 'low' | 'medium' | 'urgent';
export type ReportStatus = 'under_review' | 'acknowledged' | 'resolved';

export interface CitizenReport {
  id: string;
  title: string;
  category: ReportCategory;
  locality: string;
  description: string;
  severity: ReportSeverity;
  timestamp: string;
  status: ReportStatus;
  upvotes: number;
  userUpvoted?: boolean;
  imageUrl?: string;
  isUserGenerated?: boolean;
}

export interface AreaSafety {
  id: string;
  areaName: string;
  safetyRating: number; // 1 to 5
  daySafetyTier: 'Safe' | 'Moderate' | 'Exercise Caution';
  nightSafetyTier: 'Safe' | 'Moderate' | 'Exercise Caution';
  lightingScore: number; // 1 to 5
  crowdPresence: 'High' | 'Moderate' | 'Low';
  policeChauki: string;
  keyTips: string[];
}

export interface LiveTrafficHotspot {
  location: string;
  status: 'Heavy Congestion' | 'Moderate Flow' | 'Waterlogging' | 'Road Repair';
  advice: string;
  updatedAt: string;
}

export interface WeatherTrafficInfo {
  temperature: number;
  condition: string;
  aqi: number;
  aqiStatus: string;
  trafficIndex: 'Normal' | 'Moderate' | 'Heavy Congestion';
  hotspots: LiveTrafficHotspot[];
}
