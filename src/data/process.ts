export type ProcessStepData = {
  index: string;
  title: string;
  items: string[];
};

export const HOW_I_BUILD: ProcessStepData[] = [
  {
    index: "01",
    title: "Discover",
    items: ["What's the problem?", "Who is the user?", "What does the product need?"],
  },
  {
    index: "02",
    title: "Design",
    items: ["Flows", "UI", "Interactions", "Responsive layouts"],
  },
  {
    index: "03",
    title: "Build",
    items: ["React Native", "TypeScript", "Components", "State management"],
  },
  {
    index: "04",
    title: "Connect",
    items: ["REST APIs", "Firebase", "Supabase", "Authentication", "Notifications"],
  },
  {
    index: "05",
    title: "Test",
    items: ["Real devices", "iOS", "Android", "Edge cases"],
  },
  {
    index: "06",
    title: "Ship",
    items: ["App Store", "Google Play", "Production"],
  },
];
