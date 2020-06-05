import React, { useState } from 'react';
import {
  BuyCryptoInstruction,
  Title,
  SubTitle,
  InstructionRow,
  NumberWrapper,
  InstructionText,
  InstructionBox,
  InstructionBoxTitle,
  InstructionBoxSteps,
  Container,
  CryptoProvider,
  PaymentBox,
  PaymentProviders,
  PaymentDescription,
  PaymentImage,
  Wrapper
} from './styles';
import { requestPage } from '../../helpers/butter';
import useAsyncEffect from '../../hooks/useAsyncEffect';

export const IMAGES_PATH = `${process.env.REACT_APP_HOST_IMAGES}/images/`;

export const IframeStyles = {
  border: 0
};

const BuyCrypto = () => {
  const [steps, setSteps] = useState([]);

  useAsyncEffect(async () => {
    try {
      const response = await requestPage('kyc_instructions', 'buy-crypto-instructions');
      setSteps(response.steps);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <Container>
      <Wrapper>
        <BuyCryptoInstruction>
          <Title>Buy crypto with credit card</Title>
          <SubTitle>
            Purchase ETH, DAI, USDC and USDT in minutes so you can go back to investing
          </SubTitle>
          <InstructionBox>
            <InstructionBoxTitle>How it works</InstructionBoxTitle>
            <InstructionBoxSteps>
              {steps.map((item: any, index) => (
                <InstructionRow key={item.step}>
                  <NumberWrapper>
                    <span>{item.step}</span>
                  </NumberWrapper>
                  <InstructionText>{item.step_description}</InstructionText>
                </InstructionRow>
              ))}
            </InstructionBoxSteps>
          </InstructionBox>
          <PaymentBox>
            <PaymentProviders>
              <PaymentImage src={`${IMAGES_PATH}visa-logo.svg`} alt="visa" />

              <PaymentImage src={`${IMAGES_PATH}mastercard-logo.svg`} alt="mastercad" />
            </PaymentProviders>
            <PaymentDescription>
              Visa & Mastercard are accepted as well as some virtual and prepaid cards. For fiat
              currencies, we accept USD, EUR, and GBP.
            </PaymentDescription>
          </PaymentBox>
        </BuyCryptoInstruction>
        <CryptoProvider>
          <iframe
            title="buy-crypto"
            src={process.env.REACT_APP_BUY_CRYPTO_PROVIDER}
            height="600"
            width="350"
            style={IframeStyles}
          />
        </CryptoProvider>
      </Wrapper>
    </Container>
  );
};

export default BuyCrypto;
