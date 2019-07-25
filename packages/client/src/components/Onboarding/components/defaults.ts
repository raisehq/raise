export const defaultContext = {
  onSetStep: () => () => null,
  onSetCredentials: () => null,
  onSendCredentials: () => null,
  onResetPassword: () => null,
  onLogin: () => null,
  error: false,
  referralCode: null,
  onRecover: () => null,
  credentials: {
    email: '',
    password: '',
    username: '',
    country_id: ''
  }
};
