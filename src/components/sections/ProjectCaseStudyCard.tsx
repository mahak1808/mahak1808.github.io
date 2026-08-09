import BentoCard, { BentoTone } from "@/components/ui/BentoCard";
import Chip from "@/components/ui/Chip";
import ScreensCarousel from "@/components/ui/ScreensCarousel";
import StoreLinks from "@/components/ui/StoreLinks";
import { Project } from "@/data/projects";

type ToneTextStyles = {
  eyebrow: string;
  heading: string;
  tagline: string;
  description: string;
  caseStudyLabel: string;
  caseStudyBody: string;
  divider: string;
};

const TONE_STYLES: Record<BentoTone, ToneTextStyles> = {
  primary: {
    eyebrow: "text-on-primary-container/70",
    heading: "text-on-primary-container",
    tagline: "text-on-primary-container/90",
    description: "text-on-primary-container/80",
    caseStudyLabel: "text-on-primary-container/60",
    caseStudyBody: "text-on-primary-container/85",
    divider: "border-on-primary-container/15",
  },
  secondary: {
    eyebrow: "text-on-surface/70",
    heading: "text-on-surface",
    tagline: "text-on-surface/90",
    description: "text-on-surface/80",
    caseStudyLabel: "text-on-surface/60",
    caseStudyBody: "text-on-surface/85",
    divider: "border-on-surface/15",
  },
  tertiary: {
    eyebrow: "text-on-surface/70",
    heading: "text-on-surface",
    tagline: "text-on-surface/90",
    description: "text-on-surface/80",
    caseStudyLabel: "text-on-surface/60",
    caseStudyBody: "text-on-surface/85",
    divider: "border-on-surface/15",
  },
  neutral: {
    eyebrow: "text-on-surface/70",
    heading: "text-on-surface",
    tagline: "text-on-surface/90",
    description: "text-on-surface/80",
    caseStudyLabel: "text-on-surface/60",
    caseStudyBody: "text-on-surface/85",
    divider: "border-on-surface/15",
  },
};

export default function ProjectCaseStudyCard({
  project,
  eyebrow,
}: {
  project: Project;
  eyebrow: string;
}) {
  const styles = TONE_STYLES[project.tone];

  return (
    <BentoCard tone={project.tone} className="flex flex-col gap-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4">
          <span className={`font-mono text-xs uppercase tracking-wider font-semibold ${styles.eyebrow}`}>
            {eyebrow}
          </span>
          <h3 className={`font-display text-3xl md:text-4xl font-extrabold ${styles.heading}`}>
            {project.name}
          </h3>
          <p className={`font-body text-lg ${styles.tagline}`}>{project.tagline}</p>
          <p className={`font-body text-sm md:text-base ${styles.description} leading-relaxed max-w-md`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <Chip key={tag} tone="neutral">
                {tag}
              </Chip>
            ))}
          </div>
          <StoreLinks
            appStoreUrl={project.appStoreUrl}
            playStoreUrl={project.playStoreUrl}
            className="mt-1"
          />
        </div>

        <div className="flex items-center min-w-0">
          <ScreensCarousel screens={project.screens ?? []} tone={project.tone} size="sm" />
        </div>
      </div>

      {project.caseStudy ? (
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4 border-t ${styles.divider}`}>
          {project.caseStudy.map((section) => (
            <div key={section.label} className="flex flex-col gap-1.5">
              <span className={`font-mono text-[11px] uppercase tracking-wider font-semibold ${styles.caseStudyLabel}`}>
                {section.label}
              </span>
              <p className={`font-body text-sm ${styles.caseStudyBody} leading-relaxed`}>
                {section.body}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </BentoCard>
  );
}
