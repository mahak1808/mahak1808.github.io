/**
 * Renders a Google Material Symbols (Outlined) icon by name.
 * See https://fonts.google.com/icons for the full icon name reference.
 */
export default function Icon({
  name,
  className = "",
  size,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={size ? { fontSize: size } : undefined}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
