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
    setSections(butterSections.investingSection);
  }, []);

  return (
    <InvestingContainer>
      {sections.map(section => (
        <InvestingSection section={section} />
      ))}
    </InvestingContainer>
  );
};

export default InvestingPage;
