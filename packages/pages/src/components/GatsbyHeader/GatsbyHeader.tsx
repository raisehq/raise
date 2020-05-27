import React from 'react';
import { Header as RaiseHeader, Button } from '@raisehq/components';
import { LinkContainer, MobileLinkWrapper, ButtonWrapper } from './GatsbyHeader.styles';
import { BasicLink } from '../Links';

import routes from '../../routes';

const REACT_APP_HOST_URL = process.env.GATSBY_REACT_APP_HOST_URL; // eslint-disable-line

const GatsbyHeader = () => {
  return (
    <RaiseHeader {...routes}>
      <MobileLinkWrapper>
        <LinkContainer>
          <a href={`${REACT_APP_HOST_URL}/login`}>Login</a>
        </LinkContainer>
        <LinkContainer>
          <a href={`${REACT_APP_HOST_URL}/join`}>Sign Up</a>
        </LinkContainer>
      </MobileLinkWrapper>
      <ButtonWrapper>
        <Button
          title="Log in"
          as={BasicLink}
          to={`${REACT_APP_HOST_URL}/login`}
          type="tertiary"
          size="small"
        />
        <Button
          title="Sign up"
          as={BasicLink}
          to={`${REACT_APP_HOST_URL}/join`}
          type="secondary"
          size="small"
        />
      </ButtonWrapper>
    </RaiseHeader>
  );
};

export default GatsbyHeader;
