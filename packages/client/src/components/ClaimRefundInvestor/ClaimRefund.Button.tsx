import React, { useContext } from 'react';
import { RefundButton } from './ClaimRefund.styles';
import ClaimRefundContext from './ClaimRefund.Context';
import { InvestModalProps } from '../../interfaces/Invest';

const ClaimRefundCTA: React.FC<InvestModalProps> = ({ loan }) => {
  const { openModal } = useContext(ClaimRefundContext);

  return <RefundButton onClick={() => openModal(loan)}>get refund</RefundButton>;
};

export default ClaimRefundCTA;
