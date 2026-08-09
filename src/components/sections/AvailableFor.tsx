import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BentoCard from "@/components/ui/BentoCard";
import Chip from "@/components/ui/Chip";
import Icon from "@/components/ui/Icon";
import { AVAILABLE_FOR, OPEN_TO } from "@/data/availability";

export default function AvailableFor() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BentoCard tone="primary" className="flex flex-col gap-5">
            <SectionHeading eyebrow="Available For" title="Let's work together" />
            <div className="flex flex-col gap-2.5">
              {AVAILABLE_FOR.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-on-primary-container/10 shrink-0">
                    <Icon name={item.icon} size={20} className="text-on-primary-container" />
                  </span>
                  <span className="font-body text-sm md:text-base text-on-primary-container font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard tone="neutral" className="flex flex-col gap-5">
            <SectionHeading eyebrow="Open To" title="Roles I'm a fit for" />
            <div className="flex flex-wrap gap-2.5">
              {OPEN_TO.map((role) => (
                <Chip key={role} tone="tertiary" className="!text-sm !px-4 !py-2">
                  {role}
                </Chip>
              ))}
            </div>
          </BentoCard>
        </div>
      </Container>
    </section>
  );
}
