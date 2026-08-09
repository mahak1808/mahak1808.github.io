import { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: () => void;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const VARIANT_STYLES: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-primary-container text-on-primary-container border-2 border-on-surface hover:scale-[1.03] hover:-translate-y-0.5",
  secondary:
    "bg-secondary-container text-on-surface border-2 border-on-surface hover:scale-[1.03] hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-on-surface border-2 border-outline/40 hover:border-on-surface",
};

const BASE_STYLES =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body font-semibold text-sm md:text-base transition-all duration-200 active:scale-95";

export default function Button({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `${BASE_STYLES} ${VARIANT_STYLES[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
