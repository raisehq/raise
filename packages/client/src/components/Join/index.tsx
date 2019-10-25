import React, { useContext } from 'react';
import Onboarding from '@raisehq/onboarding';
import AppContext from '../AppContext';

const Join = ({ history }: any) => {
  const { modalRefs }: any = useContext(AppContext);
  return <Onboarding open history={history} mountNode={modalRefs.current} blur />;
};

export default Join;
