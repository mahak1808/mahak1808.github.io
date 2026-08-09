"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  const linkContainerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Measure the active link so the pill indicator can slide beneath it.
  useEffect(() => {
    const measure = () => {
      const activeEl = linkRefs.current[activeSection];
      const container = linkContainerRef.current;
      if (!activeEl || !container) {
        setIndicator(null);
        return;
      }
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      setIndicator({
        left: activeRect.left - containerRect.left,
        width: activeRect.width,
      });
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeSection]);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <a href="#home" className={styles.navbarLogo}>
          Mahak
        </a>

        <div ref={linkContainerRef} className={styles.navbarLinkContainer}>
          {indicator ? (
            <span
              className={styles.navbarIndicator}
              style={{ left: indicator.left, width: indicator.width }}
            />
          ) : null}
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                ref={(el) => {
                  linkRefs.current[link.href.slice(1)] = el;
                }}
                href={link.href}
                className={isActive ? styles.navbarLinkActive : styles.navbarLink}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Button href="#contact" variant="primary" className="!px-5 !py-2 text-sm">
            Let&apos;s Talk
          </Button>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={styles.menuButton}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span
            className="flex items-center justify-center transition-transform duration-200 ease-out"
            style={{ transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            <Icon name={isMenuOpen ? "close" : "menu"} size={24} />
          </span>
        </button>
      </div>

      {isMenuOpen ? (
        <div className={styles.mobileDrawer}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className={
                activeSection === link.href.slice(1)
                  ? styles.mobileDrawerLinkActive
                  : styles.mobileDrawerLink
              }
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#contact"
            variant="primary"
            className="w-full justify-center mt-2"
            onClick={handleLinkClick}
          >
            Let&apos;s Talk
          </Button>
        </div>
      ) : null}
    </nav>
  );
}

const styles = {
  navbar:
    "sticky top-4 z-50 mx-4 md:mx-auto md:w-fit backdrop-blur-md bg-surface/70 border border-outline/20 rounded-3xl md:rounded-full shadow-[0_8px_30px_-15px_rgba(22,29,31,0.25)]",
  navbarContainer:
    "flex items-center px-4 md:px-7 gap-4 md:gap-10 h-16 md:h-[4.5rem] justify-between md:justify-center",
  navbarLogo: "font-display font-extrabold text-xl text-on-surface shrink-0",
  navbarLinkContainer: "relative hidden md:flex items-center gap-2 lg:gap-3",
  navbarIndicator:
    "absolute top-1/2 -translate-y-1/2 h-9 rounded-full bg-primary-container/60 transition-[left,width] duration-300 ease-out",
  navbarLink:
    "relative z-10 px-4 py-2 rounded-full font-body text-base font-medium text-on-surface-variant hover:text-primary transition-colors",
  navbarLinkActive:
    "relative z-10 px-4 py-2 rounded-full font-body text-base font-semibold text-primary transition-colors",
  menuButton:
    "flex md:hidden items-center justify-center w-9 h-9 shrink-0 rounded-full text-on-surface hover:bg-on-surface/5 active:scale-95 transition-colors",
  mobileDrawer: "flex md:hidden flex-col gap-1 px-4 pb-4 pt-1",
  mobileDrawerLink:
    "font-body text-base font-medium text-on-surface-variant hover:text-primary py-3 border-b border-outline/10 transition-colors",
  mobileDrawerLinkActive:
    "font-body text-base font-semibold text-primary py-3 border-b border-outline/10 transition-colors",
};
