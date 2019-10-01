import React, { Fragment, useContext, useState, useCallback, useEffect } from 'react';
import { Icon, Input } from 'semantic-ui-react';
import * as _ from 'lodash';
import {
  OnboardHeader,
  OnboardInput,
  OnboardButton,
  CallToSignIn,
  Separator,
  OnboardLogo,
  MyRecapcha,
  GoogleCaptchaPolicies
} from '../styles';
import validations from '../validations';
import { AppContext } from '../App';

const Signin = () => {
  const {
    onSetStep,
    onSetCredentials,
    onLogin,
    error,
    setLoginError,
    credentials
  }: any = useContext(AppContext);

  const [errors, setErrors] = useState<{
    login: boolean;
    email: boolean;
  }>({
    login: false,
    email: false
  });
  const [recaptcha, setRecaptcha] = useState(null);

  const recaptchaRef: any = React.createRef();

  const onSetEmail = useCallback(
    _.debounce((e, data) => {
      setLoginError(false);
      const { value } = data;
      const validateEmail = validations.isEmail(value);
      validateEmail.fold(
        () => setErrors({ ...errors, email: true }),
        () => {
          setErrors({ ...errors, email: false });
          onSetCredentials('email', value);
        }
      );
    }, 800),
    []
  );

  const onSetPassword = e => {
    setLoginError(false);
    onSetCredentials('password', e.target.value);
  };

  const onKeyPress = event => {
    if (
      event.key === 'Enter' &&
      (!error && !errors.email && credentials.email && credentials.password)
    ) {
      onLoginCaptcha();
    }
  };

  useEffect(() => {
    if (recaptcha) {
      onLogin();
    }
  }, [recaptcha]);

  const onCaptchaCallback = async captchaResponse => {
    onSetCredentials('g-recaptcha-response', captchaResponse);
    setRecaptcha(captchaResponse);
  };

  const onCaptchaExpired = captchaResponse => {
    console.log('Captcha expired: ', captchaResponse);
    recaptchaRef.current.reset();
  };

  const onCaptchaErrored = captchaError => {
    console.error('Captcha error. You should check the network and retry: ', captchaError);
    recaptchaRef.current.reset();
  };

  const onLoginCaptcha = () => {
    recaptchaRef.current.reset();
    recaptchaRef.current.execute();
  };

  return (
    <Fragment>
      <OnboardHeader>
        Welcome to Raise <OnboardLogo />
      </OnboardHeader>
      <OnboardInput>
        <Input
          id="input-login"
          placeholder="Please enter you email address"
          onChange={onSetEmail}
          error={errors.email || error}
          onKeyPress={onKeyPress}
        />
        {errors.email && (
          <div className="errorText">
            This format doesn't look right. Make sure there aren't any typos.
          </div>
        )}
        <Icon size="big" name="mail" />
      </OnboardInput>
      <OnboardInput>
        <Input
          id="input-password"
          placeholder="Please enter your password"
          type="password"
          onChange={onSetPassword}
          error={error}
          onKeyPress={onKeyPress}
        />
        {error && <div className="errorText">Sorry, I can't find anyone with these details.</div>}
        <Icon size="big" name="lock" />
      </OnboardInput>
      <MyRecapcha
        ref={recaptchaRef}
        size="invisible"
        sitekey="6Lc9-rAUAAAAAH-rveEYo78h5rXiGnAVtsoE5rjc"
        render="explicit"
        onChange={onCaptchaCallback}
        onExpired={onCaptchaExpired}
        onErrored={onCaptchaErrored}
      />
      <OnboardButton
        id="btn-login"
        disabled={error || errors.email || !credentials.email || !credentials.password}
        onClick={onLoginCaptcha}
      >
        Log In
      </OnboardButton>
      <CallToSignIn>
        <button className="callToSignIn" onClick={onSetStep('Reset')}>
          Forgot password?
        </button>
      </CallToSignIn>
      <Separator />
      <CallToSignIn>
        You don't have an account?
        <button className="callToSignIn" onClick={onSetStep('Start')}>
          Get Started
        </button>
      </CallToSignIn>
      <GoogleCaptchaPolicies>
        This site is protected by reCAPTCHA and the Google{' '}
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and{' '}
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </GoogleCaptchaPolicies>
    </Fragment>
  );
};

export default Signin;
