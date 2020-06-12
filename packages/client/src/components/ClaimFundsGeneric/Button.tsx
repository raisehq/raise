import React, { useContext } from 'react';
import { Button } from '@raisehq/components';
import ClaimRefundContext from './Context';

const ClaimFundsGenericCTA = ({ buttonText, disabled }) => {
  const { openModal } = useContext(ClaimRefundContext);

  return (
    <Button
      disabled={disabled}
      onClick={() => openModal()}
      idAttr="withdraw-referral-bonus"
      text={buttonText}
      type="primary"
      size="small"
      fullWidth
    />
  );
};

export default ClaimFundsGenericCTA;
