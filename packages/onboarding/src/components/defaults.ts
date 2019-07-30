export const defaultContext = {
  onSetStep: () => () => null,
  onSetCredentials: () => null,
  onSendCredentials: () => null,
  onResetPassword: () => null,
  onLogin: () => null,
  error: false,
  blur: false,
  referralCode: null,
  onRecover: () => null,
  setLoginError: () => null,
  credentials: {
    email: '',
    password: '',
    username: '',
    country_id: ''
  }
};
