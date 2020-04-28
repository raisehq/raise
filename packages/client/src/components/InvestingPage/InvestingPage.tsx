import React, { useState } from 'react';
import { requestPage } from '../../helpers/butter';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { InvestingContainer } from './styles';
import InvestingSection from './InvestingSection';

const InvestingPage = () => {
  const [sections, setSections] = useState([]);

  // TODO: get buttercms information
  useAsyncEffect(async () => {
    const butterSections = await requestPage('page_sections', 'investing');
    console.log('butter sections:: ', butterSections);
    const orderedSections = butterSections.investingSection.sort((a, b) =>
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
        orderedSections[index].subSection = orderedSections[index].subSection.sort((a, b) =>
          a.sub_sub_order > b.sub_sub_order ? 1 : -1
        );
      }
    });
    console.log('sections:: ', orderedSections);
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
