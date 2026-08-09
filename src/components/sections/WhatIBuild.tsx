import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CapabilityCard from "@/components/ui/CapabilityCard";
import { WHAT_I_BUILD } from "@/data/capabilities";
import { BentoTone } from "@/components/ui/BentoCard";

const TONES: BentoTone[] = ["primary", "tertiary", "secondary"];

export default function WhatIBuild() {
  return (
    <section className="py-16 md:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="What I Build" title="Mobile products, end to end." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHAT_I_BUILD.map((capability, i) => (
            <CapabilityCard
              key={capability.title}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
              tone={TONES[i % TONES.length]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
