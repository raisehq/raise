import React from 'react';
import { LoanComparatorChart } from '@raisehq/components';
import {
  APRSectionContainer,
  ComparatorInfo,
  BorrowerInfoTitle,
  BorrowerDescription,
  InvestButton
} from './styles';

const APRComparatorSection = ({ companies, isLogged, userActivated, history }: any) => {
  const onInvestClick = () => {
    if (!isLogged) {
      history.push(`/#Loanofmonth_signup`);
    } else if (!userActivated) {
      history.push(`/kyc`);
    } else {
      history.push(`/#invest`);
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
    <APRSectionContainer>
      <LoanComparatorChart companies={companies} />
      <ComparatorInfo>
        <BorrowerInfoTitle>Feel free to compare</BorrowerInfoTitle>
        <BorrowerDescription>
          But don&apos;t just take our word for it—compare us first so you can make the right
          decision. This lets you see how much you would get for your money at this exact moment
          using some of the largest investment platforms, in comparison with Raise&apos;s current
          APR.
        </BorrowerDescription>
        <InvestButton
          text={getButtonName()}
          disabled={false}
          onClick={onInvestClick}
          idAttr="btn-loanmonth-invest"
          type="secondary"
          size="large"
        />
      </ComparatorInfo>
    </APRSectionContainer>
  );
};

export default APRComparatorSection;
