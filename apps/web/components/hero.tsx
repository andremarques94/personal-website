import {
  AnimatedTypography,
  Typography,
} from "@workspace/ui/components/Typography";

function HeroSection() {
  return (
    <section className="hero">
      <div className="flex flex-col gap-3">
        <AnimatedTypography variant="lead">PORTFOLIO | 2025</AnimatedTypography>
        <div className="flex flex-col gap-7">
          <div>
            <AnimatedTypography
              motionProps={{ transition: { delay: 0.3 } }}
              variant="h1"
              className="text-7xl font-light"
            >
              André
            </AnimatedTypography>
            <AnimatedTypography
              motionProps={{ transition: { delay: 0.5 } }}
              variant="h1"
              className="text-7xl font-light text-muted-foreground"
            >
              Marques
            </AnimatedTypography>
          </div>
          <AnimatedTypography
            motionProps={{ transition: { delay: 0.7 } }}
            variant="muted"
            className="max-w-xl text-lg"
          >
            <Typography variant="bold" className="font-extrabold text-primary">
              Software engineer
            </Typography>{" "}
            and former programming teacher. Part-time tinkerer with new
            technologies. Full-stack over-engineer. Infrastructure curious but
            with a low budget.
          </AnimatedTypography>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
