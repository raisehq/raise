import React from 'react';
import { SignUp } from '@raisehq/components';
import { InvestingSignUpContainer } from './styles';
import { checkEmail } from '../../services/auth';
import { signUp } from '../../services/user';
import { bloomSignIn, redirectFromBloomApp } from '../../services/kyc';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';
import useRouter from '../../hooks/useRouter';

const SignUpWrapper = ({ id }: any) => {
  const tagManager = useGoogleTagManager(id);
  const { history } = useRouter();

  const onSignUp = async credentials => {
    try {
      tagManager.sendEventCategory('Signup', TMEvents.Click, `${id}_attempt`, history.location);
      console.log('credentials:::: ', credentials);
      const signup = await signUp({
        ...credentials,
        accounttype_id: 2
      });

      if (signup) {
        tagManager.sendEventCategory('Signup', TMEvents.Submit, `${id}_success`, history.location);
        // TODO: set to confirm??? what to do?
        return true;
      }

      return false;
    } catch (error) {
      tagManager.sendEventCategory('Signup', TMEvents.Submit, `${id}_error`, history.location);
      console.log('something went wrong');
      return false;
    }
  };

  const onBloomSignUp = token => {
    window.location.href = `${process.env.REACT_APP_HOST_URL}/login/bloom/${token}`;
  };

  return (
    <InvestingSignUpContainer>
      <SignUp
        onSignUp={onSignUp}
        checkEmail={checkEmail}
        SignUpId={id}
        onBloomSignUp={onBloomSignUp}
        bloomSignIn={bloomSignIn}
        redirectFromBloomApp={redirectFromBloomApp}
      />
    </InvestingSignUpContainer>
  );
};

export default SignUpWrapper;
