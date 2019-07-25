import * as React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { SignInProps } from './Login.types';
import { Forgot, BelowControls, Holder, Error } from './Login.styles';

const SignIn = ({
  errorFields,
  onSend,
  onModeClick,
  onChange,
  requestError,
  pristine
}: SignInProps) => {
  const onHandleKeyPress = e => {
    if (e.key === 'Enter') {
      onSend();
    }
  };

  return (
    <Holder>
      <Input
        size="large"
        type="text"
        placeholder="Your email"
        icon="user"
        iconPosition="left"
        onKeyPress={onHandleKeyPress}
        onChange={onChange('email')}
        error={!pristine && !errorFields.email}
      />
      <Input
        size="large"
        type="password"
        placeholder="Your password"
        icon="asterisk"
        iconPosition="left"
        onKeyPress={onHandleKeyPress}
        onChange={onChange('password')}
        error={!pristine && !errorFields.password}
      />
      <BelowControls>
        <Forgot onClick={onModeClick('RecoverPassword')}>
          I forgot my password
        </Forgot>
        <Button size="small" onClick={onSend} primary>
          Login
        </Button>
      </BelowControls>
      {requestError && <Error>{requestError}</Error>}
    </Holder>
  );
};

export default SignIn;
