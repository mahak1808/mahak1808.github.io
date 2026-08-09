import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <Container>
        <div className={styles.heroGrid}>
          <div className={styles.heroContent}>
            <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-secondary font-semibold">
              React Native Developer · iOS + Android
            </span>
            <h1 className={styles.heroTitle}>
              I build mobile apps people actually use.
            </h1>
            <p className={styles.heroDescription}>
              React Native developer specializing in production-ready iOS &
              Android applications, with experience across APIs, real-time
              features, maps, notifications and modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Button href="#work" variant="primary">
                See my work
              </Button>
              <Button href="#contact" variant="ghost">
                Let&apos;s build something
              </Button>
            </div>
          </div>

          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageContainer}>
              <Image
                src="/images/heroImage.webp"
                alt="Mahak"
                fill
                priority
                className="object-cover object-[50%_30%]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const styles = {
  heroGrid:
    "grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center min-h-[85vh] md:min-h-screen py-16 md:py-0",
  heroContent: "flex flex-col gap-5 md:gap-6 order-2 md:order-1",
  heroTitle:
    "font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-on-surface leading-[1.05] tracking-tight",
  heroDescription:
    "font-body text-base md:text-xl text-on-surface-variant leading-relaxed max-w-lg",
  heroImageWrapper: "order-1 md:order-2 flex justify-center",
  heroImageContainer:
    "relative aspect-square w-full max-w-xs sm:max-w-sm md:max-w-none rounded-[2.5rem] overflow-hidden border-4 border-on-surface shadow-[0_20px_50px_-20px_rgba(22,29,31,0.4)]",
};
