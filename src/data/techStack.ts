export type TechGroup = {
  label: string;
  tone: "primary" | "secondary" | "tertiary";
  items: string[];
};

export const TECH_STACK: TechGroup[] = [
  {
    label: "Mobile",
    tone: "primary",
    items: ["React Native", "TypeScript", "Expo", "FCM", "Google Maps API"],
  },
  {
    label: "Web",
    tone: "tertiary",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    tone: "secondary",
    items: ["Firebase", "Supabase", "Node.js", "REST APIs", "n8n"],
  },
];
