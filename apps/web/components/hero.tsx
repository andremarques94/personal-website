import {
  AnimatedTypography,
  Typography,
} from "@workspace/ui/components/Typography";
import { SocialLinks } from "./top-panel/social-links";
import { ThemeToggle } from "./top-panel/theme-toggle";
import { generateDelay } from "@/lib/utils/animations";

function HeroSection() {
  return (
    <section className="pt-24 lg:pt-32">
      <div className="flex items-center justify-between mb-6">
        <AnimatedTypography variant="lead">PORTFOLIO | 2025</AnimatedTypography>
        <div className="flex items-center gap-4">
          <SocialLinks />
          <span className="text-muted-foreground">|</span>
          <ThemeToggle />
        </div>
      </div>

      <div className="mb-8">
        <AnimatedTypography
          motionProps={generateDelay(0.3)}
          variant="h1"
          className="text-7xl font-light"
        >
          André
        </AnimatedTypography>
        <AnimatedTypography
          motionProps={generateDelay(0.5)}
          variant="h1"
          className="text-7xl font-light text-muted-foreground"
        >
          Marques
        </AnimatedTypography>
      </div>

      <AnimatedTypography
        motionProps={generateDelay(0.7)}
        variant="muted"
        className="max-w-xl text-lg"
      >
        <Typography variant="bold" className="font-extrabold text-primary">
          Software engineer
        </Typography>{" "}
        and former programming teacher. Part-time tinkerer with new
        technologies. Full-stack over-engineer. Infrastructure curious but with
        a low budget.
      </AnimatedTypography>
    </section>
  );
}

export { HeroSection };
