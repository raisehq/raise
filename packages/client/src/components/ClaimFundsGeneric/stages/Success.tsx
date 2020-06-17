import React, { useContext } from 'react';
import { Button } from '@raisehq/components';
import useRouter from '../../../hooks/useRouter';
import { ClaimFundsResume, CardTitle, StyledLink } from '../styles';
import ClaimFundsGenericContext from '../Context';

const Processing = () => {
  const { monthlyLoanAPR }: any = useContext(ClaimFundsGenericContext);
  const { push } = useRouter();

  const toMainPage = () => {
    push('/');
  };

  return (
    <>
      <ClaimFundsResume>
        <CardTitle>Done!</CardTitle>
        <StyledLink
          to="/"
          title={`Don’t let your money sit in your wallet.
          Checkout the new loan offer at ${monthlyLoanAPR} APR and reinvest. `}
        />
      </ClaimFundsResume>
      <Button fullWidth onClick={() => toMainPage()} size="standard">
        Check new loan
      </Button>
    </>
  );
};

export default Processing;
