import React from 'react';
import {
  InvestingSectionContainer,
  ImageContainer,
  InformationContainer,
  InfoTitle,
  InfoDescription,
  LearnMore,
  LearnMoreLink,
  LearnMoreIcon
} from './styles';

interface ISectionProps {
  section: any;
}

const InvestingSection: React.SFC<ISectionProps> = ({ section }: any) => {
  console.log('section:::: ', section);
  return (
    <InvestingSectionContainer>
      <InformationContainer>
        <InfoTitle>{section.section_title}</InfoTitle>
        <InfoDescription>{section.section_description}</InfoDescription>
        <LearnMore>
          <LearnMoreLink href={section.learn_more_url} target="_blank">
            Learn more
          </LearnMoreLink>
          <LearnMoreIcon />
        </LearnMore>
      </InformationContainer>
      <ImageContainer src={section.section_image} alt={section.section_title} />
    </InvestingSectionContainer>
  );
};

export default InvestingSection;
