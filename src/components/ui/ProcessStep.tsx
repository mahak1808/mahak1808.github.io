export default function ProcessStep({
  index,
  title,
  items,
}: {
  index: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-surface-container-lowest border border-outline/15 p-6 h-full">
      <span className="font-mono text-2xl md:text-3xl font-bold text-secondary/60">
        {index}
      </span>
      <h3 className="font-display text-lg md:text-xl font-bold text-on-surface">
        {title}
      </h3>
      <ul className="flex flex-col gap-1 mt-1">
        {items.map((item) => (
          <li key={item} className="font-body text-sm text-on-surface-variant">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
