import React from 'react';
import {
  AboutContainer,
  AboutTitle,
  AboutInformation,
  JoinButton,
  TeamTitle,
  ButtonWrapper
} from './styles';
import Team from './Team';

const About = ({ data }: any) => {
  return (
    <AboutContainer>
      <AboutTitle>{data.page_title}</AboutTitle>
      <AboutInformation dangerouslySetInnerHTML={{ __html: data.page_information }} />
      <TeamTitle>Meet the theam</TeamTitle>
      <Team teamMembers={data.employee_profile} />
      <ButtonWrapper>
        <JoinButton
          text="Join the team"
          disabled={false}
          onClick={() => {
            window.open('https://angel.co/company/raiseit', '_blank');
          }}
          idAttr="btn_join_raise"
          type="secondary"
          size="large"
          fullWidth
        />
      </ButtonWrapper>
    </AboutContainer>
  );
};

export default About;
