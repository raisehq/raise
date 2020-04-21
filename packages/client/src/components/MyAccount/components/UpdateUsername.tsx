import React from 'react';
import { Loader } from 'semantic-ui-react';
import { FormInput, Submit, Label, FlexBox, Message } from '../MyAccount.styles';

const UpdateUsername = ({
  username,
  storedUsername,
  usernameExists,
  updateState,
  userMessage,
  saveUsername,
  loading
}: any) => {
  // prettier-ignore
  const message = userMessage.includes('body')
    ? `${userMessage
      .split(': ')[1]
      .split(' ')[0]
      .split('-')
      .join(' ')} not valid`
    : userMessage;
  const usernameExistsMessage = 'Username already exists';
  const isEqual = storedUsername === username;
  const isDisabled = !username || !username.length || isEqual || usernameExists;
  return (
    <>
      <Label>Username</Label>
      <FormInput
        name="username"
        value={username}
        onChange={updateState}
        error={username && isEqual}
      />
      <FlexBox>
        <Submit disabled={isDisabled} onClick={saveUsername}>
          Update account
        </Submit>
        <Loader inline active={loading} />
        {userMessage && <Message>{message}</Message>}
        {(isEqual || usernameExists) && <Message>{usernameExistsMessage}</Message>}
      </FlexBox>
    </>
  );
};
export default UpdateUsername;
