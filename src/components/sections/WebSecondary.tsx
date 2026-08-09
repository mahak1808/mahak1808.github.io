import Container from "@/components/ui/Container";
import BentoCard from "@/components/ui/BentoCard";
import Chip from "@/components/ui/Chip";

const WEB_ITEMS = [
  "React / Next.js",
  "Responsive websites",
  "Dashboards",
  "Landing pages",
];

export default function WebSecondary() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <BentoCard
          tone="tertiary"
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-on-surface/70 font-semibold">
              Need a web app too?
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-on-surface">
              Web is my secondary skill set - not an afterthought.
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {WEB_ITEMS.map((item) => (
              <Chip key={item} tone="neutral">
                {item}
              </Chip>
            ))}
          </div>
        </BentoCard>
      </Container>
    </section>
  );
}
