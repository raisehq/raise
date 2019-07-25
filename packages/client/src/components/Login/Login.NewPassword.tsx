import React, { useRef } from 'react';
import { Input, Button } from 'semantic-ui-react';
import { BelowControls, Holder, Error } from './Login.styles';

const NewPassword = ({
  onChange,
  onSend,
  pristine,
  errorFields,
  newPassword,
  newPasswordError
}: any) => {
  const passwordInput: any = useRef(null);
  const newPasswordInput: any = useRef(null);

  const onHandleKeyPress = e => {
    if (e.key === 'Enter') {
      onSend();
    }
  };

  const isDisabled = () =>
    !passwordInput.current ||
    !newPasswordInput.current ||
    (passwordInput.current.inputRef.value === '' &&
      newPasswordInput.current.inputRef.value === '');

  return (
    <Holder>
      <Input
        ref={passwordInput}
        size="large"
        type="password"
        placeholder="New password"
        autoComplete="off"
        icon="user"
        iconPosition="left"
        onKeyPress={onHandleKeyPress}
        onChange={onChange('password')}
      />
      <Input
        ref={newPasswordInput}
        size="large"
        type="password"
        placeholder="Repeat password"
        autoComplete="off"
        icon="user"
        iconPosition="left"
        onKeyPress={onHandleKeyPress}
        onChange={onChange('newPassword')}
      />
      <BelowControls>
        <Button size="small" onClick={onSend} primary disabled={isDisabled()}>
          Send
        </Button>
      </BelowControls>
      {!pristine && !errorFields.password && (
        <Error>Password should be the same</Error>
      )}
      {newPassword && newPasswordError && (
        <Error>Something went wrong. Try again</Error>
      )}
    </Holder>
  );
};

export default NewPassword;
