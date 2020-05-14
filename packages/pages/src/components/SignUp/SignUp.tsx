import React from 'react';
import { SignUp } from '@raisehq/components';
import { InvestingSignUpContainer } from './styles';
import { checkEmail, verifyBloomLogin } from '../../services/auth';
import { signUp } from '../../services/user';
import { bloomSignIn, redirectFromBloomApp } from '../../services/kyc';
import useGoogleTagManager, { TMEvents } from '../../hooks/useGoogleTagManager';

import useCookie from '../../hooks/useCookie';
import LocalData from '../../helpers/localData';

const SignUpWrapper = ({ id }: any) => {
  // @ts-ignore
  const [, setAuthCookie] = useCookie('auth', {});
  // @ts-ignore
  const [, setuserCookie] = useCookie('user', {});

  const tagManager = useGoogleTagManager(id);

  const onSignUp = async (credentials: any) => {
    try {
      tagManager.sendEventCategory('Signup', TMEvents.Click, `${id}_attempt`);
      const signup = await signUp({
        ...credentials,
        accounttype_id: 2
      });

      if (signup) {
        tagManager.sendEventCategory('Signup', TMEvents.Submit, `${id}_success`);
        return true;
      }

      return false;
    } catch (error) {
      tagManager.sendEventCategory('Signup', TMEvents.Submit, `${id}_error`);
      console.error('[Signup][Error]', error);
      return false;
    }
  };

  const onBloomError = () => {
    tagManager.sendEventCategory('Signup', TMEvents.Submit, `${id}_bloom_error`);
  };

  const onBloomSignUp = (result: any) => {
    tagManager.sendEventCategory('Signup', TMEvents.Submit, `${id}_bloom_success`);

    const login = LocalData.get('firstLogin');

    if (login) {
      if (login === 'first') {
        LocalData.set('firstLogin', 'passed');
      }
    } else {
      LocalData.set('firstLogin', 'first');
    }
    LocalData.setObj('auth', {
      token: result.public_key,
      id: result.id,
      status: result.userstatus_id,
      type: result.accounttype_id
    });

    LocalData.setObj('user', result);

    setAuthCookie(
      {
        token: result.public_key,
        id: result.id,
        status: result.userstatus_id,
        type: result.accounttype_id
      },
      { domain: process.env.REACT_APP_COOKIE_DOMAIN }
    );

    setuserCookie(result, { domain: process.env.REACT_APP_COOKIE_DOMAIN });
    const redirect = window.location.pathname || '';
    window.location.href = `${process.env.REACT_APP_HOST_URL}${redirect}`;
    return true;
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
        isUserSignedUp={verifyBloomLogin}
        onBloomError={onBloomError}
      />
    </InvestingSignUpContainer>
  );
};

export default SignUpWrapper;
