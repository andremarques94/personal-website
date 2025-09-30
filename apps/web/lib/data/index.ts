import type { Experience } from "@/lib/types/experience";
import experienceData from "./experience.json";

export const getExperienceData = (): Experience[] => {
  return experienceData as Experience[];
};

export { type Experience };
