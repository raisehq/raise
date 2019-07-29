import React, { Fragment, useContext, useState, useCallback } from 'react';
import { Icon, Input } from 'semantic-ui-react';
import * as _ from 'lodash';
import {
  OnboardHeader,
  OnboardInput,
  OnboardButton,
  CallToSignIn,
  Separator
} from '../styles';
import validations from '../validations';
import { AppContext } from '../App';

const Signin = () => {
  const { onSetStep, onSetCredentials, onLogin, error, setLoginError, credentials }: any = useContext(
    AppContext
  );

  const [errors, setErrors] = useState<{
    login: boolean;
    email: boolean;
  }>({
    login: false,
    email: false
  });

  const onSetEmail = useCallback(_.debounce((e, data) => {
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
  }, 800), []);

  const onSetPassword = e => {
    setLoginError(false);
    onSetCredentials('password', e.target.value);
  }
  console.log('checklist', (error || errors.email || !credentials.email || !credentials.password))
  console.log(error, errors.email, credentials.email, credentials.password)

  return (
    <Fragment>
      <OnboardHeader>Welcome to Raise</OnboardHeader>
      <OnboardInput>
        <Input
          data-testid="loginEmail"
          placeholder="Please enter you email address"
          onChange={onSetEmail}
          error={errors.email || error}
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
          data-testid="loginPassword"
          placeholder="Please enter your password"
          type="password"
          onChange={onSetPassword}
          error={error}
        />
        {error && (
          <div className="errorText">Sorry, I can't find anyone with these details.</div>
        )}
        <Icon size="big" name="lock" />
      </OnboardInput>
      <OnboardButton disabled={(error || errors.email || !credentials.email || !credentials.password )} onClick={onLogin}>Log In</OnboardButton>
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
    </Fragment>
  );
};

export default Signin;
