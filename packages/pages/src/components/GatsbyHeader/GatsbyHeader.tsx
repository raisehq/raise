import React from 'react';
import { Header as RaiseHeader, Button } from '@raisehq/components';
import { isMobile } from 'react-device-detect';
import { LinkContainer, MobileLinkWrapper, ButtonWrapper } from './GatsbyHeader.styles';
import { BasicLink } from '../Links';

import routes from '../../routes';

const REACT_APP_HOST_URL = process.env.REACT_APP_HOST_URL; // eslint-disable-line

const mobileView = (
  <MobileLinkWrapper>
    <LinkContainer>
      <a href={`${REACT_APP_HOST_URL}/login`}>Login</a>
    </LinkContainer>
    <LinkContainer>
      <a href={`${REACT_APP_HOST_URL}/join`}>Sign Up</a>
    </LinkContainer>
  </MobileLinkWrapper>
);

const desktopView = (
  <ButtonWrapper>
    <Button
      text="Log in"
      as={BasicLink}
      to={`${REACT_APP_HOST_URL}/login`}
      type="tertiary"
      size="small"
    />
    <Button
      text="Sign up"
      as={BasicLink}
      to={`${REACT_APP_HOST_URL}/join`}
      type="secondary"
      size="small"
    />
  </ButtonWrapper>
);

const GatsbyHeader = () => {
  return <RaiseHeader {...routes}>{isMobile ? mobileView : desktopView}</RaiseHeader>;
};

export default GatsbyHeader;
