import type { Metadata } from "next";
import { HeroSection } from "@/components/hero";
import { SelectWork } from "@/components/select-work";
import { getExperienceData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Home",
  description:
    "André Marques - Software engineer and former programming teacher portfolio showcasing experience and projects.",
};

export default function Page() {
  const experience = getExperienceData();

  return (
    <main className="min-h-screen px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-16">
          <HeroSection />
          <SelectWork experience={experience} />
        </div>
        <div className="mt-8"></div>
      </div>
    </main>
  );
}
