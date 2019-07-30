import React from 'react';
import Onboarding from '@raise/onboarding';
import { getModalRoot } from '../../index';

const Join = ({ history }) => (
  <Onboarding
    open={true}
    history={history}
    mountNode={getModalRoot()}
    blur={true}
  />
);

export default Join;
