import { SocialLinks } from "./social-links";
import { ThemeToggle } from "./theme-toggle";

function TopPanel() {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 md:top-8 md:right-8 md:left-auto md:transform-none z-50">
      <div className="flex items-center gap-4">
        <SocialLinks />
        <ThemeToggle />
      </div>
    </div>
  );
}

export { TopPanel };
