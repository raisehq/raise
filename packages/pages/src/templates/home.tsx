import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TagManager from '../components/TagManager';
import 'semantic-ui-css/semantic.min.css';
import AboveTheFold from '../components/AboveTheFold';
import BenefitsSection from '../components/BenefitsSection';
import InterestRateSection from '../components/InterestRateSection';

const IndexPage = ({ pageContext: { data } }: any) => {
  const {
    above_the_fold_section,
    benefits_section,
    interest_rate_section
  } = data.allButterPage.nodes[0];

  return (
    <Layout>
      <div>
        <SEO />
        <TagManager />
        <AboveTheFold data={above_the_fold_section} />
        <BenefitsSection benefits={benefits_section} />
        <InterestRateSection data={interest_rate_section} />
      </div>
    </Layout>
  );
};

export default IndexPage;
