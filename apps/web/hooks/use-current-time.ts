"use client";
import { useState, useEffect } from "react";

interface UseCurrentTimeOptions {
  timeZone?: string;
  locale?: string;
  hour12?: boolean;
  updateInterval?: number;
}

/**
 * Custom hook for displaying current time with automatic updates
 * @param options - Configuration options for time formatting and update interval
 * @returns Current time string formatted according to options
 */
export function useCurrentTime(options: UseCurrentTimeOptions = {}) {
  const {
    timeZone = "Europe/Lisbon",
    locale = "en-US",
    hour12 = false,
    updateInterval = 1000,
  } = options;

  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString(locale, {
        timeZone,
        hour12,
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, updateInterval);
    return () => clearInterval(interval);
  }, [timeZone, locale, hour12, updateInterval]);

  return time;
}
