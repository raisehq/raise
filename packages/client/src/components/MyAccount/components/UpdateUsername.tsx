import React from 'react';
import { Loader } from 'semantic-ui-react';
import {
  FormInput,
  Submit,
  Label,
  FlexBox,
  Message
} from '../MyAccount.styles';

const UpdateUsername = ({ username, updateState, userMessage, saveUsername, loading }) => {
  const message = userMessage.includes('body') ? `${userMessage.split(': ')[1].split(' ')[0].split('-').join(' ')} not valid` : userMessage;
  const isDisabled = !username || !username.length;
  return (
    <>
      <Label>Username</Label>
      <FormInput name="username" value={username} onChange={updateState} />
      <FlexBox>
        <Submit disabled={isDisabled} onClick={saveUsername}>Update account</Submit>
        <Loader inline active={loading} />
        {userMessage && <Message>{message}</Message>}
      </FlexBox>
    </>
  )
}
export default UpdateUsername