/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { Select } from 'semantic-ui-react';
import { AccountType } from '../../types';
import validations from '../../utils/validations';
import {
  SignUpContainer,
  SignUpInfo,
  SignUpForm,
  SignUpIcon,
  SignUpInputContainer,
  SignUpInput,
  RaiseTerms,
  RaiseUpdates,
  SignUpCheckbox,
  SignUpButton,
  MyRecapcha,
  SignUpText,
  RaiseLogo,
  InputCountries,
  CheckBoxText,
} from './styles';
import { countryOptions } from '../../commons/countries';

interface ISignUp {
  onSignUp: any;
  checkEmail: any;
  SignUpId: string;
}

const SignUp: React.SFC<ISignUp> = ({
  SignUpId,
  onSignUp,
  checkEmail,
}: any) => {
  const [errors, setErrors] = useState<{
    password: boolean;
    country: boolean;
    username: boolean;
    accounttype_id: number;
  }>({
    password: false,
    country: false,
    username: false,
    accounttype_id: AccountType.Lender,
  });
  const [error, setError] = useState<any>({
    validation: false,
    exist: false,
    terms: true,
  });

  const [recaptcha, setRecaptcha] = useState(null);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    country_id: '',
    username: '',
    mailingChecked: false,
    'g-recaptcha-response': '',
  });
  const recaptchaRef: any = React.createRef();

  useEffect(() => {
    setCredentials({ ...credentials, mailingChecked: false });
  }, []);

  useEffect(() => {
    if (recaptcha) {
      onSignUp(credentials);
    }
  }, [recaptcha]);

  const onChangeEmail = debounce((_e, data) => {
    const { value } = data;
    const validateEmail = validations.isEmail(value);

    validateEmail.fold(
      () => setError({ ...error, validation: true }),
      async () => {
        const emailLowerCase = value.toLowerCase();
        const alreadyExist: any = await checkEmail(emailLowerCase);

        alreadyExist.fold(
          () => {
            setError({ validation: false, exist: true, terms: error.terms });
          },
          () => {
            setError({ validation: false, exist: false, terms: error.terms });
            setCredentials({ ...credentials, email: emailLowerCase });
          }
        );
      }
    );
  }, 500);

  const onSetCountry = debounce(async (_e, data) => {
    setCredentials({ ...credentials, country_id: data.value });
  }, 800);

  const onSetPassword = debounce((_e, data) => {
    const { value } = data;
    const validatePassword = validations.password(value);

    validatePassword.fold(
      () => setErrors({ ...errors, password: true }),
      () => {
        setErrors({ ...errors, password: false });
        setCredentials({ ...credentials, password: value });
      }
    );
  }, 800);

  const onAcceptTerms = (_e, { checked }) =>
    setError({ ...error, terms: !checked });

  const onAcceptMailingList = (_e, { checked }) => {
    setCredentials({ ...credentials, mailingChecked: checked });
  };

  const onSubmitSignUp = () => {
    recaptchaRef.current.reset();
    recaptchaRef.current.execute();
  };

  const onKeyPress = event => {
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
    setCredentials({ ...credentials, 'g-recaptcha-response': captchaResponse });
    setRecaptcha(captchaResponse);
  };

  return (
    <SignUpContainer>
      <SignUpInfo
        background={`${process.env.REACT_APP_HOST_IMAGES}/images/redbackground.svg`}
      >
        <RaiseLogo
          src={`${process.env.REACT_APP_HOST_IMAGES}/images/logo_white.svg`}
        />
        <SignUpText>Create an account and start investing now</SignUpText>
      </SignUpInfo>
      <SignUpForm>
        <SignUpInputContainer>
          <SignUpInput
            placeholder="Email address"
            onChange={onChangeEmail}
            error={error.validation || error.exist}
            onKeyPress={onKeyPress}
          />
          <SignUpIcon size="big" name="mail outline" />
          {error.validation && (
            <div className="errorText">
              That format doesn&apos;t look right. Make sure there aren&apos;t
              any typos.
            </div>
          )}
          {!error.validation && error.exist && (
            <div className="errorText">This email already exists.</div>
          )}
        </SignUpInputContainer>
        <SignUpInputContainer>
          <InputCountries
            control={Select}
            options={countryOptions}
            search
            placeholder="Country of residence"
            onChange={onSetCountry}
            onKeyPress={onKeyPress}
          />
          <SignUpIcon size="big" name="globe" />
        </SignUpInputContainer>
        <SignUpInputContainer>
          <SignUpInput
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
          <SignUpIcon size="big" name="key" />
        </SignUpInputContainer>
        <RaiseUpdates>
          <SignUpCheckbox onChange={onAcceptMailingList} />I agree to receive
          Raise latest updates
        </RaiseUpdates>
        <RaiseTerms>
          <SignUpCheckbox onChange={onAcceptTerms} />
          <CheckBoxText>
            By signing up, I agree to Raise
            <a
              className="disclaimerBTN"
              href={`${process.env.REACT_APP_HOST_IMAGES}/toc.pdf`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Terms of Service
            </a>
            and
            <a
              className="disclaimerBTN"
              href={`${process.env.REACT_APP_HOST_IMAGES}/privacy-policy.pdf`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Privacy Policy
            </a>
          </CheckBoxText>
        </RaiseTerms>
        <SignUpButton
          disabled={
            credentials.email === '' ||
            credentials.password === '' ||
            credentials.country_id === '' ||
            error.validation ||
            error.exist ||
            error.terms
          }
          onClick={onSubmitSignUp}
          idAttr={SignUpId}
          text="Get Started"
          type="secondary"
          size="large"
          fullWidth
        />
        <MyRecapcha
          ref={recaptchaRef}
          size="invisible"
          sitekey="6Lc9-rAUAAAAAH-rveEYo78h5rXiGnAVtsoE5rjc"
          render="explicit"
          onChange={onCaptchaCallback}
        />
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
