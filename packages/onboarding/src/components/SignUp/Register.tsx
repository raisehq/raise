import React, { Fragment, useContext, useState, useEffect } from 'react';
import { Icon, Select, Input } from 'semantic-ui-react';
import debounce from 'lodash/debounce';
import {
  OnboardHeader,
  OnboardSubHeader,
  OnboardInput,
  OnboardButton,
  OnboardCountries,
  CallToSignIn,
  OnboardLogo,
  MyRecapcha,
  GoogleCaptchaPolicies
} from '../styles';
import { AppContext } from '../App';
import { IContext } from '../types';
import { countryOptions } from '../../commons/countries';
import validations from '../validations';
import { checkUsername } from '../../services';

const Register = () => {
  const {
    credentials,
    onSetStep,
    onSetCredentials,
    onSendCredentials,
    referralCode
  } = useContext<IContext>(AppContext);
  const [errors, setErrors] = useState<{
    password: boolean;
    country: boolean;
    username: boolean;
    accounttype_id: number;
  }>({
    password: false,
    country: false,
    username: false,
    accounttype_id: 1
  });

  const [recaptcha, setRecaptcha] = useState(null);
  const recaptchaRef: any = React.createRef();
  
  useEffect(() => {
    if (recaptcha !== null) {
      onSendCredentials();
    }
  }, [recaptcha]);

  const onSetCountry = debounce(async (e, data) => {
    onSetCredentials('country_id', data.value);
  }, 800);

  const onChangeUsername = debounce(async (e, data) => {
    const { value } = data;
    const usernameExist: any = await checkUsername(value);

    usernameExist.fold(
      () => setErrors({ ...errors, username: true }),
      () => {
        setErrors({ ...errors, username: false });
        onSetCredentials('username', value);
      }
    );
  }, 800);

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

  const header = !!referralCode
    ? 'True friends invited you to Raise'
    : 'Get started';

  const onKeyPress = event => {
    if (
      event.key === 'Enter' &&
      (credentials.username !== '' &&
        credentials.password !== '' &&
        credentials.country_id !== '')
    ) {
      // onSendCredentials();
      onSubmitSignUp();
    }
  };

  const onCaptchaCallback = async (captchaResponse) => {
    onSetCredentials('g-recaptcha-response', captchaResponse);
    setRecaptcha(captchaResponse);
  }

  const onSubmitSignUp = () => {
    recaptchaRef.current.execute();
  }

  return (
    <Fragment>
      <OnboardHeader>
        {header}
        <OnboardLogo />
      </OnboardHeader>
      <OnboardSubHeader>Create an account</OnboardSubHeader>
      <OnboardInput>
        <OnboardCountries
          control={Select}
          options={countryOptions}
          search
          placeholder="Country of residence"
          onChange={onSetCountry}
          onKeyPress={onKeyPress}
        />
        {/* {errors.country && (
          <div className="errorTextSelect">
            Sorry we don’t accept registrations from this country
          </div>
        )} */}
        <Icon size="big" name="globe" />
      </OnboardInput>
      <OnboardInput>
        <Input
          placeholder="Username"
          onChange={onChangeUsername}
          error={errors.username}
          onKeyPress={onKeyPress}
        />
        {errors.username && (
          <div className="errorText">This username already exist.</div>
        )}
        <Icon size="big" name="user" />
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
          credentials.username === '' ||
          credentials.password === '' ||
          credentials.country_id === ''
        }
        onClick={onSubmitSignUp}
        // onClick={onSendCredentials}
      >
        Get Started
      </OnboardButton>
      <CallToSignIn>
        Do you have an account already? Press here to
        <button className="callToSignIn" onClick={onSetStep('SignIn')}>
          Sign In
        </button>
      </CallToSignIn>
      <GoogleCaptchaPolicies>
        This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </GoogleCaptchaPolicies>
    </Fragment>
  );
};

export default Register;
