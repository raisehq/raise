import React from 'react';
import { Button } from '@raisehq/components';
import { BasicLink } from '../Links';
import {
  FoldContainer,
  FoldBackground,
  BackgroundImage,
  MessageBox,
  TextContent,
  ButtonWrapper
} from './styles';
import Wave from './Wave';

const AboveTheFold = () => (
  <FoldBackground>
    <BackgroundImage />
    <FoldContainer>
      <MessageBox>
        <TextContent>
          <p>Crowdlending</p>you can believe in
        </TextContent>
        <ButtonWrapper>
          <Button
            title="Sign Up now"
            as={BasicLink}
            to={`${process.env.REACT_APP_HOST_URL}/join`}
            idAttr="btn_sign_up_raise"
            type="secondary"
            size="large"
            fullWidth
          />
        </ButtonWrapper>
      </MessageBox>
    </FoldContainer>
    <Wave />
  </FoldBackground>
);
export default AboveTheFold;
