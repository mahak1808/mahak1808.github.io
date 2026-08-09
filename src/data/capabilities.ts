export type Capability = {
  /** Google Material Symbols icon name - see https://fonts.google.com/icons */
  icon: string;
  title: string;
  description: string;
};

export const WHAT_I_BUILD: Capability[] = [
  {
    icon: "smartphone",
    title: "Cross-platform Apps",
    description:
      "Build and maintain iOS and Android applications from a shared React Native codebase.",
  },
  {
    icon: "bolt",
    title: "Real-time Experiences",
    description:
      "Live data sync, polling and event-driven UI so the app reflects what's happening right now.",
  },
  {
    icon: "location_on",
    title: "Location & Maps",
    description:
      "Maps, live location, tracking, geolocation and location-aware experiences.",
  },
  {
    icon: "notifications_active",
    title: "Notifications",
    description:
      "Push notifications, Firebase Cloud Messaging and event-driven user experiences.",
  },
  {
    icon: "link",
    title: "API Integrations",
    description:
      "Connect applications to REST APIs, authentication systems, databases and third-party services.",
  },
  {
    icon: "palette",
    title: "UI → React Native",
    description:
      "Turn Figma designs into responsive, polished React Native interfaces.",
  },
];

export const MOBILE_CAPABILITIES: Capability[] = [
  ...WHAT_I_BUILD,
  {
    icon: "photo_camera",
    title: "Device Capabilities",
    description:
      "Barcode scanning, camera integrations and other native device functionality.",
  },
  {
    icon: "bug_report",
    title: "Performance & Debugging",
    description:
      "Debug platform-specific issues, rendering problems, API behaviour and performance bottlenecks.",
  },
];
