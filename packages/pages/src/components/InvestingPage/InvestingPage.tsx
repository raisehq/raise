import React from 'react';
import { PressPR } from '@raisehq/components';
import { InvestingContainer, PressReleases } from './styles';
import InvestingSection from './InvestingSection';
import SignUp from '../SignUp';

const InvestingPage = ({ data, articles }: any) => {
  const isLogged = false;

  const orderedSections = data.investing_section.sort(
    // eslint-disable-next-line
    (a: { section_order: number }, b: { section_order: number }) =>
      a.section_order > b.section_order ? 1 : -1
  );
  data.sub_investing_section.forEach((sub: any) => {
    const index = sub.section_number;
    if (orderedSections[index].subSection) {
      orderedSections[index].subSection.push(sub);
    } else {
      orderedSections[index].subSection = [];
      orderedSections[index].subSection.push(sub);
    }
  });
  orderedSections.forEach((section: any) => {
    const index = section.section_order;
    if (orderedSections[index].subSection) {
      orderedSections[index].subSection = orderedSections[index].subSection.sort(
        // eslint-disable-next-line
        (a: { sub_sub_order: number }, b: { sub_sub_order: number }) =>
          a.sub_sub_order > b.sub_sub_order ? 1 : -1
      );
    }
  });

  if (articles && articles.length > 0) {
    orderedSections.splice(1, 0, {
      component: (
        <PressReleases>
          <PressPR data={articles} />
        </PressReleases>
      ),
      section_order: 1
    });
  }

  if (!isLogged) {
    orderedSections.splice(3, 0, {
      component: <SignUp id="Investing_signup" />,
      section_order: 3
    });
    orderedSections.push({
      component: <SignUp id="Investing_signup" />,
      section_order: orderedSections.length
    });
  }

  const sections: any = orderedSections;

  return (
    <InvestingContainer>
      {sections.map((section: any, index: any) => (
        <InvestingSection
          key={section.section_title}
          section={section}
          sectionIndex={index}
          length={sections.length}
        />
      ))}
    </InvestingContainer>
  );
};

export default InvestingPage;
