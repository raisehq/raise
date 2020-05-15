import React from 'react';
import { Header, Button } from '@raisehq/components';
import { FlexDiv } from './Header.styles';
import { BasicLink } from '../links';
import routes from '../../routes';

const REACT_APP_HOST_URL = process.env.REACT_APP_HOST_URL; // eslint-disable-line

const GatsbyHeader = () => {
  return (
    <Header {...routes}>
      <FlexDiv>
        <Button
          text="Log in"
          title="Log in"
          as={BasicLink}
          to={`${REACT_APP_HOST_URL}/login`}
          type="tertiary"
          size="standard"
        />
        <Button
          text="Sign up"
          as={BasicLink}
          to={`${REACT_APP_HOST_URL}/join`}
          type="secondary"
          size="standard"
        />
      </FlexDiv>
    </Header>
  );
};

export default GatsbyHeader;
