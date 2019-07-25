export type Mode = 'SignIn' | 'SignUp' | 'RecoverPassword';

export type Index =
  | 'username'
  | 'firstname'
  | 'lastname'
  | 'type'
  | 'email'
  | 'password';

export type InitialStateType = {
  mode: any;
  form: { [k in Index]: string } | any;
  errorFields: { [k in Index]: string } | any;
  pristine: boolean;
  terms: boolean;
};

export type SignInProps = {
  onModeClick: (mode: Mode) => () => any;
  onSend: () => any;
  onChange: (index: any) => any;
  requestError: Boolean;
  errorFields: any;
  pristine: boolean;
};

export type SignUpProps = {
  onModeClick: (mode: Mode) => () => any;
  onSend: () => any;
  onChange: (index: any) => any;
  requestError: Boolean;
  errorFields: any;
  pristine: boolean;
  onToggleTerms: () => any;
};

export type RecoverProps = {
  onSend: () => any;
  requestError: Boolean;
  errorFields: any;
  pristine: boolean;
  onChange: (index: any) => any;
};
