import React from 'react';
import Layout from '../components/Layout';
import AboutPage from '../components/About';
import 'semantic-ui-css/semantic.min.css';

const Help = ({ pageContext: { data } }: any) => {
  return (
    <Layout>
      <div>
        <AboutPage data={data.butterPage} />
      </div>
    </Layout>
  );
};

export default Help;
