import React from 'react';
import { Container, Box, IconBox, TextBox, BoxContainer } from './styles';
import VerifyAccount from '../VerifyAccount';

const KycExtraInformation = () => (
  <Container>
    <BoxContainer>
      <Box>
        <IconBox name="database" size="big" />
        <TextBox>
          Your personal information will be safe and validated by a KYC provider. Raise doesn’t
          store your data.
        </TextBox>
      </Box>
      <Box>
        <IconBox name="address card" size="big" />
        <TextBox>You will only be required to upload an ID document and selfie.</TextBox>
      </Box>
      <Box>
        <IconBox name="fast forward" size="big" />
        <TextBox>This process is fast and easy, it only takes less than five minute. </TextBox>
      </Box>
      <Box>
        <IconBox name="shield alternate" size="big" />
        <TextBox>Verifying your identity prevents criminal activity such as money laundry.</TextBox>
      </Box>
    </BoxContainer>
    <VerifyAccount />
  </Container>
);

export default KycExtraInformation;
