import React, { Fragment, useContext, useState } from 'react';
import { Icon, Input } from 'semantic-ui-react';
import debounce from 'lodash/debounce';

import { OnboardHeaderBorrower, OnboardInput, OnboardButton } from '../styles';
import validations from '../validations';
import { AppContext } from '../App';
import { Either } from '../../utils';

const BorrowerSignUp = ({ token }) => {
  const { onSetPasswordBorrower, onActivateAccount }: any = useContext(AppContext);

  const [errors, setErrors]: any = useState({
    main: false,
    retyped: {
      notEqueal: false,
      notPassword: false
    }
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

  const onReset = async () => {
    await onActivateAccount(token);
    await onSetPasswordBorrower(token, password.main);
  };

  const onKeyPress = event => {
    if (
      event.key === 'Enter' &&
      (!errors.retyped.notPassword && !errors.retyped.notEqual && !errors.main)
    ) {
      onReset();
    }
  };

  return (
    <Fragment>
      <OnboardHeaderBorrower>Set a password for you account</OnboardHeaderBorrower>
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
      <OnboardButton onClick={onReset}>Continue</OnboardButton>
    </Fragment>
  );
};

export default BorrowerSignUp;
