"use client";
import { useState, useEffect } from "react";

interface UseScrollOptions {
  threshold?: number;
}

/**
 * Custom hook for tracking scroll position and scroll direction
 * @param options - Configuration options for scroll detection
 * @returns Object containing scroll information
 */
export function useScroll(options: UseScrollOptions = {}) {
  const { threshold = 0 } = options;

  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null,
  );
  const [isScrolledPast, setIsScrolledPast] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrollY(currentScrollY);
      setIsScrolledPast(currentScrollY > threshold);

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return {
    scrollY,
    scrollDirection,
    isScrolledPast,
  };
}
