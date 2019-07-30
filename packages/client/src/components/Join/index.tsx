import React, { useContext } from 'react';
import Onboarding from '@raise/onboarding';
import { AppContext } from '../App';
const Join = ({ history }) => {
  const { modalRefs }: any = useContext(AppContext);
  return (
    <Onboarding open={true} history={history} mountNode={modalRefs.current} />
  );
};

export default Join;
