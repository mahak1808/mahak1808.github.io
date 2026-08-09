import Image from "next/image";
import { BentoTone } from "./BentoCard";
import Icon from "./Icon";

const TONE_GRADIENTS: Record<BentoTone, string> = {
  primary: "from-primary-fixed via-primary-container to-primary-fixed-dim",
  secondary:
    "from-secondary-fixed via-secondary-container to-secondary-fixed-dim",
  tertiary: "from-tertiary-fixed via-tertiary-container to-tertiary-fixed-dim",
  neutral:
    "from-surface-container-highest via-surface-container-high to-surface-container",
};

const TONE_ICON_BG: Record<BentoTone, string> = {
  primary: "bg-on-surface/12",
  secondary: "bg-on-surface/12",
  tertiary: "bg-on-surface/12",
  neutral: "bg-on-surface/10",
};

const SIZE_CLASSES = {
  sm: "w-36 h-[19rem] md:w-40 md:h-[21rem]",
  md: "w-48 h-[26rem] md:w-56 md:h-[30rem]",
  lg: "w-60 h-[32rem] md:w-72 md:h-[38.5rem]",
};

export default function PhoneMockup({
  label,
  icon = "smartphone",
  tone = "primary",
  src,
  size = "md",
  className = "",
}: {
  label: string;
  icon?: string;
  tone?: BentoTone;
  src?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizeClasses = SIZE_CLASSES[size];

  // Real screenshots already look like a phone (status bar, rounded corners baked in) -
  // show them as-is instead of nesting them inside another fake bezel.
  if (src) {
    return (
      <div
        className={`relative shrink-0 ${sizeClasses} rounded-[1.75rem] overflow-hidden border-2 border-on-surface/10 shadow-[0_20px_40px_-15px_rgba(22,29,31,0.35)] ${className}`}
      >
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 768px) 40vw, 20vw"
          className="object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div className={`relative shrink-0 ${sizeClasses} ${className}`}>
      {/* Side buttons */}
      <span className="absolute -left-[3px] top-16 w-[3px] h-6 rounded-l bg-on-surface" />
      <span className="absolute -left-[3px] top-24 w-[3px] h-10 rounded-l bg-on-surface" />
      <span className="absolute -right-[3px] top-20 w-[3px] h-14 rounded-r bg-on-surface" />

      {/* Frame */}
      <div className="relative w-full h-full rounded-[2.25rem] border-[6px] border-on-surface bg-on-surface shadow-[0_25px_50px_-15px_rgba(22,29,31,0.4)]">
        <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden bg-surface-container-lowest">
          <div
            className={`w-full h-full bg-gradient-to-br ${TONE_GRADIENTS[tone]} flex flex-col`}
          >
            {/* Status bar */}
            <div className="flex items-center justify-between px-5 pt-3 shrink-0">
              <span className="font-mono text-[10px] font-semibold text-on-surface/70">
                9:41
              </span>
              <div className="flex items-center gap-1">
                <span className="w-3 h-2 rounded-[2px] bg-on-surface/40" />
                <span className="w-3 h-2 rounded-[2px] bg-on-surface/40" />
                <span className="w-4 h-2 rounded-[2px] bg-on-surface/50" />
              </div>
            </div>

            {/* Dynamic island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-on-surface" />

            {/* Content */}
            <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <span
                className={`flex items-center justify-center w-14 h-14 rounded-2xl ${TONE_ICON_BG[tone]}`}
              >
                <Icon name={icon} size={30} className="text-on-surface" />
              </span>
              <span className="font-display text-sm font-bold text-on-surface leading-tight">
                {label}
              </span>

              <div className="w-full flex flex-col gap-2 mt-2">
                <span
                  className={`h-2.5 rounded-full ${TONE_ICON_BG[tone]} w-full`}
                />
                <span
                  className={`h-2.5 rounded-full ${TONE_ICON_BG[tone]} w-4/5 mx-auto`}
                />
                <span
                  className={`h-2.5 rounded-full ${TONE_ICON_BG[tone]} w-3/5 mx-auto`}
                />
              </div>
            </div>

            {/* Bottom tab bar */}
            <div className="flex items-center justify-center gap-6 pb-4 pt-3 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-on-surface/70" />
              <span className="w-1.5 h-1.5 rounded-full bg-on-surface/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-on-surface/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-on-surface/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
