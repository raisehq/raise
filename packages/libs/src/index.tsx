import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Onboarding, Step } from '@raisehq/onboarding';

const Root = () => {
  const [close, setClose] = useState(false);

  return (
    <>
      <div style={{ padding: 10 }}>
        <Onboarding
          blur={false}
          open={true}
          history={{
            location: window.location
          }}
          closeButton={true}
          onClose={() => setClose(!close)}
          initStep={Step.SignUpWithEmailMini}
          pathRedirect={window.location.pathname}
        />
      </div>
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById('sigin-form'));
