export const defaultContext = {
  onSetStep: () => () => null,
  onSetCredentials: () => null,
  onSendCredentials: () => null,
  setLoading: () => null,
  onResetPassword: () => null,
  onLogin: () => null,
  error: false,
  isLoading: false,
  referralCode: null,
  onRecover: () => null,
  credentials: {
    email: '',
    password: '',
    username: '',
    country_id: ''
  }
};
