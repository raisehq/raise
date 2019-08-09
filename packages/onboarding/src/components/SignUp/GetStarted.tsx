import React, { Fragment, useContext, useState, useEffect } from 'react';
import { Icon, Input } from 'semantic-ui-react';
import * as _ from 'lodash';
import {
  OnboardHeader,
  OnboardSubHeader,
  OnboardInput,
  OnboardButton,
  CallToSignIn,
  OnboardDisclaimer,
  OnboardLogo,
  OnboardCheckbox,
  OnboardMailingList,
  OnboardingCell
} from '../styles';
import { AppContext } from '../App';
import { IContext } from '../types';
import validations from '../validations';
import theme from '../../theme';
import { checkEmail } from '../../services';

const GetStarted = () => {
  const { onSetStep, credentials, onSetCredentials, referralCode } = useContext<
    IContext
  >(AppContext);

  useEffect(() => {
    onSetCredentials('mailingChecked', false);
  }, []);

  const [error, setError] = useState<any>({
    validation: false,
    exist: false,
    terms: true
  });

  const onChangeEmail = _.debounce((e, data) => {
    const { value } = data;
    const validateEmail = validations.isEmail(value);

    validateEmail.fold(
      () => setError({ ...error, validation: true }),
      async () => {
        const alreadyExist: any = await checkEmail(value);

        alreadyExist.fold(
          () => {
            setError({ validation: false, exist: true, terms: error.terms });
          },
          () => {
            setError({ validation: false, exist: false, terms: error.terms });
            onSetCredentials('email', value);
          }
        );
      }
    );
  }, 500);

  const onAcceptTerms = () => setError({ ...error, terms: !error.terms });

  const onAcceptMailingList = () => {
    const mailingChecked = !credentials.mailingChecked;
    onSetCredentials('mailingChecked', mailingChecked);
  };

  const onKeyPress = event => {
    if (
      event.key === 'Enter' &&
      (credentials.email !== '' && !error.validation && !error.exist)
    ) {
      onSetStep('Register')();
    }
  };

  const header = !!referralCode
    ? 'True friends invited you to Raise'
    : 'Get started';

  return (
    <Fragment>
      <OnboardHeader>
        {header} <OnboardLogo />
      </OnboardHeader>
      <OnboardSubHeader>Create an account</OnboardSubHeader>
      <OnboardInput>
        <Input
          placeholder="Email address"
          onChange={onChangeEmail}
          error={error.validation || error.exist}
          onKeyPress={onKeyPress}
        />
        <Icon size="big" name="mail outline" />
        {error.validation && (
          <div className="errorText">
            That format doesn't look right. Make sure there aren't any typos.
          </div>
        )}
        {error.exist && (
          <div className="errorText">This email already exists.</div>
        )}
      </OnboardInput>
      <OnboardButton
        disabled={
          credentials.email === '' ||
          error.validation ||
          error.exist ||
          error.terms
        }
        onClick={onSetStep('Register')}
      >
        Next
      </OnboardButton>
      <OnboardDisclaimer>
        <OnboardingCell>
          <OnboardCheckbox onChange={onAcceptTerms} />
        </OnboardingCell>
        <OnboardingCell>
          By signing up, I agree to Raise
          <a
            className="disclaimerBTN"
            href={`${theme.resources}/terms/terms.pdf`}
            target="_blank"
          >
            Terms of Service
          </a>
          and
          <a
            className="disclaimerBTN"
            href={`${theme.resources}/terms/terms.pdf`}
            target="_blank"
          >
            Privacy Policy
          </a>
        </OnboardingCell>
      </OnboardDisclaimer>
      <OnboardMailingList>
        <OnboardCheckbox onChange={onAcceptMailingList} />I agree to receive
        Raise latest updates
      </OnboardMailingList>
      <CallToSignIn>
        Do you have an account already?
        <button className="callToSignIn" onClick={onSetStep('SignIn')}>
          Sign In
        </button>
      </CallToSignIn>
    </Fragment>
  );
};

export default GetStarted;
