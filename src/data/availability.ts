export type AvailabilityItem = {
  /** Google Material Symbols icon name - see https://fonts.google.com/icons */
  icon: string;
  label: string;
};

export const AVAILABLE_FOR: AvailabilityItem[] = [
  { icon: "smartphone", label: "React Native Development" },
  { icon: "rocket_launch", label: "MVP Development" },
  { icon: "build", label: "App Development & Maintenance" },
  { icon: "palette", label: "Figma → React Native" },
  { icon: "cable", label: "API & Backend Integration" },
  { icon: "handshake", label: "Freelance / Contract Projects" },
];

export const OPEN_TO: string[] = [
  "React Native Developer",
  "Mobile Developer",
  "Frontend Engineer",
  "Software Engineer",
];
