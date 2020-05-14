import React from 'react';
import styled from 'styled-components';
import { Header } from '@raisehq/components';
import { BasicLink } from './links';
import routes from '../routes';

const REACT_APP_HOST_URL = process.env.REACT_APP_HOST_URL; // eslint-disable-line

const FlexDiv = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkButton = styled(BasicLink)`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 12px 16px;
  border: 1px solid #b1b3b9;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: 16px;
  color: #3c4251;
  font-weight: bold;
`;

const AppButton = styled(LinkButton)`
  background: #00da9e;
  border: 0;
  border: 1px solid #00da9e;
  color: white;
  font-weight: bold;
  margin-left: 16px;
`;

const GatsbyHeader = () => {
  return (
    <Header {...routes}>
      <FlexDiv>
        <LinkButton to={`${REACT_APP_HOST_URL}/login`} title="Login" />
        <AppButton to={`${REACT_APP_HOST_URL}/join`} title="Sign Up" />
      </FlexDiv>
    </Header>
  );
};

export default GatsbyHeader;
