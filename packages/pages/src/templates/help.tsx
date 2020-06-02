import React from 'react';
import Layout from '../components/Layout';
import HelpPage from '../components/Help';
import SEO from '../components/SEO';
import TagManager from '../components/TagManager';
import 'semantic-ui-css/semantic.min.css';

const Help = ({ pageContext: { data } }: any) => {
  return (
    <Layout>
      <div>
        <SEO />
        <TagManager />
        <HelpPage data={data.butterPage} />
      </div>
    </Layout>
  );
};

export default Help;
