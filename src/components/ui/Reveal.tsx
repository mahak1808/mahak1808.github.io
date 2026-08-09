"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  /** Animation delay in ms, useful for staggering. */
  delay?: number;
  /** How far (px) the content travels while revealing. */
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none motion-reduce:!opacity-100 motion-reduce:!translate-y-0 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? undefined : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}
