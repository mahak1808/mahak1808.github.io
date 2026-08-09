export default function StatBadge({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1 px-4 py-3 md:px-6 md:py-4 rounded-2xl bg-surface-container-lowest border border-outline/15 text-center min-w-[140px]">
      <span className="font-display text-lg md:text-xl font-bold text-on-surface">
        {value}
      </span>
      <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider text-on-surface-variant">
        {label}
      </span>
    </div>
  );
}
