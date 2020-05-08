import React, { useState } from 'react';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { InvestingContainer } from './styles';
import InvestingSection from './InvestingSection';
import SignUp from '../SignUp';

const InvestingPage = ({ data }: any) => {
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

  console.log('sections with statics ::: ', orderedSections);
  const sections: any = orderedSections;

  console.log('sections length:::: ', sections.length);
  return (
    <InvestingContainer>
      {sections.map((section: any, index: any) => (
        <InvestingSection
          key={index}
          section={section}
          sectionIndex={index}
          length={sections.length}
        />
      ))}
    </InvestingContainer>
  );
};

export default InvestingPage;
