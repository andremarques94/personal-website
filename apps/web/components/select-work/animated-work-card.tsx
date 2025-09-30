"use client";
import { motion, type Variants } from "motion/react";
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

type WorkCardProps = SelectWorkProps["experience"][number] & {
  index: number;
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const staggerDelay = 0.3;

function AnimatedWorkCard({
  title,
  company,
  years,
  description,
  badges,
  index,
}: WorkCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px", amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * staggerDelay,
      }}
    >
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
    </motion.div>
  );
}

export { AnimatedWorkCard };
