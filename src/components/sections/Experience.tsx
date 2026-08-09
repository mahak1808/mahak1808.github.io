import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BentoCard from "@/components/ui/BentoCard";
import Chip from "@/components/ui/Chip";
import { EXPERIENCE, YEARS_OF_EXPERIENCE } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 md:py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Experience"
            title="Shipping production software, one role at a time."
          />
          <div className="flex items-center gap-4 shrink-0 px-6 py-4 rounded-3xl bg-primary-container text-on-primary-container w-fit">
            <span className="font-display text-4xl md:text-5xl font-extrabold leading-none">
              {YEARS_OF_EXPERIENCE}
            </span>
            <span className="font-mono text-xs uppercase tracking-wider leading-tight max-w-[7rem]">
              Years of Professional Experience
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((entry) => (
            <BentoCard
              key={`${entry.company}-${entry.role}`}
              tone={entry.tone}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-on-surface">
                    {entry.role}
                  </h3>
                  <p className="font-body text-sm md:text-base text-on-surface-variant font-medium">
                    {entry.company}
                    {entry.location ? ` · ${entry.location}` : ""}
                  </p>
                </div>
                <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-on-surface/70 shrink-0 px-3 py-1.5 rounded-full bg-on-surface/5 w-fit">
                  {entry.period}
                </span>
              </div>

              <p className="font-body text-sm md:text-base text-on-surface/85 leading-relaxed max-w-2xl">
                {entry.summary}
              </p>

              <ul className="flex flex-col gap-2.5">
                {entry.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 font-body text-sm text-on-surface/80 leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-on-surface/40 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-on-surface/10">
                {entry.tech.map((item) => (
                  <Chip key={item} tone="neutral">
                    {item}
                  </Chip>
                ))}
              </div>
            </BentoCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
