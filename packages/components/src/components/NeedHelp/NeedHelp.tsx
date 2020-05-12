import React from 'react';
import {
  NeedHelpContainer,
  NeedHelpTitle,
  NeedHelpParagraph,
  NeedHelpButton,
  Link,
} from './styles';

const NeedHelp = () => {
  return (
    <NeedHelpContainer>
      <NeedHelpTitle>Need help to invest?</NeedHelpTitle>
      <NeedHelpParagraph>
        Investing with Raise is very easy. Login and make sure you’ve verified
        your account successfully. Check that you have enough balance in your
        wallet: Ether, DAI, USDC or USDT to start investing.
        <br />
        If you are experiencing any problem or would like our team to assist
        you, use our live chat or send us an email to{' '}
        <Link href="mailto:help@raise.it">help@raise.it</Link>.
      </NeedHelpParagraph>
      <NeedHelpButton
        disabled={false}
        onClick={() => null}
        idAttr="help-learn-more"
        type="quaternary"
        size="small"
        fullWidth={false}
        text="Learn more"
      />
    </NeedHelpContainer>
  );
};

export default NeedHelp;
