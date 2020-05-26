import React from 'react';
import Layout from '../components/Layout';
import InvestingPage from '../components/InvestingPage';
import SEO from '../components/SEO';
import TagManager from '../components/TagManager';
import 'semantic-ui-css/semantic.min.css';

const IndexPage = ({ pageContext: { data } }: any) => {
  const investSections = data.allButterPage.nodes[0];

  return (
    <Layout>
      <div>
        <SEO />
        <TagManager />
        <InvestingPage data={investSections} />
      </div>
    </Layout>
  );
};

export default IndexPage;
