import * as React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { RecoverProps } from './Login.types';
import { BelowControls, Holder, Error } from './Login.styles';

const Recover = ({
  onChange,
  errorFields,
  onSend,
  requestError
}: RecoverProps) => {
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
        error={errorFields.email === false}
      />
      <BelowControls>
        <Button size="small" onClick={onSend} primary>
          Send
        </Button>
      </BelowControls>
      {requestError && <Error>Oops something went wrong</Error>}
    </Holder>
  );
};

export default Recover;
