"use client";

import { useState, useEffect, useRef } from "react";

export interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement>;
  isVisible: boolean;
  hasBeenVisible: boolean;
}

/**
 * Custom hook for scroll-based animations
 * @param options Configuration options for the scroll animation
 * @returns Animation state and ref to attach to elements
 */
export function useScrollAnimation(
  options: UseScrollAnimationOptions = {},
): UseScrollAnimationReturn {
  const {
    threshold = 0.1,
    rootMargin = "0px",
    triggerOnce = true,
    delay = 0,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let observer: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    // Add delay if specified
    timeoutId = setTimeout(() => {
      observer = new IntersectionObserver(
        ([entry]) => {
          const isIntersecting = entry.isIntersecting;
          setIsVisible(isIntersecting);

          if (isIntersecting && !hasBeenVisible) {
            setHasBeenVisible(true);
          }

          // Disconnect if triggerOnce and element is visible
          if (triggerOnce && isIntersecting) {
            observer?.disconnect();
          }
        },
        {
          threshold,
          rootMargin,
        },
      );

      observer.observe(element);
    }, delay);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (observer) {
        observer.disconnect();
      }
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return {
    ref,
    isVisible,
    hasBeenVisible,
  };
}

/**
 * Hook for staggered animations
 * @param itemCount Number of items to animate
 * @param options Configuration options
 * @returns Array of animation states for each item
 */
export function useStaggeredAnimation(
  itemCount: number,
  options: UseScrollAnimationOptions & { staggerDelay?: number } = {},
) {
  const { staggerDelay = 100, ...animationOptions } = options;
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(itemCount).fill(false),
  );

  const { ref, isVisible } = useScrollAnimation(animationOptions);

  useEffect(() => {
    if (!isVisible) return;

    const timeouts: NodeJS.Timeout[] = [];

    for (let i = 0; i < itemCount; i++) {
      const timeout = setTimeout(() => {
        setVisibleItems((prev) => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }, i * staggerDelay);

      timeouts.push(timeout);
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [isVisible, itemCount, staggerDelay]);

  return {
    ref,
    isVisible,
    visibleItems,
  };
}
