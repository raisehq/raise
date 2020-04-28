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
  console.log('section:::: ', section.subSection);
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
        <WaveSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#F9F9F9"
            fillOpacity="1"
            d="M0,192L40,181.3C80,171,160,149,240,160C320,171,400,213,480,208C560,203,640,149,720,160C800,171,880,245,960,234.7C1040,224,1120,128,1200,101.3C1280,75,1360,117,1400,138.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          />
        </WaveSVG>
      )}
    </InvestingSectionContainer>
  );
};

export default InvestingSection;
