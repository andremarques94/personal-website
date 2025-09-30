import Script from "next/script";
import { SITE_CONFIG } from "@/lib";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.author.name,
    jobTitle: "Software Engineer",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    sameAs: [SITE_CONFIG.author.github, SITE_CONFIG.author.linkedin],
    worksFor: {
      "@type": "Organization",
      name: "EngineAI",
    },
    knowsAbout: [
      "TypeScript",
      "JavaScript",
      "Python",
      "React",
      "Next.js",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "Software Engineering",
      "Full Stack Development",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Code For All_",
    },
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
