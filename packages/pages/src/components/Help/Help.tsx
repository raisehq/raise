import React from 'react';
import {
  HelpContainer,
  TitleSection,
  HelpTitlePage,
  HelpSubtitlePage,
  ContentContainer,
  HelpMenu,
  HelpContent,
  HelpSection,
  SectionTitle,
  SectionInfo,
  Anchor
} from './styles';

const Help = ({ data }: any) => {
  console.log('data::: ', data);

  const getHelpSections = () => {
    const sections = data.help_section.map((section: any) => {
      const id = section.section_title.trim(' ');
      return (
        <HelpSection id={id} key={id}>
          <SectionTitle>{section.section_title}</SectionTitle>
          <SectionInfo dangerouslySetInnerHTML={{ __html: section.section_information }} />
        </HelpSection>
      );
    });
    return sections;
  };

  const getMenuAnchors = () => {
    const menuSections = data.help_section.map((section: any) => {
      const id = section.section_title.trim(' ');
      return (
        <Anchor key={id} href={`#${id}`}>
          {section.section_title}
        </Anchor>
      );
    });
    return menuSections;
  };

  return (
    <HelpContainer>
      <TitleSection>
        <HelpTitlePage>{data.help_page_title}</HelpTitlePage>
        <HelpSubtitlePage>{data.help_page_subtitle}</HelpSubtitlePage>
      </TitleSection>
      <ContentContainer>
        <HelpMenu>{getMenuAnchors()}</HelpMenu>
        <HelpContent>{getHelpSections()}</HelpContent>
      </ContentContainer>
    </HelpContainer>
  );
};

export default Help;
