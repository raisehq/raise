import React from 'react';
import Onboarding from '@raisehq/onboarding';
import { useAppContext } from '../../contexts/AppContext';

const Join = ({ history }: any) => {
  const { modalRefs }: any = useAppContext();
  return <Onboarding open history={history} mountNode={modalRefs.current} blur />;
};

export default Join;
