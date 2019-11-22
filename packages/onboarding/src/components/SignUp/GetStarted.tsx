import React, { Fragment, useContext, useState, useEffect } from 'react';
import { Icon, Input, Select } from 'semantic-ui-react';
import * as _ from 'lodash';
import debounce from 'lodash/debounce';
import { AccountType } from '@raisehq/components';
import {
  OnboardHeader,
  OnboardSubHeader,
  OnboardInput,
  OnboardButton,
  OnboardCountries,
  CallToSignIn,
  OnboardDisclaimer,
  OnboardLogo,
  OnboardCheckbox,
  OnboardMailingList,
  OnboardingCell,
  MiniBody,
  MyRecapcha
} from '../styles';
import { AppContext } from '../App';
import { IContext } from '../types';
import { countryOptions } from '../../commons/countries';
import validations from '../validations';
import theme from '../../theme';
import { checkEmail } from '../../services';
import useGoogleTagManager from '../../hooks/useGoogleTagManager';

const GetStarted = ({ mini }: { mini?: boolean }) => {
  const { onSetStep, credentials, onSetCredentials, referralCode, onSendCredentials } = useContext<
    IContext
  >(AppContext);
  const [errors, setErrors] = useState<{
    password: boolean;
    country: boolean;
    email: boolean;
    accounttype_id: number;
  }>({
    password: false,
    country: false,
    email: false,
    accounttype_id: AccountType.Lender
  });

  const [recaptcha, setRecaptcha] = useState(null);
  const recaptchaRef: any = React.createRef();

  useEffect(() => {
    if (recaptcha) {
      onSendCredentials();
    }
  }, [recaptcha]);

  const onSetCountry = debounce(async (e, data) => {
    onSetCredentials('country_id', data.value);
  }, 800);

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

  const onSetPassword = debounce((e, data) => {
    const { value } = data;
    const validatePassword = validations.password(value);

    validatePassword.fold(
      () => setErrors({ ...errors, password: true }),
      () => {
        setErrors({ ...errors, password: false });
        onSetCredentials('password', value);
      }
    );
  }, 800);

  const onAcceptTerms = (e, { checked }) => setError({ ...error, terms: !checked });

  const onAcceptMailingList = (e, { checked }) => {
    onSetCredentials('mailingChecked', checked);
  };

  const onSubmitSignUp = () => {
    recaptchaRef.current.reset();
    recaptchaRef.current.execute();
  };

  const onKeyPress = event => {
    useGoogleTagManager(
      credentials.email,
      'www.raise.it',
      'Signup',
      '/register',
      'RegisterForm',
      'dataLayer',
      'Click',
      'signup_form_attempt'
    );

    if (
      event.key === 'Enter' &&
      credentials.email !== '' &&
      credentials.password !== '' &&
      credentials.country_id !== ''
    ) {
      onSubmitSignUp();
    }
  };

  const onCaptchaCallback = async captchaResponse => {
    onSetCredentials('g-recaptcha-response', captchaResponse);
    setRecaptcha(captchaResponse);
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
      <OnboardInput>
        <OnboardCountries
          control={Select}
          options={countryOptions}
          search
          placeholder="Country of residence"
          onChange={onSetCountry}
          onKeyPress={onKeyPress}
        />

        <Icon size="big" name="globe" />
      </OnboardInput>
      <OnboardInput>
        <Input
          placeholder="Create a password"
          onChange={onSetPassword}
          error={errors.password}
          type="password"
          onKeyPress={onKeyPress}
        />
        {errors.password && (
          <div className="errorText">
            Passwords must have at least 8 characters and 1 capital letter.
          </div>
        )}
        <Icon size="big" name="key" />
      </OnboardInput>
      <MyRecapcha
        ref={recaptchaRef}
        size="invisible"
        sitekey="6Lc9-rAUAAAAAH-rveEYo78h5rXiGnAVtsoE5rjc"
        render="explicit"
        onChange={onCaptchaCallback}
      />
      <OnboardButton
        disabled={
          credentials.email === '' ||
          credentials.password === '' ||
          credentials.country_id === '' ||
          error.validation ||
          error.exist ||
          error.terms
        }
        onClick={onSubmitSignUp}
      >
        Get Started
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
