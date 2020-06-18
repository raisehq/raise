import React from 'react';
import Layout from '../components/Layout';
import InvestingPage from '../components/InvestingPage';
import SEO from '../components/SEO';
import TagManager from '../components/TagManager';
import 'semantic-ui-css/semantic.min.css';
import AboveTheFold from '../components/AboveTheFold';
import BenefitsSection from '../components/BenefitsSection';
import InterestRateSection from '../components/InterestRateSection';

const IndexPage = ({ pageContext: { data, press, benefits, interestRateSection } }: any) => {
  const investSections = data.allButterPage.nodes[0];
  const { articles } = press.allButterPage.edges[0].node;
  const benefitsArray = benefits.allButterCollection.edges[0].node.value;
  const interestRateArray = interestRateSection.allButterCollection.edges[0].node.value[0];

  const flattenedArticles = articles.map((article: any) => article.press_release);

  return (
    <Layout>
      <div>
        <SEO />
        <TagManager />
        <AboveTheFold />
        <BenefitsSection benefits={benefitsArray} />
        <InterestRateSection data={interestRateArray} />
        <InvestingPage data={investSections} articles={flattenedArticles} />
      </div>
    </Layout>
  );
};

export default IndexPage;
