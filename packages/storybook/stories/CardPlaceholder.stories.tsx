import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { CardPlaceholder } from '@raisehq/components';

storiesOf('CardPlaceholder', module).add('Basic', () => (
  <div style={{ padding: 10 }}>
    <CardPlaceholder />
  </div>
));
