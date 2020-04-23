import React from 'react';
import { useHistory } from 'react-router-dom';
import { ConfirmButton, Content } from './InvestModal.styles';
import { useSidebarContext } from '../../contexts/SidebarContext';

const VerifyKycState = () => {
  const {
    actions: { setDisplay }
  } = useSidebarContext();
  const history: any = useHistory();

  const toKyc = () => {
    setDisplay(false);
    history.push('/kyc');
  };

  return (
    <Content>
      <h3>Please verify your account to continue.</h3>
      <ConfirmButton onClick={toKyc}>Verify</ConfirmButton>
    </Content>
  );
};

export default VerifyKycState;
