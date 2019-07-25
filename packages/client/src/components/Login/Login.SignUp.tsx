import * as React from 'react';
import { Input, Button, Dropdown, Checkbox, Modal } from 'semantic-ui-react';
import useSelectableAccountType from '../../hooks/useSelectableAccountType';
import { SignUpProps } from './Login.types';
import {
  BelowControls,
  Holder,
  Error,
  TermsWrapper,
  TermsButton
} from './Login.styles';

const SignUp = ({
  onChange,
  errorFields,
  onSend,
  requestError,
  pristine,
  onToggleTerms
}: SignUpProps) => {
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
        placeholder="First name"
        icon="user"
        onChange={onChange('firstname')}
        iconPosition="left"
        onKeyPress={onHandleKeyPress}
        error={!pristine && !errorFields.firstname}
      />
      <Input
        size="large"
        type="text"
        placeholder="Last name"
        icon="user"
        onChange={onChange('lastname')}
        iconPosition="left"
        onKeyPress={onHandleKeyPress}
        error={!pristine && !errorFields.lastname}
      />
      <Input
        size="large"
        type="text"
        placeholder="Email"
        icon="mail"
        onChange={onChange('email')}
        iconPosition="left"
        onKeyPress={onHandleKeyPress}
        error={!pristine && !errorFields.email}
      />
      <Input
        size="large"
        type="password"
        placeholder="Password"
        icon="asterisk"
        onChange={onChange('password')}
        iconPosition="left"
        onKeyPress={onHandleKeyPress}
        error={!pristine && !errorFields.password}
      />
      <Dropdown
        placeholder="Select type account"
        fluid
        selection
        options={useSelectableAccountType().current}
        onChange={onChange('accounttype_id')}
        error={!pristine && !errorFields.type}
      />
      <TermsWrapper>
        <Checkbox
          onChange={onToggleTerms}
          label="Accept terms"
          className={!pristine && !errorFields.terms ? 'TermsError' : undefined}
        />
        <Modal trigger={<TermsButton>View terms and conditions</TermsButton>}>
          <Modal.Header>Terms and conditions</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              dasha doiasdoijasod aipdjaispjd pjdpajdspa jpidasjpda pojpasjdpa
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </TermsWrapper>
      <BelowControls>
        <Button primary size="small" onClick={onSend}>
          Register
        </Button>
      </BelowControls>
      {requestError && <Error>Email address already exist</Error>}
    </Holder>
  );
};

export default SignUp;
