import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import { SOCIAL_LINKS } from "@/data/contact";

const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-outline/15">
      <Container className="py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <span className="font-display font-extrabold text-lg text-on-surface">
            Mahak
          </span>
          <p className="font-body text-sm text-on-surface-variant max-w-xs">
            React Native developer building mobile-first products, with web and
            backend support when the project needs it.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start">
          <span className="font-mono text-xs uppercase tracking-wider text-on-surface-variant">
            Quick Links
          </span>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-on-surface hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start">
          <span className="font-mono text-xs uppercase tracking-wider text-on-surface-variant">
            Connect
          </span>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-sm text-on-surface hover:text-primary transition-colors"
              >
                <Icon name={social.icon} size={16} />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-outline/10">
        <Container className="py-10 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="font-mono text-xs text-on-surface-variant">
            Made with playfulness &amp; curiosity
          </span>
          <span className="font-mono text-xs text-on-surface-variant">
            © 2026 Mahak
          </span>
        </Container>
      </div>
    </footer>
  );
}
