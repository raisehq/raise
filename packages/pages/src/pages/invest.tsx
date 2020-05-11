import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import InvestingPage from '../components/InvestingPage';
import SEO from '../components/seo';
import 'semantic-ui-css/semantic.min.css';

const IndexPage = ({ data }: any) => {
  const investSections = data.allButterPage.nodes[0];
  return (
    <Layout>
      <div>
        <SEO title="Home" />
        <InvestingPage data={investSections} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allButterPage(filter: { slug: { eq: "investing" } }) {
      nodes {
        internal {
          content
          description
          ignoreType
          mediaType
        }
        investing_section {
          image_right_position
          important_information
          learn_more_url
          section_description
          section_image
          section_order
          section_title
        }
        sub_investing_section {
          section_number
          sub_sub_icon
          sub_sub_text
          sub_sub_order
        }
        page_type
      }
    }
  }
`;

export default IndexPage;
