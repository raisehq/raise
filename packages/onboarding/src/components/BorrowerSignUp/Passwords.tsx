import React, { Fragment, useContext, useState } from 'react';
import { Icon, Input } from 'semantic-ui-react';
import debounce from 'lodash/debounce';

import {
  OnboardHeaderBorrower,
  OnboardInput,
  OnboardButton,
  OnboardHeaderSubtitle,
  OnboardDisclaimerBorrower,
  OnboardCheckbox,
  OnboardingCell
} from '../styles';
import theme from '../../theme';
import validations from '../validations';
import AppContext from '../App.context';
import { Either } from '../../utils';

const BorrowerSignUp = ({ token }: any) => {
  const { onSetPasswordBorrower, onActivateAccount }: any = useContext(AppContext);

  const [errors, setErrors]: any = useState({
    main: false,
    retyped: {
      notEqueal: false,
      notPassword: false
    },
    terms: true
  });

  const [password, setPasswords] = useState<{
    main: string;
    retyped: string;
  }>({
    main: '',
    retyped: ''
  });

  const onSetPassword = debounce((e, data) => {
    const { value } = data;
    const validateMainPassword = validations.password(value);

    validateMainPassword.fold(
      () => setErrors({ ...errors, main: true }),
      () => {
        setErrors({ ...errors, main: false });
        setPasswords({ ...password, main: value });
      }
    );
  }, 800);

  const onSetRetypedPassword = debounce((e, data) => {
    const { value } = data;
    const validateMainPassword = validations.password(value);

    validateMainPassword.fold(
      () =>
        setErrors({
          ...errors,
          retyped: { notEqual: false, notPassword: true }
        }),
      () => {
        const isSamePassword = Either.either(password.main === value);

        isSamePassword.fold(
          () =>
            setErrors({
              ...errors,
              retyped: { notEqual: true, notPassword: false }
            }),
          () => {
            setErrors({
              ...errors,
              main: false,
              retyped: { notEqual: false, notPassword: false }
            });
            setPasswords({ ...password, retyped: value });
          }
        );
      }
    );
  }, 800);

  const onAcceptTerms = () => setErrors({ ...errors, terms: !errors.terms });

  const onReset = async () => {
    await onActivateAccount(token);
    await onSetPasswordBorrower(token, password.main);
  };

  const onKeyPress = (event) => {
    if (
      event.key === 'Enter' &&
      !errors.retyped.notPassword &&
      !errors.retyped.notEqual &&
      !errors.main
    ) {
      onReset();
    }
  };

  return (
    <Fragment>
      <OnboardHeaderBorrower>Activate your account</OnboardHeaderBorrower>
      <OnboardHeaderSubtitle>
        Set a password and accept Terms and Conditions to continue
      </OnboardHeaderSubtitle>
      <OnboardInput>
        <Input
          data-testid="loginPassword"
          placeholder="Please enter your password"
          type="password"
          onChange={onSetPassword}
          error={errors.main}
          onKeyPress={onKeyPress}
        />
        {errors.main && (
          <div className="errorText">
            Password at least must have 8 characters 1 capital letter.
          </div>
        )}
        <Icon size="big" name="key" />
      </OnboardInput>
      <OnboardInput>
        <Input
          data-testid="loginRetypedPassword"
          placeholder="Please retype your password"
          type="password"
          onChange={onSetRetypedPassword}
          error={errors.retyped.notPassword || errors.retyped.notEqual}
          onKeyPress={onKeyPress}
        />
        {errors.retyped.notPassword && (
          <div className="errorText">
            Password at least must have 8 characters 1 capital letter.
          </div>
        )}
        {errors.retyped.notEqual && <div className="errorText">Passwords do not match</div>}
        <Icon size="big" name="key" />
      </OnboardInput>
      <OnboardButton disabled={errors.terms || errors.main} onClick={onReset}>
        Continue
      </OnboardButton>
      <OnboardDisclaimerBorrower>
        <OnboardingCell>
          <OnboardCheckbox onChange={onAcceptTerms} />
        </OnboardingCell>
        <OnboardingCell>
          By signing up, I agree to Raise
          <a
            className="disclaimerBTN"
            href={`${theme.resources}/toc-b.pdf`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Terms of Service
          </a>
          and
          <a
            className="disclaimerBTN"
            href={`${theme.resources}/privacy-policy-b.pdf`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Privacy Policy
          </a>
        </OnboardingCell>
      </OnboardDisclaimerBorrower>
    </Fragment>
  );
};

export default BorrowerSignUp;
