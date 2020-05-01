import React from 'react';
import { Container, Box, IconBox, TextBox, BoxContainer } from './styles';
import VerifyAccount from '../VerifyAccount';

const KycExtraInformation = () => (
  <Container>
    <BoxContainer>
      <Box>
        <IconBox name="fast forward" size="big" />
        <TextBox>Your information is secured, Raise don’t store any personal data. </TextBox>
      </Box>
      <Box>
        <IconBox name="address card" size="big" />
        <TextBox>Be prepared, we will need a photo of your ID and a selfie with it. </TextBox>
      </Box>
      <Box>
        <IconBox name="fast forward" size="big" />
        <TextBox>Super fast and easy. You will only need 5 minutes to complete. </TextBox>
      </Box>
      <Box>
        <IconBox name="shield alternate" size="big" />
        <TextBox>This is a measure to prevent criminal activity, such as money laundry. </TextBox>
      </Box>
    </BoxContainer>
    <VerifyAccount />
  </Container>
);

export default KycExtraInformation;
