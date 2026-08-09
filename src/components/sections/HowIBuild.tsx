import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessStep from "@/components/ui/ProcessStep";
import { HOW_I_BUILD } from "@/data/process";

export default function HowIBuild() {
  return (
    <section id="services" className="scroll-mt-24 py-16 md:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="How I Build"
          title="From idea to App Store, one step at a time."
          description="A full product lifecycle - not just writing components."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {HOW_I_BUILD.map((step) => (
            <ProcessStep
              key={step.index}
              index={step.index}
              title={step.title}
              items={step.items}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
