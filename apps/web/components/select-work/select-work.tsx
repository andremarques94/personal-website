import { BadgeGroupProps } from "@workspace/ui/components/Badge";
import { AnimatedWorkCard } from "./animated-work-card";
import { WorkContainer } from "./work-card.styles";

export type SelectWorkProps = {
  experience: {
    title: string;
    company: string;
    years: string;
    description: string;
    badges: BadgeGroupProps["badgesContent"];
  }[];
};

function SelectWork({ experience }: SelectWorkProps) {
  return (
    <WorkContainer>
      {experience.map((exp, index) => (
        <AnimatedWorkCard
          key={index}
          index={index}
          title={exp.title}
          company={exp.company}
          years={exp.years}
          description={exp.description}
          badges={exp.badges}
        />
      ))}
    </WorkContainer>
  );
}

export { SelectWork };
