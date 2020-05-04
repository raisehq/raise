import React, { useState, useEffect } from 'react';
import Stages from './Stages';
import Register from './Register';
import Error from './Error';
import Success from './Success';

const getStage = (
  stage,
  SignUpId,
  onSignUp,
  checkEmail,
  setStage,
  bloomAction
) => {
  return stage.cata({
    Register: () => (
      <Register
        SignUpId={SignUpId}
        checkEmail={checkEmail}
        onSignUp={onSignUp}
        setStage={setStage}
        bloomAction={bloomAction}
      />
    ),
    Success: () => <Success />,
    Error: () => <Error setStage={setStage} />,
  });
};

const EmailSignUp = ({ SignUpId, onSignUp, checkEmail, bloomAction }: any) => {
  const [stage, setStage] = useState(Stages.Register);

  useEffect(() => {
    setStage(Stages.Register);
  }, []);

  return getStage(stage, SignUpId, onSignUp, checkEmail, setStage, bloomAction);
};

export default EmailSignUp;
