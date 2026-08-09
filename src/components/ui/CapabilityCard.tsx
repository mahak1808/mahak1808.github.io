import BentoCard, { BentoTone } from "./BentoCard";
import Icon from "./Icon";

export default function CapabilityCard({
  icon,
  title,
  description,
  tone = "neutral",
}: {
  icon: string;
  title: string;
  description: string;
  tone?: BentoTone;
}) {
  return (
    <BentoCard tone={tone} className="flex flex-col gap-3 h-full">
      <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-on-surface/10">
        <Icon name={icon} size={26} />
      </span>
      <h3 className="font-display text-lg font-bold text-on-surface">
        {title}
      </h3>
      <p className="font-body text-sm text-on-surface-variant leading-relaxed">
        {description}
      </p>
    </BentoCard>
  );
}
