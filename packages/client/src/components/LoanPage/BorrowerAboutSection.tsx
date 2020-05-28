import React from 'react';
import { AboutBorrower } from '@raisehq/components';
import {
  BorrowerAboutContainer,
  BorrowerInfoContainer,
  BorrowerDescription,
  BorrowerInfoTitle,
  InvestButton,
  ButtonWrapper,
  BorrowerTeam,
  Side
} from './styles';

const BorrowerAbout = ({ borrowerInfo, isLogged, userActivated }) => {
  const onInvestClick = () => {
    if (!isLogged) {
      return '#loanofmonth_signup_email';
    }
    if (!userActivated) {
      return '/kyc';
    }
    return '#invest';
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
        <Side>
          <BorrowerTeam members={borrowerInfo.members} />
          <AboutBorrower borrowerInfo={borrowerInfo} />
        </Side>
      </BorrowerInfoContainer>
      <ButtonWrapper>
        <a href={onInvestClick()}>
          <InvestButton
            text={getButtonName()}
            disabled={false}
            onClick={() => {}}
            idAttr="btn-loanmonth-invest"
            type="primary"
            size="large"
            fullWidth
          />
        </a>
      </ButtonWrapper>
    </BorrowerAboutContainer>
  );
};
export default BorrowerAbout;
