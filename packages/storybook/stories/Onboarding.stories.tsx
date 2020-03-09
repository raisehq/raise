import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Onboarding, Step } from '@raisehq/onboarding';

storiesOf('Onboarding', module).add('FullModalOpened', () => (
  <div style={{ padding: 10 }}>
    <Onboarding
      blur={false}
      open={true}
      history={{
        location: window.location,
      }}
      closeButton
      onClose={() => {}}
      pathRedirect={window.location.pathname}
    />
  </div>
));

storiesOf('Onboarding', module).add('Mini', () => (
  <div style={{ padding: 10 }}>
    <Onboarding
      blur={false}
      open={true}
      history={{
        location: window.location,
      }}
      closeButton
      onClose={() => {}}
      initStep={Step.StartMini}
      pathRedirect={window.location.pathname}
    />
  </div>
));
