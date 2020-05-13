import React from 'react';
import { AboutBorrower } from '@raisehq/components';
import {
  BorrowerAboutContainer,
  BorrowerInfoContainer,
  BorrowerDescription,
  BorrowerInfoTitle,
  InvestButton,
  ButtonWrapper
} from './styles';

const BorrowerAbout = ({ borrowerInfo, history, isLogged, userActivated }) => {
  console.log('history::: ', history);
  const onInvestClick = () => {
    if (!isLogged) {
      history.push(`${history.location.pathname}#Loanofmonth_signup`);
    } else if (!userActivated) {
      history.push(`/kyc`);
    } else {
      history.push(`${history.location.pathname}#invest`);
    }
  };

  const getButtonName = () => {
    if (!isLogged) {
      return 'Create account';
    }
    if (!userActivated) {
      return 'Verify account';
    }
    return 'Invest now';
  };

  return (
    <BorrowerAboutContainer>
      <BorrowerInfoTitle>About {borrowerInfo.companyDetails.companyName}</BorrowerInfoTitle>
      <BorrowerInfoContainer>
        <BorrowerDescription>{borrowerInfo.companyDetails.description}</BorrowerDescription>
        <AboutBorrower borrowerInfo={borrowerInfo} />
      </BorrowerInfoContainer>
      <ButtonWrapper>
        <InvestButton
          text={getButtonName()}
          disabled={false}
          onClick={onInvestClick}
          idAttr="btn-loanmonth-invest"
          type="primary"
          size="large"
          fullWidth
        />
      </ButtonWrapper>
    </BorrowerAboutContainer>
  );
};
export default BorrowerAbout;
