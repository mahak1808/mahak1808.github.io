import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BentoCard from "@/components/ui/BentoCard";
import Chip from "@/components/ui/Chip";
import { WEB_PROJECTS } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <section className="py-16 md:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Tier 2 · Web"
          title="I don't only build mobile."
          description="I can build the web infrastructure around it too - dashboards, internal tools and the backend pieces that keep a product running."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WEB_PROJECTS.map((project) => (
            <BentoCard
              key={project.slug}
              tone={project.tone}
              className="flex flex-col gap-3"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold">
                Web
              </span>
              <h3 className="font-display text-lg font-bold text-on-surface">
                {project.name}
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                {project.tagline}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    tone="neutral"
                    className="!px-2 !py-1 !text-[10px]"
                  >
                    {tag}
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
