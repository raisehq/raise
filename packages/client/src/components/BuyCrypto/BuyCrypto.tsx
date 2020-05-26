import React from 'react';
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

export const IMAGES_PATH = `${process.env.REACT_APP_HOST_IMAGES}/images/`;

export const IframeStyles = {
  border: 0
};

const BuyCrypto = ({
  steps = [
    {
      number: 1,
      text: 'Choose the cryptocurrency and enter the amount you want to buy'
    },
    {
      number: 2,
      text: 'Enter your crypto wallet address, credit or debit card and ID details'
    },
    {
      number: 3,
      text: 'Proceed, and find your purchase in your wallet'
    }
  ]
}) => (
  <Container>
    <Wrapper>
      <BuyCryptoInstruction>
        <Title>Buy cryptocurrency with Credit Card</Title>
        <SubTitle>
          Use your credit or debit card to purchase cryptocurrency within minutes.
        </SubTitle>
        <InstructionBox>
          <InstructionBoxTitle>How to buy cryptocurrency</InstructionBoxTitle>
          <InstructionBoxSteps>
            {steps.map(({ number, text }) => (
              <InstructionRow key={number}>
                <NumberWrapper>
                  <span>{number}</span>
                </NumberWrapper>
                <InstructionText>{text}</InstructionText>
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
          src="https://dev-checkout.infra.cryptocoin.pro/order/raise?iframe=true"
          height="600"
          style={IframeStyles}
        />
      </CryptoProvider>
    </Wrapper>
  </Container>
);

export default BuyCrypto;
