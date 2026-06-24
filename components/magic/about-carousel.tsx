"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface CarouselImage {
  src: string;
  alt: string;
}

/**
 * Auto-advancing crossfade carousel that fills its (framed) container — used in
 * the Sobre hero. Keeps the existing design: it only swaps the image, the
 * rotated rounded frame lives in the page. Pauses under reduced-motion.
 */
export function AboutCarousel({
  images,
  intervalMs = 4500,
}: {
  images: CarouselImage[];
  intervalMs?: number;
}) {
  const [active, setActive] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    if (images.length <= 1) return;

    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) return;

    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  return (
    <div className="absolute inset-0">
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 1024px) 90vw, 28rem"
          priority={i === 0}
          className={`object-cover transition-opacity duration-[1200ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {images.length > 1 && (
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10"
          aria-hidden="true"
        >
          {images.map((image, i) => (
            <span
              key={`dot-${image.src}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-5 bg-primary" : "w-1.5 bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
