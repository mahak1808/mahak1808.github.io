import { ReactNode } from "react";

export type BentoTone = "primary" | "secondary" | "tertiary" | "neutral";

const TONE_STYLES: Record<BentoTone, string> = {
  primary: "bg-primary-container text-on-primary-container",
  secondary: "bg-secondary-container text-on-surface",
  tertiary: "bg-tertiary-container text-on-surface",
  neutral: "bg-surface-container-lowest text-on-surface",
};

export default function BentoCard({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: BentoTone;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_-12px_rgba(22,29,31,0.15)] ${TONE_STYLES[tone]} ${className}`}
    >
      {children}
    </div>
  );
}
