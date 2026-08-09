export const SITE_COLORS = {
  surface: {
    DEFAULT: "#f4fafd",
    dim: "#d4dbdd",
    bright: "#f4fafd",
    container: {
      lowest: "#ffffff",
      low: "#eef5f7",
      DEFAULT: "#e8eff1",
      high: "#e2e9ec",
      highest: "#dde4e6",
    },
    variant: "#dde4e6",
  },
  on: {
    surface: "#161d1f",
    "surface-variant": "#4d4633",
    background: "#161d1f",
  },
  primary: {
    DEFAULT: "#705d00",
    container: "#ffd93d", // Main CTA Yellow
    fixed: "#ffe173",
    "fixed-dim": "#e8c426",
    on: "#ffffff",
    "on-container": "#725e00",
  },
  secondary: {
    DEFAULT: "#a13d39",
    container: "#ff847c", // Coral Accent
    fixed: "#ffdad7",
    "fixed-dim": "#ffb3ad",
    on: "#ffffff",
  },
  tertiary: {
    DEFAULT: "#00687a",
    container: "#93e8ff", // Teal Accent
    fixed: "#acedff",
    "fixed-dim": "#68d5f0",
    on: "#ffffff",
  },
  outline: {
    DEFAULT: "#7e7761",
    variant: "#d0c6ad",
  },
  error: {
    DEFAULT: "#ba1a1a",
    container: "#ffdad6",
    on: "#ffffff",
  },
  background: "#f4fafd",
  dots: {
    yellow: "#F4E59C",
    teal: "#BEEEFD",
  },
} as const;

export const TYPOGRAPHY = {
  // Uses responsive Tailwind utility classes (e.g., smaller on mobile, larger on desktop)
  displayLg:
    "font-display text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight",
  headlineMd: "font-display text-2xl md:text-[32px] font-bold leading-[1.2]",
  bodyLg: "font-body text-base md:text-lg font-normal leading-relaxed",
  bodyMd: "font-body text-sm md:text-base font-normal leading-relaxed",
  labelSm:
    "font-mono text-xs md:text-sm font-medium leading-none tracking-wider",
} as const;

export const RADIUS = {
  sm: "rounded-sm",
  DEFAULT: "rounded-2xl",
  md: "rounded-3xl",
  lg: "rounded-[2rem]",
  xl: "rounded-[3rem]",
  full: "rounded-full",
} as const;

export const SPACING = {
  gutter: "px-4 md:px-6",
  margin: "mx-4 md:mx-8",
  containerMax: "max-w-[1200px] mx-auto",
} as const;
