export type Steps =
  | 'Start'
  | 'Register'
  | 'SignIn'
  | 'Confirm'
  | 'Verified'
  | 'ResetOK'
  | 'ResetKO';

export interface ICredentials {
  email: string;
  password: string;
  username: string;
  country_id: string;
}

export interface ISignup {
  username: string;
  email: string;
  password: string;
  country_id: string;
  referrer_code?: any;
}

export interface ISignin {
  email: string;
  password: string;
}

export interface IContext {
  credentials: ICredentials;
  isLoading: boolean;
  setLoading: (bool: boolean) => null | void | Promise<any>;
  onSetStep: (step: Steps) => () => null | void | Promise<any>;
  onSetCredentials: (
    input: string,
    value: string
  ) => null | void | Promise<any>;
  onSendCredentials: () => null | void | Promise<any>;
  onResetPassword: (
    token: string,
    password: string
  ) => null | void | Promise<any>;
  onLogin: () => null | void | Promise<any>;
  error: boolean;
  referralCode: string | null;
  onRecover: (email: string) => null | void | Promise<any>;
}
