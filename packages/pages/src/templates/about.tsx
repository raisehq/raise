import React from 'react';
import Layout from '../components/Layout';
import AboutPage from '../components/About';
import SEO from '../components/SEO';
import TagManager from '../components/TagManager';
import 'semantic-ui-css/semantic.min.css';

const About = ({ pageContext: { data } }: any) => {
  const aboutInfo = data.allButterPage.edges[0].node;
  return (
    <Layout>
      <div>
        <SEO />
        <TagManager />
        <AboutPage data={aboutInfo} />
      </div>
    </Layout>
  );
};

export default About;
