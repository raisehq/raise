import React from 'react';

import { storiesOf } from '@storybook/react';
import Onboarding from '@raise/onboarding';

storiesOf('Raise UI', module).add('Onboarding', () => (
  <Onboarding open={true} history={{ location: { pathname: '' } }} />
));
