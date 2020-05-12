import React, { useState } from 'react';
import { requestPage } from '../../helpers/butter';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { InvestingContainer } from './styles';
import InvestingSection from './InvestingSection';
import SignUp from '../SignUp';
import { useRootContext } from '../../contexts/RootContext';

const InvestingPage = () => {
  const {
    store: {
      auth: {
        login: { logged: isLogged }
      }
    }
  }: any = useRootContext();
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

    setSections(orderedSections);
  }, []);
  return (
    <InvestingContainer>
      {sections.map((section: any, index) => (
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
