"use client";
import { ComponentProps, ReactNode, useMemo } from "react";
import { motion, MotionProps } from "motion/react";
import Typography from "@workspace/ui/components/Typography/Typography";

const motionComponents = {
  div: motion.div,
  span: motion.span,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
} as const;

type MotionElement = keyof typeof motionComponents;

const defaultAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.1 },
  viewport: { once: true },
};

type AnimatedTypographyProps = ComponentProps<typeof Typography> & {
  children: ReactNode;
  motionProps?: {
    element?: MotionElement;
  } & MotionProps;
};

function AnimatedTypography({
  children,
  motionProps = {},
  ...typographyProps
}: AnimatedTypographyProps) {
  const { element = "div", ...motionOptions } = motionProps;

  const mergedAnimation = useMemo(
    () => ({
      ...defaultAnimation,
      ...motionOptions,
    }),
    [motionOptions],
  );

  const content = <Typography {...typographyProps}>{children}</Typography>;
  const Component = motionComponents[element];

  return <Component {...mergedAnimation}>{content}</Component>;
}

export default AnimatedTypography;
