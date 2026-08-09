export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <span className="font-mono text-xs md:text-sm font-medium tracking-wider uppercase text-secondary bg-secondary-container/30 px-3 py-1 rounded-full w-fit">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-on-surface">
        {title}
      </h2>
      {description ? (
        <p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
