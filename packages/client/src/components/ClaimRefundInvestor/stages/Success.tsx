import React from 'react';
import { Button } from '@raisehq/components';
import useRouter from '../../../hooks/useRouter';
import { ClaimFundsResume, CardTitle, CardSubtitle } from '../ClaimRefund.styles';

const Processing = () => {
  const { push } = useRouter();

  const toMainPage = () => {
    push('/');
  };

  return (
    <>
      <ClaimFundsResume>
        <CardTitle>The funds have been transferred to your account</CardTitle>
        <CardSubtitle>Check your active loans details in your dashboard</CardSubtitle>
      </ClaimFundsResume>
      <Button fullWidth onClick={() => toMainPage()} size="standard">
        Check our next loan
      </Button>
    </>
  );
};

export default Processing;
