import { PawPrint } from "lucide-react";

/**
 * Storybook-style chapter divider: a paw flanked by hairlines.
 * Decorative only (aria-hidden).
 */
export function PawDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-4 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
      <PawPrint className="w-5 h-5 text-primary float-slow" />
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
    </div>
  );
}
