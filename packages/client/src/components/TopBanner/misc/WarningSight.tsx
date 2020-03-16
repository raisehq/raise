import React from 'react';
import { Icon } from 'semantic-ui-react';
import { WarningSignWrapper, BlackFill } from '../KycTopBanner.styles';

export const WarningSight = () => (
  <WarningSignWrapper>
    <div>
      <BlackFill />
    </div>
    <div>
      <Icon name="warning sign" inverted />
    </div>
  </WarningSignWrapper>
);
