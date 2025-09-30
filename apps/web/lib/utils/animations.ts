/**
 * Generates animation delay props for Framer Motion components
 * @param value - Delay value in seconds
 * @returns Motion props object with transition delay
 */
export const generateDelay = (value: number) => ({
  transition: { delay: value },
});

export const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};
