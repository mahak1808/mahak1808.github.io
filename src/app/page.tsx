import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import FeaturedWork from "@/components/sections/FeaturedWork";
import WhatIBuild from "@/components/sections/WhatIBuild";
import HowIBuild from "@/components/sections/HowIBuild";
import BuildOnceShipEverywhere from "@/components/sections/BuildOnceShipEverywhere";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import WebSecondary from "@/components/sections/WebSecondary";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import AvailableFor from "@/components/sections/AvailableFor";
import TechStackSection from "@/components/sections/TechStackSection";
import Contact from "@/components/sections/Contact";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Reveal>
        <TrustStats />
      </Reveal>
      <Reveal>
        <FeaturedWork />
      </Reveal>
      <Reveal>
        <WhatIBuild />
      </Reveal>
      <Reveal>
        <HowIBuild />
      </Reveal>
      <Reveal>
        <BuildOnceShipEverywhere />
      </Reveal>
      <Reveal>
        <ProjectsGrid />
      </Reveal>
      <Reveal>
        <WebSecondary />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Experience />
      </Reveal>
      <Reveal>
        <AvailableFor />
      </Reveal>
      <Reveal>
        <TechStackSection />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </div>
  );
}
