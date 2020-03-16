const defaultContext = {
  history: {},
  onSetStep: () => () => null,
  onSetStepWithParam: () => () => () => null,
  onSetCredentials: () => null,
  onSendCredentials: () => null,
  onResetPassword: () => null,
  onSetPasswordBorrower: () => null,
  onActivateAccount: () => null,
  onLoginWithBloom: () => null,
  onLogin: () => null,
  error: false,
  onLoginURL: null,
  referralCode: null,
  onRecover: () => null,
  setLoginError: () => null,
  onClose: () => null,
  credentials: {
    email: '',
    password: '',
    username: '',
    country_id: '',
    mailingChecked: false,
    'g-recaptcha-response': ''
  },
  onResetToken: () => null
};
export default defaultContext;
