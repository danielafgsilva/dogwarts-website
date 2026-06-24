import Image from "next/image";

/**
 * Full-screen intro preloader: the Dogwarts crest inside a spinning gold
 * "magic circle". Pure CSS — auto-dismisses via animation (works without JS,
 * no hydration concerns) and respects prefers-reduced-motion. Rendered once in
 * the root layout, so it only appears on a full page load, not on client
 * navigation.
 */
export function Preloader() {
  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader__inner">
        <span className="preloader__ring" />
        <Image
          src="/dogwarts-logo-with-tagline.png"
          alt=""
          width={120}
          height={120}
          priority
          className="preloader__logo"
        />
      </div>
    </div>
  );
}
