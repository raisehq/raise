import React, { useState } from 'react';
import { requestPage } from '../../helpers/butter';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { InvestingContainer } from './styles';
import InvestingSection from './InvestingSection';

const InvestingPage = () => {
  const [sections, setSections] = useState([]);

  useAsyncEffect(async () => {
    const butterSections = await requestPage('page_sections', 'investing');

    const orderedSections = butterSections.investingSection.sort(
      // eslint-disable-next-line
      (a: { section_order: number }, b: { section_order: number }) =>
        a.section_order > b.section_order ? 1 : -1
    );
    butterSections.subInvestingSection.forEach(sub => {
      const index = sub.section_number;
      if (orderedSections[index].subSection) {
        orderedSections[index].subSection.push(sub);
      } else {
        orderedSections[index].subSection = [];
        orderedSections[index].subSection.push(sub);
      }
    });
    orderedSections.forEach(section => {
      const index = section.section_order;
      if (orderedSections[index].subSection) {
        orderedSections[index].subSection = orderedSections[index].subSection.sort(
          // eslint-disable-next-line
          (a: { sub_sub_order: number }, b: { sub_sub_order: number }) =>
            a.sub_sub_order > b.sub_sub_order ? 1 : -1
        );
      }
    });
    setSections(orderedSections);
  }, []);

  return (
    <InvestingContainer>
      {sections.map((section, index) => (
        <InvestingSection key={index} section={section} length={sections.length} />
      ))}
    </InvestingContainer>
  );
};

export default InvestingPage;