import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BentoCard from "@/components/ui/BentoCard";

const QUICK_FACTS = [
  { label: "Role", value: "Frontend Lead, Mechlin Technologies" },
  { label: "Education", value: "BTech CSE + AI/ML (9.93 CGPA)" },
  { label: "Focus", value: "React Native · Cross-platform Apps" },
  { label: "Also Works With", value: "React · Next.js · Firebase · Supabase" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="About" title="The human behind the code." />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BentoCard
            tone="neutral"
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <p className="font-body text-lg md:text-xl text-on-surface leading-relaxed">
              I&apos;m a developer who loves building mobile products.
            </p>
            <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
              My primary focus is React Native and cross-platform application
              development, with hands-on experience building production
              applications involving real-time tracking, maps, APIs,
              notifications and complex business workflows.
            </p>
            <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
              I also have a strong background in React and modern web
              development, which lets me work comfortably across the broader
              product ecosystem - from mobile interfaces to web applications and
              backend integrations.
            </p>
          </BentoCard>

          <BentoCard tone="secondary" className="flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-on-surface/70 font-semibold">
              Quick Facts
            </span>
            <div className="flex flex-col gap-3">
              {QUICK_FACTS.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-0.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-on-surface/60">
                    {fact.label}
                  </span>
                  <span className="font-body text-sm font-medium text-on-surface">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </BentoCard>
        </div>
      </Container>
    </section>
  );
}
