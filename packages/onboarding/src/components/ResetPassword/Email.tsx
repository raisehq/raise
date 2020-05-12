import React, { Fragment, useContext, useState } from 'react';
import { Icon, Input } from 'semantic-ui-react';
import debounce from 'lodash/debounce';
import { OnboardHeader, OnboardInput, OnboardButton, CallToSignIn } from '../styles';
import validations from '../validations';
import AppContext from '../App.context';

const Reset = () => {
  const { onSetStep, onRecover }: any = useContext(AppContext);

  const [email, setEmail] = useState({ value: '', error: false });

  const onChangeEmail = debounce((e, data) => {
    const { value } = data;
    const validateEmail = validations.isEmail(value);

    validateEmail.fold(
      () => setEmail({ value: '', error: true }),
      () => setEmail({ value, error: false })
    );
  }, 500);

  const onSendRecover = () => onRecover(email.value);

  const onKeyPress = event => {
    if (event.key === 'Enter' && email.value !== '' && !email.error) {
      onSendRecover();
    }
  };

  return (
    <Fragment>
      <OnboardHeader>Forgot your password?</OnboardHeader>
      <p>We will help you reset it and get back on track</p>
      <OnboardInput>
        <Input
          data-testid="recoverEmail"
          placeholder="Please enter your email"
          type="text"
          onChange={onChangeEmail}
          error={email.error}
          onKeyPress={onKeyPress}
        />
        {email.error && (
          <div className="errorText">
            That format doesn&apos;t look right. Make sure there aren&apos;t any typos.
          </div>
        )}
        <Icon size="big" name="globe" />
      </OnboardInput>
      <OnboardButton onClick={onSendRecover} disabled={email.value === '' || email.error}>
        Reset password
      </OnboardButton>
      <CallToSignIn>
        You don&apos;t have an account?
        <button className="callToSignIn" type="button" onClick={onSetStep('Start')}>
          Get Started
        </button>
      </CallToSignIn>
    </Fragment>
  );
};

export default Reset;
