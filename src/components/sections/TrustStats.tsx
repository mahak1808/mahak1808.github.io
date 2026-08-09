import Container from "@/components/ui/Container";
import StatBadge from "@/components/ui/StatBadge";
import { STATS } from "@/data/stats";

export default function TrustStats() {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="flex flex-wrap justify-center md:justify-between gap-3 md:gap-4">
          {STATS.map((stat) => (
            <StatBadge key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </Container>
    </section>
  );
}
