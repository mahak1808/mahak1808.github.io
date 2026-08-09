import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BentoCard from "@/components/ui/BentoCard";
import Chip from "@/components/ui/Chip";
import PhoneMockup from "@/components/ui/PhoneMockup";
import StoreLinks from "@/components/ui/StoreLinks";
import ProjectCaseStudyCard from "./ProjectCaseStudyCard";
import {
  CASE_STUDY_PROJECTS,
  TEASER_MOBILE_PROJECTS,
  FAREWELL_PROJECT,
} from "@/data/projects";

const CASE_STUDY_EYEBROWS: Record<string, string> = {
  farewell: "Tier 1 · Mobile · Flagship Project",
  avendy: "Tier 1 · Mobile · Marketplace Project",
};

export default function FeaturedWork() {
  return (
    <section id="work" className="scroll-mt-24 py-16 md:py-24">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Featured Mobile Work"
          title="Real mobile products, shipped to production."
          description={`${FAREWELL_PROJECT.name} is the clearest proof of how I build: real-time tracking, maps, notifications, and a production app running on iOS and Android.`}
        />

        {CASE_STUDY_PROJECTS.map((project) => (
          <ProjectCaseStudyCard
            key={project.slug}
            project={project}
            eyebrow={CASE_STUDY_EYEBROWS[project.slug] ?? "Tier 1 · Mobile"}
          />
        ))}

        {/* Teaser mobile projects - no case study yet */}
        {TEASER_MOBILE_PROJECTS.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TEASER_MOBILE_PROJECTS.map((project) => (
              <BentoCard
                key={project.slug}
                tone={project.tone}
                className="flex flex-col sm:flex-row gap-6 items-center"
              >
                <PhoneMockup
                  label={project.screens?.[0]?.label ?? project.name}
                  icon={project.screens?.[0]?.icon}
                  src={project.screens?.[0]?.src}
                  tone={project.tone}
                  size="sm"
                />
                <div className="flex flex-col gap-2 flex-1 items-center sm:items-start text-center sm:text-left">
                  <h4 className="font-display text-xl font-bold text-on-surface">
                    {project.name}
                  </h4>
                  <p className="font-body text-sm text-on-surface-variant">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 mt-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Chip
                        key={tag}
                        tone="neutral"
                        className="!px-2 !py-1 !text-[10px]"
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>
                  <StoreLinks
                    appStoreUrl={project.appStoreUrl}
                    playStoreUrl={project.playStoreUrl}
                    className="justify-center sm:justify-start mt-1"
                  />
                </div>
              </BentoCard>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
