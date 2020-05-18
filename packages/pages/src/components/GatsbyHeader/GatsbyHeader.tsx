import React from 'react';
import { Header as RaiseHeader, Button } from '@raisehq/components';
import { FlexDiv } from './GatsbyHeader.styles';
import { BasicLink } from '../links';
import routes from '../../routes';

const REACT_APP_HOST_URL = process.env.REACT_APP_HOST_URL; // eslint-disable-line

const GatsbyHeader = () => {
  return (
    <RaiseHeader {...routes}>
      <FlexDiv>
        <Button
          title="Log in"
          as={BasicLink}
          to={`${REACT_APP_HOST_URL}/login`}
          type="tertiary"
          size="standard"
        />
        <Button
          title="Sign up"
          as={BasicLink}
          to={`${REACT_APP_HOST_URL}/join`}
          type="secondary"
          size="standard"
        />
      </FlexDiv>
    </RaiseHeader>
  );
};

export default GatsbyHeader;
