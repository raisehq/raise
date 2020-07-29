import React from 'react';
import { AboutContainer, AboutTitle, AboutInformation } from './styles';

const About = ({ data }: any) => {
  return (
    <AboutContainer>
      <AboutTitle>{data.page_title}</AboutTitle>
      <AboutInformation dangerouslySetInnerHTML={{ __html: data.page_information }} />
    </AboutContainer>
  );
};

export default About;
