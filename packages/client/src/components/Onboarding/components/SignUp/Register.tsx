import React, { Fragment, useContext, useState } from 'react';
import { Icon, Select, Input } from 'semantic-ui-react';
import debounce from 'lodash/debounce';
import {
  OnboardHeader,
  OnboardSubHeader,
  OnboardInput,
  OnboardButton,
  OnboardCountries,
  CallToSignIn
} from '../styles';
import { AppContext } from '../App';
import { IContext } from '../types';
import { countryOptions } from '../../commons/countries';
import validations from '../validations';
import { checkUsername } from '../../../../services/auth';

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

  const onSetCountry = (e, data) => onSetCredentials('country_id', data.value);

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

  return (
    <Fragment>
      <OnboardHeader>{header}</OnboardHeader>
      <OnboardSubHeader>Create an account</OnboardSubHeader>
      <OnboardInput>
        <OnboardCountries
          control={Select}
          options={countryOptions}
          search
          placeholder="Country of residence"
          onChange={onSetCountry}
        />
        <Icon size="big" name="globe" />
      </OnboardInput>
      <OnboardInput>
        <Input
          placeholder="Username"
          onChange={onChangeUsername}
          error={errors.username}
        />
        {errors.username && (
          <div className="errorText">Username already exist</div>
        )}
        <Icon size="big" name="user" />
      </OnboardInput>
      <OnboardInput>
        <Input
          placeholder="Create a password"
          onChange={onSetPassword}
          error={errors.password}
          type="password"
        />
        {errors.password && (
          <div className="errorText">
            Password at least must have 8 characters 1 capital letter.
          </div>
        )}
        <Icon size="big" name="key" />
      </OnboardInput>
      <OnboardButton
        disabled={
          credentials.username === '' ||
          credentials.password === '' ||
          credentials.country_id === ''
        }
        onClick={onSendCredentials}
      >
        Get Started
      </OnboardButton>
      <CallToSignIn>
        Already have an account? Press here to
        <button className="callToSignIn" onClick={onSetStep('SignIn')}>
          Sign In
        </button>
      </CallToSignIn>
    </Fragment>
  );
};

export default Register;
