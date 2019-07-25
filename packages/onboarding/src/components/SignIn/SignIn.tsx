import React, { Fragment, useContext, useState } from 'react';
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
  const { onSetStep, onSetCredentials, onLogin, error }: any = useContext(
    AppContext
  );

  const [errors, setErrors] = useState<{
    login: boolean;
    email: boolean;
  }>({
    login: false,
    email: false
  });

  const onSetEmail = _.debounce((e, data) => {
    const { value } = data;
    const validateEmail = validations.isEmail(value);

    validateEmail.fold(
      () => setErrors({ ...errors, email: true }),
      () => {
        setErrors({ ...errors, email: false });
        onSetCredentials('email', value);
      }
    );
  }, 800);

  const onSetPassword = e => onSetCredentials('password', e.target.value);

  return (
    <Fragment>
      <OnboardHeader>Welcome to Hero</OnboardHeader>
      <OnboardInput>
        <Input
          data-testid="loginEmail"
          placeholder="Please enter you email address"
          onChange={onSetEmail}
          error={errors.email || error}
        />
        {errors.email && (
          <div className="errorText">
            That format doesn't look right. Make sure there aren't any typos.
          </div>
        )}
        <Icon size="big" name="globe" />
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
          <div className="errorText">The email or password is incorrect</div>
        )}
        <Icon size="big" name="user" />
      </OnboardInput>
      <OnboardButton onClick={onLogin}>Log In</OnboardButton>
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
