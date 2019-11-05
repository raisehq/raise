import React from 'react';
import { Loader } from 'semantic-ui-react';
import {
  FormInput,
  Label,
  Submit,
  FlexBox,
  Message
} from '../MyAccount.styles';

const UpdatePassword = ({ oldPassword, updateState, newPassword, newPasswordRepeat, savePassword, passMessage, loading }) => {
  const message = passMessage.includes('body') ? `${passMessage.split(': ')[1].split(' ')[0].split('-').join(' ')} not valid` : passMessage;
  const passLength = 6;
  const isDisabled =
    !oldPassword || !oldPassword.length ||
    !newPassword || !newPassword.length || newPassword.length < passLength ||
    !newPasswordRepeat || !newPasswordRepeat.length || newPasswordRepeat.length < passLength ||
    newPassword !== newPasswordRepeat;

  // TODO: Show min char length message, show msg when passwords not equal.
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
        error={newPassword && newPassword.length < passLength}
      />
      <Label>Repeat new password</Label>
      <FormInput
        name="new-password-repeat"
        placeholder="Type again your new password"
        type="password"
        value={newPasswordRepeat}
        onChange={updateState}
        error={newPasswordRepeat && newPasswordRepeat.length < passLength || newPasswordRepeat !== newPassword}
      />
      <FlexBox>
        <Submit
          disabled={isDisabled}
          onClick={savePassword}>Save</Submit>
        <Loader inline active={loading} />
        {passMessage && <Message>{message}</Message>}
      </FlexBox>
    </>
  )
}

export default UpdatePassword;