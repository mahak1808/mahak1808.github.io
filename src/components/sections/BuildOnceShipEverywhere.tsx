import Container from "@/components/ui/Container";
import BentoCard from "@/components/ui/BentoCard";
import Icon from "@/components/ui/Icon";

export default function BuildOnceShipEverywhere() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <BentoCard tone="neutral" className="flex flex-col items-center text-center gap-8 border-2 border-on-surface">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-on-surface leading-tight">
            Build once.
            <br />
            Ship everywhere.
          </h2>
          <div className="flex gap-6 md:gap-10">
            <div className="flex flex-col items-center gap-2 px-8 py-5 rounded-2xl bg-primary-container/50">
              <Icon name="phone_iphone" size={40} className="text-on-surface" />
              <span className="font-mono text-sm font-bold uppercase tracking-wider text-on-surface">
                iOS
              </span>
            </div>
            <div className="flex flex-col items-center gap-2 px-8 py-5 rounded-2xl bg-tertiary-container/50">
              <Icon name="android" size={40} className="text-on-surface" />
              <span className="font-mono text-sm font-bold uppercase tracking-wider text-on-surface">
                Android
              </span>
            </div>
          </div>
          <p className="font-body text-sm md:text-base text-on-surface-variant max-w-xl">
            Cross-platform development with React Native, while still
            accounting for platform-specific behaviour and native
            requirements.
          </p>
        </BentoCard>
      </Container>
    </section>
  );
}
