export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  tech: string[];
  tone: "primary" | "secondary" | "tertiary";
};

export const YEARS_OF_EXPERIENCE = "2+";

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Software Developer Associate - Frontend Lead & Mentor",
    company: "Mechlin Technologies",
    period: "May 2025 - Present",
    location: "Kota, India",
    summary:
      "Leading frontend delivery on a production React Native app while owning several internal web platforms end-to-end.",
    highlights: [
      "Led the frontend team delivering Farewell, a cross-platform logistics app (React Native, Firebase, Google Maps APIs) letting US residents book instant/scheduled parcel deliveries with UPS, USPS and FedEx - with live rider tracking and in-app map booking flows, approved on the App Store within 2-3 days.",
      "Designed and built the Bid Management System (BMS) from scratch, automating manual Excel workflows and improving task management by 60%+ for 10+ team members.",
      "Built the Human Resource Management System (HRMS), a company-wide platform for attendance, leave tracking, payroll and communication used by all employees.",
      "Trained and mentored 4 interns & SDAs, guiding them through real production work across BMS, HRMS and ClientSphere.",
      "Automated cross-platform social publishing with n8n and built a Retrieval-Augmented Generation (RAG) solution for internal knowledge access.",
    ],
    tech: [
      "React Native",
      "React",
      "Firebase",
      "Google Maps API",
      "n8n",
      "Supabase",
      "Docker",
      "APIs",
    ],
    tone: "primary",
  },
];
