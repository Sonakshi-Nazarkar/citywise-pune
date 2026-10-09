import { CitizenReport } from '../types';

export const INITIAL_CITIZEN_REPORTS: CitizenReport[] = [
  {
    id: 'REP-PN-1042',
    title: 'Deep pothole near Nal Stop Metro pillar #42',
    category: 'pothole',
    locality: 'Kothrud / Karve Road',
    description: 'A deep pothole has formed right before the bus bay near Nal Stop junction. Two-wheelers swerving dangerously during evening rush hour.',
    severity: 'urgent',
    timestamp: 'Today at 09:30 AM',
    status: 'under_review',
    upvotes: 24,
    userUpvoted: false,
    isUserGenerated: false
  },
  {
    id: 'REP-PN-1039',
    title: 'Flickering street lights along Koregaon Park Lane 5',
    category: 'lighting',
    locality: 'Koregaon Park',
    description: 'Three consecutive street sodium lamps are non-functional between Lane 5 and South Main road turn. Dark stretch for pedestrians after 8 PM.',
    severity: 'medium',
    timestamp: 'Yesterday at 08:15 PM',
    status: 'acknowledged',
    upvotes: 18,
    userUpvoted: false,
    isUserGenerated: false
  },
  {
    id: 'REP-PN-1035',
    title: 'Overflowing wet waste bin at FC Road Goodluck Chowk',
    category: 'cleanliness',
    locality: 'Deccan Gymkhana',
    description: 'Post-Sunday evening street food rush, PMC waste bin near corner bookstore has overflowed onto sidewalk. Needs urgent municipal clearing.',
    severity: 'medium',
    timestamp: '2 days ago',
    status: 'resolved',
    upvotes: 41,
    userUpvoted: false,
    isUserGenerated: false
  },
  {
    id: 'REP-PN-1028',
    title: 'Broken pedestrian footpath slab near Garware College Metro',
    category: 'transit',
    locality: 'Deccan / Karve Road',
    description: 'Footpath paver blocks dislodged, causing trip hazard for senior citizens heading toward the metro elevator entrance.',
    severity: 'low',
    timestamp: '3 days ago',
    status: 'resolved',
    upvotes: 15,
    userUpvoted: false,
    isUserGenerated: false
  }
];
