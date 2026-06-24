/**
 * Warm, tiled paw-print pattern overlay — the pet-lover motif used in hero and
 * CTA backgrounds (replaces the previous starfield). Purely decorative.
 */
export function PawPattern({
  className = "",
  opacity = 0.035,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      className={`paw-pattern pointer-events-none absolute inset-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
