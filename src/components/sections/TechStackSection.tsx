import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BentoCard from "@/components/ui/BentoCard";
import Chip from "@/components/ui/Chip";
import { TECH_STACK } from "@/data/techStack";

export default function TechStackSection() {
  return (
    <section className="py-16 md:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Tech Stack" title="The command center." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TECH_STACK.map((group) => (
            <BentoCard key={group.label} tone={group.tone} className="flex flex-col gap-4">
              <h3 className="font-display text-lg font-bold text-on-surface">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
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
