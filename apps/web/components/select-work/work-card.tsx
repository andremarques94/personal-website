import { BadgeGroup } from "@workspace/ui/components/Badge";
import { SelectWorkProps } from "./select-work";
import {
  WorkCardContainer,
  WorkCardGrid,
  TitleSection,
  ContentSection,
  WorkTitle,
  WorkCompany,
  WorkYears,
  WorkDescription,
} from "./work-card.styles";

type WorkCardProps = SelectWorkProps["experience"][number];

function WorkCard({
  title,
  company,
  years,
  description,
  badges,
}: WorkCardProps) {
  return (
    <WorkCardContainer>
      <WorkCardGrid>
        <TitleSection>
          <WorkTitle>{title}</WorkTitle>
          <WorkCompany>{company}</WorkCompany>
          <WorkYears>{years}</WorkYears>
        </TitleSection>
        <ContentSection>
          <WorkDescription>{description}</WorkDescription>
          <BadgeGroup badgesContent={badges} />
        </ContentSection>
      </WorkCardGrid>
    </WorkCardContainer>
  );
}

export { WorkCard };
