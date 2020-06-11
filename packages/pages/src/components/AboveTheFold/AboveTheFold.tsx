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
  <FoldBackground id="background_color">
    <BackgroundImage id="background_image" />
    <FoldContainer>
      <MessageBox>
        <TextContent id="text_container">
          <h1>Investments you can believe in</h1>
          <h2>
            Raise is the investment platform that offers you attractive, secure investment
            opportunities at higher market returns—know where your money goes, and see exactly how
            it grows
          </h2>
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
