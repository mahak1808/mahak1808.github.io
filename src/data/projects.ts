export type ProjectTier = "mobile" | "web";

export type CaseStudySection = {
  label: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  tier: ProjectTier;
  tone: "primary" | "secondary" | "tertiary";
  /** True app screenshots aren't available yet - renders a placeholder inside PhoneMockup. */
  hasScreenshots: boolean;
  screens?: { label: string; icon: string; src?: string }[];
  caseStudy?: CaseStudySection[];
  /** Live store listings - omit when the app isn't public yet. */
  appStoreUrl?: string;
  playStoreUrl?: string;
};

export const MOBILE_PROJECTS: Project[] = [
  {
    slug: "farewell",
    name: "Farewell",
    tagline: "Real-time logistics, built for the road.",
    description:
      "Leading the development of a production logistics application used to plan, dispatch and track deliveries in real time.",
    tags: [
      "React Native",
      "Maps",
      "Live Tracking",
      "Firebase",
      "FCM",
      "REST APIs",
      "Barcode Scanning",
    ],
    tier: "mobile",
    tone: "primary",
    hasScreenshots: false,
    screens: [
      { label: "Live Tracking", icon: "near_me" },
      { label: "Route Planning", icon: "route" },
      { label: "Barcode Scan", icon: "qr_code_scanner" },
    ],
    caseStudy: [
      {
        label: "Problem",
        body: "Dispatch teams needed real-time visibility into driver location and delivery status across a growing logistics operation, without relying on manual check-ins or spreadsheets.",
      },
      {
        label: "Role",
        body: "Frontend Lead - owned the React Native application end-to-end, from architecture decisions to feature delivery and cross-platform release.",
      },
      {
        label: "Tech",
        body: "React Native, Google Maps API for live location and route rendering, Firebase for real-time data sync, FCM for push notifications, and REST APIs for order and driver data.",
      },
      {
        label: "Process",
        body: "Built live-location polling with battery-aware update intervals, integrated barcode scanning for proof-of-delivery, and layered in push notifications for status changes across iOS and Android.",
      },
      {
        label: "Outcome",
        body: "Shipped to production on both iOS and Android, giving dispatch teams real-time visibility and cutting down manual coordination overhead.",
      },
    ],
  },
  {
    slug: "avendy",
    name: "Avendy",
    tagline: "Real-world services, connected in one place.",
    description:
      "A cross-platform marketplace connecting clients with event-service vendors - built around discovery, booking, real-time communication and vendor engagement.",
    tags: [
      "React Native",
      "Firebase",
      "Real-time Chat",
      "Push Notifications",
      "REST APIs",
      "Booking Flow",
      "Marketplace",
    ],
    tier: "mobile",
    tone: "secondary",
    hasScreenshots: true,
    screens: [
      {
        label: "Vendor Discovery",
        icon: "storefront",
        src: "/images/avendy/vendor-discovery.webp",
      },
      {
        label: "Service Booking",
        icon: "event_available",
        src: "/images/avendy/vendor-profile.webp",
      },
      {
        label: "Real-time Chat",
        icon: "forum",
        src: "/images/avendy/messaging.webp",
      },
      {
        label: "Vendor Articles",
        icon: "article",
        src: "/images/avendy/articles.webp",
      },
      {
        label: "Gig Bidding",
        icon: "gavel",
        src: "/images/avendy/bidding.webp",
      },
    ],
    caseStudy: [
      {
        label: "Problem",
        body: "Clients needed a simpler way to discover, compare and book trusted vendors for their events, while vendors needed a centralized platform to showcase their services and connect with potential customers.",
      },
      {
        label: "Role",
        body: "Frontend Developer - built and refined the React Native application across core user and vendor flows, translating designs into responsive cross-platform experiences and integrating backend services.",
      },
      {
        label: "Tech",
        body: "React Native, Firebase, REST APIs, real-time chat and push notifications - powering marketplace flows, messaging, notification handling, service interactions and API-driven data across the application.",
      },
      {
        label: "Process",
        body: "Implemented responsive UI from Figma, integrated APIs across booking and service flows, built real-time Firebase chat, configured push notifications, and handled cross-platform UI behavior and bug fixes across iOS and Android.",
      },
      {
        label: "Outcome",
        body: "Delivered a production-ready cross-platform marketplace experience that brings vendor discovery, service booking, messaging, reviews and customer engagement into one mobile platform.",
      },
    ],
    appStoreUrl: "https://apps.apple.com/us/app/avendy-app/id6471898675",
    playStoreUrl:
      "https://play.google.com/store/apps/details?hl=en_US&id=com.avendy",
  },
  {
    slug: "next-build",
    name: "Next Build",
    tagline: "The next mobile app, already taking shape.",
    description:
      "Future mobile work lands here first - new React Native builds naturally take priority in this space.",
    tags: ["React Native", "In Progress"],
    tier: "mobile",
    tone: "tertiary",
    hasScreenshots: false,
    screens: [{ label: "Coming Soon", icon: "hourglass_top" }],
  },
];

export const WEB_PROJECTS: Project[] = [
  {
    slug: "bms",
    name: "Bid Management System",
    tagline: "Streamlined bidding workflows for internal teams.",
    description:
      "A web dashboard for managing and tracking bids end-to-end, replacing manual, spreadsheet-driven processes.",
    tags: ["React", "TypeScript", "Dashboards"],
    tier: "web",
    tone: "primary",
    hasScreenshots: false,
  },
  {
    slug: "hrms",
    name: "HRMS Dashboard",
    tagline: "Human resources, centralized.",
    description:
      "An internal HR management dashboard covering employee records, attendance and workflow approvals.",
    tags: ["React", "Next.js", "Dashboards"],
    tier: "web",
    tone: "tertiary",
    hasScreenshots: false,
  },
  {
    slug: "ebitator",
    name: "Ebitator",
    tagline: "Tooling for everyday efficiency.",
    description:
      "A focused web tool built to remove friction from a repetitive internal process.",
    tags: ["React", "Node.js"],
    tier: "web",
    tone: "secondary",
    hasScreenshots: false,
  },
  {
    slug: "ghostqa",
    name: "GhostQA",
    tagline: "Quality checks, automated.",
    description:
      "A lightweight QA workflow tool built to speed up manual testing and reporting cycles.",
    tags: ["React", "Automation"],
    tier: "web",
    tone: "primary",
    hasScreenshots: false,
  },
];

export const ALL_PROJECTS = [...MOBILE_PROJECTS, ...WEB_PROJECTS];

export const FAREWELL_PROJECT = MOBILE_PROJECTS[0];
export const AVENDY_PROJECT = MOBILE_PROJECTS[1];

/** Mobile projects with a full inline case study, rendered as hero-style cards. */
export const CASE_STUDY_PROJECTS = MOBILE_PROJECTS.filter(
  (project) => project.caseStudy && project.caseStudy.length > 0,
);

/** Mobile projects without a case study yet, rendered as compact teaser cards. */
export const TEASER_MOBILE_PROJECTS = MOBILE_PROJECTS.filter(
  (project) => !project.caseStudy || project.caseStudy.length === 0,
);
