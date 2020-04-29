import React from 'react';
import {
  InvestingSectionContainer,
  SectionImage,
  SectionImageContainer,
  InformationContainer,
  InfoTitle,
  InfoDescription,
  LearnMore,
  LearnMoreLink,
  ImportantInfoText,
  ImportantInfoContainer,
  TriangleRight,
  TriangleDown,
  Triangle,
  RightTriangle,
  InfoTitleMobile,
  SectionSubContainer,
  SubSectionContainer,
  SubSectionIcon,
  SubSectionText,
  SubSection,
  WaveSVG
} from './styles';

interface ISectionProps {
  section: any;
  length: number;
}

const InvestingSection: React.SFC<ISectionProps> = ({ section, length }: any) => {
  return (
    <InvestingSectionContainer position={section.section_order}>
      <InfoTitleMobile>{section.section_title}</InfoTitleMobile>
      <SectionSubContainer right={section.image_right_position}>
        <SectionImageContainer>
          <SectionImage src={section.section_image} alt={section.section_title} />
        </SectionImageContainer>
        <InformationContainer right={section.image_right_position}>
          <InfoTitle>{section.section_title}</InfoTitle>
          <InfoDescription dangerouslySetInnerHTML={{ __html: section.section_description }} />
          {section.important_information !== '' && (
            <ImportantInfoContainer>
              <ImportantInfoText>{section.important_information}</ImportantInfoText>
            </ImportantInfoContainer>
          )}
          {section.subSection && (
            <SubSectionContainer>
              {section.subSection.map((subSection, index) => (
                <SubSection key={index}>
                  <SubSectionIcon src={subSection.sub_sub_icon} />
                  <SubSectionText>{subSection.sub_sub_text}</SubSectionText>
                </SubSection>
              ))}
            </SubSectionContainer>
          )}
          {section.learn_more_url !== '' && (
            <LearnMore>
              <LearnMoreLink href={section.learn_more_url} target="_blank">
                Learn more
              </LearnMoreLink>
              <TriangleRight>
                <RightTriangle />
              </TriangleRight>
            </LearnMore>
          )}
        </InformationContainer>
      </SectionSubContainer>
      {section.section_order === 0 && (
        <TriangleDown>
          <Triangle />
        </TriangleDown>
      )}
      {section.section_order % 2 === 0 && section.section_order + 1 !== length && (
        <WaveSVG src={`${process.env.REACT_APP_HOST_IMAGES}/images/waves.svg`} alt="wave" />
      )}
    </InvestingSectionContainer>
  );
};

export default InvestingSection;
