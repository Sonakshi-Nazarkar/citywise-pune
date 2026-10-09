import { AreaSafety, WeatherTrafficInfo } from '../types';

export const PUNE_AREAS_SAFETY: AreaSafety[] = [
  {
    id: 'kothrud',
    areaName: 'Kothrud & Paud Road',
    safetyRating: 4.8,
    daySafetyTier: 'Safe',
    nightSafetyTier: 'Safe',
    lightingScore: 4.7,
    crowdPresence: 'High',
    policeChauki: 'Kothrud Police Station, Karve Road (020-2538 2383)',
    keyTips: [
      'Very family-friendly residential hub with active street life until 11 PM',
      'Wide pedestrian walkways near Vanaz and Ideal Colony Metro stations',
      'Well-lit commercial avenues with continuous auto-rickshaw availability'
    ]
  },
  {
    id: 'koregaon-park',
    areaName: 'Koregaon Park & Kalyani Nagar',
    safetyRating: 4.6,
    daySafetyTier: 'Safe',
    nightSafetyTier: 'Safe',
    lightingScore: 4.5,
    crowdPresence: 'High',
    policeChauki: 'Koregaon Park Police Chowky, South Main Rd (020-2612 1100)',
    keyTips: [
      'Active nightlife corridors with high footfall until late midnight',
      'Regular police patrol PCR vans parked near Lane 7 and North Main Road',
      'Avoid unlit interior alleyways after midnight; stick to well-trafficked main lanes'
    ]
  },
  {
    id: 'deccan-fc-road',
    areaName: 'Deccan Gymkhana & FC Road',
    safetyRating: 4.7,
    daySafetyTier: 'Safe',
    nightSafetyTier: 'Safe',
    lightingScore: 4.8,
    crowdPresence: 'High',
    policeChauki: 'Deccan Gymkhana Police Station (020-2567 1144)',
    keyTips: [
      'Student vibrant zone with dense foot traffic and open cafes till late',
      'Metro connectivity across Deccan & Sambhaji Park stations with active CCTV surveillance',
      'Safe for solo women travelers; women police beat marshals stationed at Goodluck Chowk'
    ]
  },
  {
    id: 'viman-nagar',
    areaName: 'Viman Nagar (Airport Zone)',
    safetyRating: 4.6,
    daySafetyTier: 'Safe',
    nightSafetyTier: 'Safe',
    lightingScore: 4.6,
    crowdPresence: 'High',
    policeChauki: 'Viman Nagar Police Chowky, Datta Mandir Chowk (020-2663 3333)',
    keyTips: [
      'Proximity to Pune Airport ensures round-the-clock taxi and police presence',
      'Well-illuminated streets around Symbiosis campus and Phoenix Mall',
      'Late-night transit options and 24-hour food stores readily accessible'
    ]
  },
  {
    id: 'hinjawadi',
    areaName: 'Hinjawadi IT Park (Phases 1, 2 & 3)',
    safetyRating: 4.2,
    daySafetyTier: 'Safe',
    nightSafetyTier: 'Moderate',
    lightingScore: 3.9,
    crowdPresence: 'Moderate',
    policeChauki: 'Hinjawadi Police Station, Phase 1 (020-2293 4233)',
    keyTips: [
      'Stick to main spine roads and IT company corridors at night',
      'Use company-designated transport or verified rideshare apps for late commutes',
      'Exercise caution at isolated link roads during non-shift hours after 10 PM'
    ]
  },
  {
    id: 'swargate-camp',
    areaName: 'Swargate & Pune Camp (MG Road)',
    safetyRating: 4.1,
    daySafetyTier: 'Safe',
    nightSafetyTier: 'Moderate',
    lightingScore: 4.2,
    crowdPresence: 'High',
    policeChauki: 'Swargate Police Station & Lashkar Police Station (020-2444 1488)',
    keyTips: [
      'Extremely busy transit interchange; guard luggage and pockets at bus terminals',
      'MG Road shopping street is bustling and well-lit with active military/civil police watch',
      'Late-night bus travelers should wait inside illuminated terminal concourses'
    ]
  }
];

export const EMERGENCY_CONTACTS = [
  { name: 'National Emergency Response', number: '112', type: 'All-in-One Helpline', available: '24x7' },
  { name: 'Pune City Police Control', number: '100 / 020-2612 6296', type: 'Police', available: '24x7' },
  { name: "Women's Distress Helpline", number: '1091', type: 'Women Safety', available: '24x7 Dedicated' },
  { name: 'Medical Emergency Ambulance', number: '108', type: 'Health / Trauma', available: '24x7 Free Service' },
  { name: 'Senior Citizen Support', number: '1090', type: 'Elder Care', available: '24x7' },
  { name: 'Pune Traffic Control Room', number: '020-2668 5000', type: 'Traffic / Towing', available: '6 AM – 11 PM' }
];

export const SIMULATED_WEATHER_TRAFFIC: WeatherTrafficInfo = {
  temperature: 28,
  condition: 'Partly Cloudy, Gentle Breeze',
  aqi: 88,
  aqiStatus: 'Moderate (Satisfactory for outdoor strolls)',
  trafficIndex: 'Moderate',
  hotspots: [
    {
      location: 'University Flyover & SB Road Junction',
      status: 'Heavy Congestion',
      advice: 'Expect +15m delay due to metro pier civil work. Alternate via Law College Rd.',
      updatedAt: '12 mins ago (Simulated)'
    },
    {
      location: 'Chandani Chowk Interchange',
      status: 'Moderate Flow',
      advice: 'Newly widened bypass flowing smoothly toward Kothrud & Mumbai Expressway.',
      updatedAt: '18 mins ago (Simulated)'
    },
    {
      location: 'Wakad Bridge / Hinjawadi Flyover',
      status: 'Heavy Congestion',
      advice: 'Evening IT shift bottleneck. Pune Metro feeder shuttles recommended.',
      updatedAt: '25 mins ago (Simulated)'
    },
    {
      location: 'Nagar Road BRT Corridor (Yerawada to Viman Nagar)',
      status: 'Moderate Flow',
      advice: 'Metro Line 2 running on schedule with 8-min headway.',
      updatedAt: '30 mins ago (Simulated)'
    }
  ]
};
