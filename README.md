# 🌆 CityWise — Explore Smart, Travel Safe
### *"City Life: Exploring, Experiencing and Navigating the Chaos We Call Home."*

[![Vercel Deployment](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com)
[![React 19](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS%204-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📌 Problem Statement & Vision
Urban life in Indian metropolises is full of vibrance, cultural heritage, and legendary food, but it is also entangled in daily chaos: confusing transit, unpredictable street safety, traffic bottlenecks, and unverified reviews.

**CityWise** empowers tourists, college students, and daily citizens to explore smart and travel safe. Using **Pune, Maharashtra** as its inaugural launchpad, CityWise bridges curated exploration with pragmatic civic navigation.

---

## ✨ Key Features

### 1. 🧭 Pune Live Pulse Dashboard
- **Real-Time City Diagnostics:** Simulated live Pune weather (28°C), Air Quality Index (AQI 88 Moderate), and overall mobility status.
- **Emergency Speed-Dial:** One-tap direct dialers for **Pune Police (112)**, **Women Helpline (1091)**, **Ambulance (108)**, and Traffic Control.
- **Featured Highlights:** Quick glance at curated historical spots, street food hubs, and nature getaways.

### 2. 📍 Smart City Exploration Engine
- **Curated Pune Landmarks:** 12+ real-world destinations across Shaniwar Wada, Aga Khan Palace, Sinhagad Fort, FC Road, Cafe Goodluck, Koregaon Park, Vetal Tekdi, Phoenix Marketcity, and more.
- **Category Filter Tabs:** Tourist Attractions, Street Food & Cafes, Historical Monuments, Budget-Friendly Free Escapes, Hotels & Stays.
- **Granular Multi-Filters:** Instant search, affordability levels (₹ to ₹₹₹₹), wheelchair accessibility filter, and metro station proximity filter.
- **Deep-Dive Modals:** Detailed history, visiting hours, ticket prices, cleanliness score (out of 5), safety tips, and public transit directions.

### 3. ⚖️ Side-by-Side Place Comparison Matrix
- Compare up to **3 places concurrently** across critical decision metrics:
  - **Affordability:** Cost scale and typical expenditure per person (with *Most Affordable* winner badge).
  - **Cleanliness:** Hygiene and sanitation score out of 5.0 (with *Cleanest* winner badge).
  - **User Satisfaction:** Community star rating and review volume (with *Top Rated* winner badge).
  - **Safety Index:** Day and night security rating (with *Safest* winner badge).
  - **Accessibility Matrix:** Wheelchair ramps, direct Metro line connectivity, and parking availability.

### 4. 🛡️ Safety & Transit Center
- **Area-by-Area Safety Index:** Neighborhood profiles for **Kothrud**, **Koregaon Park**, **Deccan / FC Road**, **Viman Nagar**, **Hinjawadi IT Park**, and **Swargate / Camp**.
- **Day vs. Night Safety Tiers:** Clear color-coded confidence levels (Safe 🟢, Moderate 🟡, Exercise Caution 🔴).
- **Transit Guide:** Maha Metro lines guide (Purple & Aqua corridors), PMPML bus night transit advice, and auto-rickshaw meter regulations.
- **Simulated Traffic Hotspots:** Real-time congestion notices with recommended bypass routes (e.g. University flyover, Chandani Chowk).

### 5. 📢 Citizen Civic Reporting Portal
- **Crowd-Powered Issue Reporting:** Report road potholes, broken sodium streetlights, garbage overflow, or transit delays.
- **Local Persistence & Instant Publishing:** Submissions immediately generate a tracking ID (e.g., `#REP-PN-1042`), persist to browser `localStorage`, and update the live feed with status **Under Review**.
- **Photo Upload Proof:** Supports local image selection with instant visual thumbnail preview.
- **Community Upvoting:** Commuters can upvote critical issues to raise visibility.

---

## 🏷️ Demo & Mock Data Disclosure Policy
In strict compliance with ethical hackathon guidelines:
- **No False Real-Time Claims:** All traffic bottlenecks, air quality metrics, and weather conditions carry clear visual badges: `[Simulated Data]` or `[Demo / Simulated Data]`.
- **Pre-Seeded vs User Reports:** Sample reports are explicitly tagged `[Sample Report]`, while newly created reports are labeled `[User Submitted (Local)]`.
- **Emergency Helplines:** Phone numbers for Maharashtra Police, Women's Helpline, and Ambulance services are 100% verified official government numbers.

---

## 🛠️ Technology Stack & Architecture

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **React 18 / 19 + TypeScript** | Type safety, clean state separation, and optimal rendering speed |
| **Build Tool** | **Vite** | Lightning-fast development HMR and ~800ms production builds |
| **Styling** | **Tailwind CSS v4** | Rapid utility design, glassmorphic card effects, responsive mobile layout |
| **Iconography** | **Lucide React** | Consistent, modern visual indicators |
| **State & Store** | **React State + LocalStorage** | Zero-latency instant offline tolerance; no DB rate limits during demos |
| **Deployment** | **Vercel** | Single-click zero-config deployment |

---

## 📂 Project Directory Structure

```
citywise/
├── public/
│   ├── favicon.svg             # Application brand icon
├── src/
│   ├── components/
│   │   ├── compare/
│   │   │   └── ComparisonMatrix.tsx    # Side-by-side analytical table
│   │   ├── dashboard/
│   │   │   ├── CityPulse.tsx           # Weather, AQI, Traffic, Safety cards
│   │   │   ├── EmergencyModal.tsx      # Emergency speed-dial modal
│   │   │   ├── HeroBanner.tsx          # Problem statement header & quick CTAs
│   │   │   └── QuickStats.tsx          # Urban statistics counter
│   │   ├── explore/
│   │   │   ├── CategoryFilter.tsx      # Category pills
│   │   │   ├── PlaceCard.tsx           # Card with compare toggle & ratings
│   │   │   ├── PlaceDetailModal.tsx    # Full place deep dive
│   │   │   └── SearchBar.tsx           # Search, price & accessibility filters
│   │   ├── layout/
│   │   │   ├── DemoBadge.tsx           # Reusable simulated data badge
│   │   │   ├── Footer.tsx              # Credits, ethics statement & links
│   │   │   └── Navbar.tsx              # City selector, navigation & SOS dial
│   │   ├── reports/
│   │   │   ├── CitizenReportForm.tsx   # Issue reporting with photo preview
│   │   │   └── CommunityFeed.tsx       # Upvote feed with status badges
│   │   └── safety/
│   │       ├── LiveAlertsBanner.tsx    # Simulated traffic hotspot notices
│   │       ├── SafetyZoneList.tsx      # Neighborhood safety tiers & police contacts
│   │       └── TransitSafety.tsx       # Pune Metro & PMPML bus guide
│   ├── data/
│   │   ├── initialReports.ts           # Pre-seeded community reports
│   │   ├── punePlaces.ts               # 12 curated Pune spots with rich metadata
│   │   └── safetyData.ts               # Safety indices, traffic & helplines
│   ├── types/
│   │   └── index.ts                    # TypeScript models (Place, Report, Safety)
│   ├── App.tsx                         # Root app coordinator & tab navigator
│   ├── index.css                       # Tailwind CSS base styles
│   └── main.tsx                        # DOM mount
├── index.html                          # HTML5 shell & Google fonts
├── package.json                        # Dependencies and scripts
├── tailwind.config.js                  # Tailwind configuration
├── tsconfig.json                       # TypeScript compiler settings
└── vite.config.ts                      # Vite & Tailwind build plugins
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation
```bash
# 1. Clone repository
git clone https://github.com/your-username/citywise-pune.git
cd citywise-pune

# 2. Install dependencies
npm install

# 3. Launch local development server
npm run dev
```
Visit **`http://localhost:5173`** in your browser.

### Production Build
```bash
npm run build
```
Creates an optimized, minified production build in the `dist/` folder.

---

## 🌐 Deploying to Vercel

CityWise is ready for **1-click deployment on Vercel**:

1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Vercel automatically detects the **Vite** preset:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Your app will be live globally in under 60 seconds!

---

## 🧪 Verification & Testing Completed
- [x] **Production Build:** `npm run build` passed with zero TypeScript errors.
- [x] **Exploration & Filters:** Verified category filtering, text search, price filters, wheelchair and metro toggles.
- [x] **Comparison Matrix:** Verified comparison matrix with winner badges for Budget, Cleanliness, Rating, and Safety.
- [x] **Citizen Reporting:** Verified form validation, real-time image preview, local storage persistence, and community upvoting.
- [x] **Responsive Design:** Tested on mobile, tablet, and desktop breakpoints.
- [x] **Ethical Labeling:** Verified clear `[Demo / Simulated Data]` badges across all simulated metrics.