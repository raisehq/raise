import React, { useState } from 'react';
import { PressPR } from '@raisehq/components';
import { requestPage, getCollection } from '../../helpers/butter';
import useAsyncEffect from '../../hooks/useAsyncEffect';
import { InvestingContainer, PressReleases } from './styles';
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
    const pressReleases = await getCollection('publisher_releases', {});

    const orderedSections = butterSections.investingSection.sort(
      // eslint-disable-next-line
      (a: { section_order: number }, b: { section_order: number }) =>
        a.section_order > b.section_order ? 1 : -1
    );
    butterSections.subInvestingSection.forEach((sub) => {
      const index = sub.section_number;
      if (orderedSections[index].subSection) {
        orderedSections[index].subSection.push(sub);
      } else {
        orderedSections[index].subSection = [];
        orderedSections[index].subSection.push(sub);
      }
    });
    orderedSections.forEach((section) => {
      const index = section.section_order;
      if (orderedSections[index].subSection) {
        orderedSections[index].subSection = orderedSections[index].subSection.sort(
          // eslint-disable-next-line
          (a: { sub_sub_order: number }, b: { sub_sub_order: number }) =>
            a.sub_sub_order > b.sub_sub_order ? 1 : -1
        );
      }
    });

    if (pressReleases && pressReleases.length > 0) {
      orderedSections.splice(1, 0, {
        component: (
          <PressReleases>
            <PressPR data={pressReleases} />
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

    setSections(orderedSections);
    window.scrollTo(0, 0);
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
