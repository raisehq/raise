import React from 'react';
import { Loader } from 'semantic-ui-react';
import { FormInput, Label, Submit, FlexBox, Message } from '../MyAccount.styles';

const UpdatePassword = ({
  oldPassword,
  updateState,
  newPassword,
  newPasswordRepeat,
  savePassword,
  passMessage,
  loading
}: any) => {
  // prettier-ignore
  const message = passMessage.includes('body')
    ? `${passMessage
      .split(': ')[1]
      .split(' ')[0]
      .split('-')
      .join(' ')} not valid`
    : passMessage;
  const passwordNotMatch = newPassword && newPasswordRepeat && newPassword !== newPasswordRepeat;
  const passLength = 6;
  const newPasswordLength = newPassword && newPassword.length < passLength;
  const isDisabled =
    !oldPassword ||
    !oldPassword.length ||
    !newPassword ||
    !newPassword.length ||
    newPasswordLength ||
    !newPasswordRepeat ||
    !newPasswordRepeat ||
    passwordNotMatch;

  const passwordNotMatchMessage = 'Passwords does not match';
  const passwordLessMinLength = `Password should have a minimum of ${passLength} characters`;

  return (
    <>
      <h3>Change Password</h3>
      <p>Choose a new password and protect your account.</p>
      <Label>Current password</Label>
      <FormInput
        name="old-password"
        placeholder="Type your current password"
        type="password"
        value={oldPassword}
        onChange={updateState}
      />
      <Label>New password</Label>
      <FormInput
        name="new-password"
        placeholder="Type your new password"
        type="password"
        value={newPassword}
        onChange={updateState}
        error={newPasswordLength}
      />
      <Label>Repeat new password</Label>
      <FormInput
        name="new-password-repeat"
        placeholder="Type again your new password"
        type="password"
        value={newPasswordRepeat}
        onChange={updateState}
        error={passwordNotMatch}
      />
      <FlexBox>
        <Submit disabled={isDisabled} onClick={savePassword}>
          Save
        </Submit>
        <Loader inline active={loading} />
        {passMessage && <Message>{message}</Message>}
        {passwordNotMatch && <Message>{passwordNotMatchMessage}</Message>}
        {newPasswordLength && <Message>{passwordLessMinLength}</Message>}
      </FlexBox>
    </>
  );
};

export default UpdatePassword;
