import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full max-w-[1200px] mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
