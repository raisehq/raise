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
  OnboardingCell,
  MiniBody
} from '../styles';
import { AppContext } from '../App';
import { IContext } from '../types';
import validations from '../validations';
import theme from '../../theme';
import { checkEmail } from '../../services';
import useGoogleTagManager from '../../hooks/useGoogleTagManager';

const GetStarted = ({ mini }: { mini?: boolean }) => {
  const { onSetStep, credentials, onSetCredentials, referralCode } = useContext<IContext>(
    AppContext
  );

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

  const onAcceptTerms = (e, { checked }) => setError({ ...error, terms: !checked });

  const onAcceptMailingList = (e, { checked }) => {
    onSetCredentials('mailingChecked', checked);
  };

  const onKeyPress = event => {
    if (event.key === 'Enter' && (credentials.email !== '' && !error.validation && !error.exist)) {
      onSetStep('Register')();
    }
  };

  const onSetTagManagerAndStep = () => {
    onSetStep('Register')();

    return useGoogleTagManager(
      'new user',
      'www.raise.it',
      'Signup',
      '/confirm',
      'Register',
      'dataLayer',
      'Submit',
      'emailform'
    );
  };

  const header = !!referralCode ? 'True friends invited you to Raise' : 'Get started';

  if (mini) {
    return (
      <MiniBody>
        <OnboardHeader>Join</OnboardHeader>
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
          {error.exist && <div className="errorText">This email already exists.</div>}
        </OnboardInput>

        <OnboardMailingList>
          <OnboardCheckbox onChange={onAcceptMailingList} />I agree to receive Raise latest updates
        </OnboardMailingList>
        <OnboardDisclaimer>
          <OnboardingCell>
            <OnboardCheckbox onChange={onAcceptTerms} />
          </OnboardingCell>
          <OnboardingCell>
            By signing up, I agree to Raise
            <a className="disclaimerBTN" href={`${theme.resources}/toc.pdf`} target="_blank">
              Terms of Service
            </a>
            and
            <a
              className="disclaimerBTN"
              href={`${theme.resources}/privacy-policy.pdf`}
              target="_blank"
            >
              Privacy Policy
            </a>
          </OnboardingCell>
        </OnboardDisclaimer>
        <OnboardButton
          disabled={credentials.email === '' || error.validation || error.exist || error.terms}
          onClick={onSetTagManagerAndStep}
        >
          Sign up
        </OnboardButton>
      </MiniBody>
    );
  }
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
        {error.exist && <div className="errorText">This email already exists.</div>}
      </OnboardInput>
      <OnboardButton
        disabled={credentials.email === '' || error.validation || error.exist || error.terms}
        onClick={onSetTagManagerAndStep}
      >
        Next
      </OnboardButton>
      <OnboardMailingList>
        <OnboardCheckbox onChange={onAcceptMailingList} />I agree to receive Raise latest updates
      </OnboardMailingList>
      <OnboardDisclaimer>
        <OnboardingCell>
          <OnboardCheckbox onChange={onAcceptTerms} />
        </OnboardingCell>
        <OnboardingCell>
          By signing up, I agree to Raise
          <a className="disclaimerBTN" href={`${theme.resources}/toc.pdf`} target="_blank">
            Terms of Service
          </a>
          and
          <a
            className="disclaimerBTN"
            href={`${theme.resources}/privacy-policy.pdf`}
            target="_blank"
          >
            Privacy Policy
          </a>
        </OnboardingCell>
      </OnboardDisclaimer>
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
