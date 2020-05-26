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
          <Title>Buy cryptocurrency with Credit Card</Title>
          <SubTitle>
            Use your credit or debit card to purchase cryptocurrency within minutes.
          </SubTitle>
          <InstructionBox>
            <InstructionBoxTitle>How to buy cryptocurrency</InstructionBoxTitle>
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
            src="https://dev-checkout.infra.cryptocoin.pro/order/raise?iframe=true"
            height="600"
            style={IframeStyles}
          />
        </CryptoProvider>
      </Wrapper>
    </Container>
  );
};

export default BuyCrypto;
