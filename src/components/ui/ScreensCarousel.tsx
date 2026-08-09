"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import PhoneMockup from "./PhoneMockup";
import Icon from "./Icon";
import { BentoTone } from "./BentoCard";

export type CarouselScreen = {
  label: string;
  icon: string;
  src?: string;
};

const AUTO_SCROLL_SPEED_PX_PER_SEC = 26;
const RESUME_DELAY_MS = 4000;

/**
 * Auto-scrolling, edge-masked strip of phone mockups that also supports
 * manual navigation via arrow buttons and dot indicators. Contained via
 * overflow-hidden so it never overflows its parent card regardless of how
 * many screens are passed in. Auto-scroll pauses on hover/interaction and
 * resumes shortly after.
 */
export default function ScreensCarousel({
  screens,
  tone,
  size = "sm",
}: {
  screens: CarouselScreen[];
  tone: BentoTone;
  size?: "sm" | "md" | "lg";
}) {
  const count = screens.length;
  const loopedScreens = count > 0 ? [...screens, ...screens] : [];

  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const stepRef = useRef(0);
  const pausedRef = useRef(false);
  const resumeTimeoutRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  // Measure the distance between two consecutive items so we can move by whole screens.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || count === 0) return;

    const measure = () => {
      const first = track.children[0] as HTMLElement | undefined;
      const second = track.children[1] as HTMLElement | undefined;
      if (first && second) {
        stepRef.current = second.offsetLeft - first.offsetLeft;
      }
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [count]);

  useEffect(() => {
    if (count === 0) return undefined;
    let lastTime: number | null = null;
    let frameId: number;

    const tick = (time: number) => {
      if (lastTime === null) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      const totalWidth = stepRef.current * count;
      if (!pausedRef.current && totalWidth > 0 && trackRef.current) {
        positionRef.current += AUTO_SCROLL_SPEED_PX_PER_SEC * delta;
        if (positionRef.current >= totalWidth) positionRef.current -= totalWidth;
        trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
        setActiveIndex(Math.round(positionRef.current / stepRef.current) % count);
      }

      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [count]);

  const pauseTemporarily = useCallback(() => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) window.clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = window.setTimeout(() => setIsPaused(false), RESUME_DELAY_MS);
  }, []);

  useEffect(
    () => () => {
      if (resumeTimeoutRef.current) window.clearTimeout(resumeTimeoutRef.current);
    },
    []
  );

  const goTo = useCallback(
    (index: number) => {
      const totalWidth = stepRef.current * count;
      if (totalWidth <= 0) return;
      const normalized = ((index % count) + count) % count;
      positionRef.current = normalized * stepRef.current;
      const track = trackRef.current;
      if (track) {
        track.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
        track.style.transform = `translateX(-${positionRef.current}px)`;
        window.setTimeout(() => {
          if (track) track.style.transition = "";
        }, 500);
      }
      setActiveIndex(normalized);
    },
    [count]
  );

  const handleStep = useCallback(
    (direction: 1 | -1) => {
      pauseTemporarily();
      goTo(activeIndex + direction);
    },
    [activeIndex, goTo, pauseTemporarily]
  );

  if (count === 0) return null;

  return (
    <div
      className="group/carousel relative w-full max-w-full flex flex-col gap-3"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="relative overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div ref={trackRef} className="flex items-end gap-5 w-max">
          {loopedScreens.map((screen, i) => (
            <PhoneMockup
              key={`${screen.label}-${i}`}
              label={screen.label}
              icon={screen.icon}
              src={screen.src}
              tone={tone}
              size={size}
            />
          ))}
        </div>
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous screen"
            onClick={() => handleStep(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-surface-container-lowest/90 backdrop-blur border border-outline/20 shadow-md opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity hover:scale-105 active:scale-95"
          >
            <Icon name="chevron_left" size={20} />
          </button>
          <button
            type="button"
            aria-label="Next screen"
            onClick={() => handleStep(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-surface-container-lowest/90 backdrop-blur border border-outline/20 shadow-md opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity hover:scale-105 active:scale-95"
          >
            <Icon name="chevron_right" size={20} />
          </button>

          <div className="flex items-center justify-center gap-1.5">
            {screens.map((screen, i) => (
              <button
                key={screen.label}
                type="button"
                aria-label={`Go to ${screen.label}`}
                onClick={() => {
                  pauseTemporarily();
                  goTo(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-5 bg-on-surface" : "w-1.5 bg-on-surface/25"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
