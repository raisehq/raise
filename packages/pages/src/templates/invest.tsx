import React from 'react';
import Layout from '../components/Layout';
import InvestingPage from '../components/InvestingPage';
import SEO from '../components/SEO';
import 'semantic-ui-css/semantic.min.css';

const IndexPage = ({ pageContext: { data } }: any) => {
  const investSections = data.allButterPage.nodes[0];
  return (
    <Layout>
      <div>
        <SEO />
        <InvestingPage data={investSections} />
      </div>
    </Layout>
  );
};

export default IndexPage;
