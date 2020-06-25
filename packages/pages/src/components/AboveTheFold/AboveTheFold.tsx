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

const AboveTheFold = ({ data }) => {
  return (
    <FoldBackground id="background_color">
      <BackgroundImage id="background_image" />
      <FoldContainer>
        <MessageBox>
          <TextContent id="text_container">
            <h1>{data.title}</h1>
            <h2>{data.subtitle}</h2>
          </TextContent>
          <ButtonWrapper>
            <Button
              title="Get started"
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
};
export default AboveTheFold;
