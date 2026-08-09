export type ChipTone = "primary" | "secondary" | "tertiary" | "neutral";

const TONE_STYLES: Record<ChipTone, string> = {
  primary: "bg-primary-container/60 text-on-primary-container",
  secondary: "bg-secondary-container/50 text-on-surface",
  tertiary: "bg-tertiary-container/60 text-on-surface",
  neutral: "bg-surface-container-high text-on-surface-variant",
};

export default function Chip({
  children,
  tone = "tertiary",
  className = "",
}: {
  children: React.ReactNode;
  tone?: ChipTone;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-xs md:text-sm font-medium tracking-wide px-3 py-1.5 rounded-xl whitespace-nowrap ${TONE_STYLES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
