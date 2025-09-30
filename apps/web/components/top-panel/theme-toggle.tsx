"use client";
import { useTheme } from "next-themes";
import Sun from "@/app/svg/sun.svg";

function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-1 text-muted-foreground hover:text-foreground transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <Sun className="w-5 h-5" />
    </button>
  );
}

export { ThemeToggle };
