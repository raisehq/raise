import React, { useState } from 'react';
import Layout from '../components/Layout';
import InvestingPage from '../components/InvestingPage';
import SEO from '../components/seo';
import 'semantic-ui-css/semantic.min.css';
const IndexPage = ({ pageContext: { data } }: any) => {
  const investSections = data.allButterPage.nodes[0];
  return (
    <Layout>
      <div>
        <SEO title="Raise.it" />
        <InvestingPage data={investSections} />
      </div>
    </Layout>
  );
};

export default IndexPage;
