import React, { useState, useEffect } from 'react';
import daggy from 'daggy';
import 'url-search-params-polyfill';
import { useMediaQuery } from 'react-responsive';
import { AccountType, Panel, Simple, PanelWithImage } from '@raisehq/components';
import * as Cookies from 'js-cookie';
import AppContext from './App.context';
import GetStarted from './SignUp/GetStarted';
import GetStartedWithEmail from './SignUp/GetStartedWithEmail';
import GetStartedWithBloom from './SignUp/GetStartedWithBloom';
import Confirm from './SignUp/Confirm';
import ErrorBloom from './SignUp/ErrorBloom';
import SignIn from './SignIn/SignIn';
import SignInWithEmail from './SignInWithEmail/SignInWithEmail';
import ResendValidationEmail from './ResendValidationEmail/ResendValidationEmail';
import Verified from './Verification/Verified';
import Verifying from './Verification/Verifying';
import VerifiedError from './Verification/VerifiedError';
import ResetPassword from './ResetPassword/Email';
import ResetPasswordInput from './ResetPassword/Passwords';
import ResetConfirm from './ResetPassword/Confirm';
import ResetOK from './ResetPassword/Success';
import ResetError from './ResetPassword/Error';
import BorrowerSignUp from './BorrowerSignUp/Passwords';
import BorrowerSignUpError from './BorrowerSignUp/Error';
import BorrowerSignUpOK from './BorrowerSignUp/Success';
import { ICredentials, Steps } from './types';
import useAsyncEffect from '../hooks/useAsyncEffect';
import * as services from '../services';
import { getHost } from '../utils';
import useCookie from '../hooks/useCookie';
import LocalData from './localData';
import useGoogleTagManager, { TMEvents } from '../hooks/useGoogleTagManager';
import defaultContext from './defaults';

declare global {
  interface Window {
    fbq: any;
    recaptchaOptions: any;
  }
}

window.fbq = window.fbq || null;

window.recaptchaOptions = {
  useRecaptchaNet: true
};

const Step = daggy.taggedSum('UI', {
  Start: [],
  SignUpWithEmail: [],
  SignUpWithEmailMini: [],
  SignUpWithBloom: [{}],
  SignInWithBloom: [{}],
  StartMini: [],
  SignInWithEmailMini: [],
  SignIn: [],
  SignInWithEmail: [],
  ErrorWithBloom: [],
  Confirm: [],
  Verifying: [],
  Verified: [],
  VerifiedError: [{}],
  Reset: [],
  ResetConfirm: [],
  ResetOK: [],
  ResetError: [],
  ResetPasswordInput: [{}],
  BorrowerSignUp: [{}],
  BorrowerSignUpError: [],
  BorrowerSignUpOK: [],
  ResendValidationEmail: ['token']
});
interface IProps {
  history: any;
  open: boolean;
  blur: boolean;
  mountNode?: any;
  onClose?: () => any;
  closeButton?: boolean;
  initStep?: number;
  pathRedirect?: string;
}

const App = ({
  history,
  open,
  mountNode,
  blur,
  onClose,
  closeButton,
  initStep,
  pathRedirect
}: IProps) => {
  const [step, setStep] = useState(Step.Start);
  const [loginError, setLoginError] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<ICredentials>(defaultContext.credentials);
  const [referralCode, setRefCode] = useState<string>('');
  const [startMini, setStartMini] = useState<boolean>(false);
  // @ts-ignore
  const [, setuserCookie] = useCookie('user', {});
  // @ts-ignore
  const [, setAuthCookie] = useCookie('auth', {});
  const tagManager = useGoogleTagManager();
  const { host } = history.location;
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const refCode = query.get('referralCode');

    if (initStep) {
      if (initStep === Step.StartMini) setStartMini(true);
      setStep(initStep);
    }
    if (refCode) {
      setRefCode(refCode);
    }
  }, []);

  useEffect(() => {
    if (initStep && initStep !== step) setStep(initStep);
  }, [initStep]);

  useAsyncEffect(async () => {
    const { pathname } = history.location;
    if (!open) {
      return;
    }
    if (pathname === '/join') {
      setStep(Step.Start);
    }

    if (pathname.includes('verify/token')) {
      const path = pathname.split('/');
      const token = path[path.length - 1];

      setStep(Step.Verifying);

      const verifying = await services.validateToken({
        token
      });

      verifying.fold(
        () => setStep(Step.VerifiedError(token)),
        () => history.push('/login/email') // setStep(Step.Verified)
      );
    }

    if (pathname.includes('password/reset')) {
      const path = pathname.split('/');
      const token = path[path.length - 1];

      setStep(Step.ResetPasswordInput(token));
    }

    if (pathname.includes('activate')) {
      const path = pathname.split('/');
      const token = path[path.length - 1];

      setStep(Step.BorrowerSignUp(token));
    }

    if (pathname.includes('login')) {
      setStep(Step.SignIn);
    }
    if (pathname.includes('/login/bloom')) {
      const path = pathname.split('/');
      const token = path[path.length - 1];

      setStep(Step.SignUpWithBloom(token));
    }

    if (pathname.includes('/login/email')) {
      setStep(Step.SignInWithEmail);
    }
  }, [history.location.pathname, open]);

  useEffect(() => {
    /*
      This case is special because this step of the signup or dashboard
       is already showed in the view
      because of that we tracking the second step of the process.
    */
    if (step === Step.Start) {
      try {
        if (startMini) {
          tagManager.sendEventCategory('Signup', TMEvents.Submit, 'blog_signup_form', host);
        }

        if (host && host.split('.')[0] === 'app') {
          tagManager.sendEventCategory('Signup', TMEvents.Click, 'dashboard_signup_form', host);
        }
      } catch (err) {
        console.log('[onSendCredentials] Error tracking analytics ', err);
      }
    }
  }, [step]);

  const onSetStep = (newStep: Steps) => () => setStep(Step[newStep]);

  const onSetStepWithParam = (newStep: Steps) => (param) => () => {
    if (newStep === 'SignUpWithBloom') {
      tagManager.sendEventCategory('Signup', TMEvents.Click, 'signup_attempt_bloom', host);
    } else if (newStep === 'SignInWithBloom') {
      tagManager.sendEventCategory('Login', TMEvents.Click, 'login_attempt_bloom', host);
    }
    setStep(Step[newStep](param));
  };

  const onSetCredentials = (input, value) => {
    setCredentials((creds) => ({ ...creds, [input]: value }));
  };

  const onSendCredentials = async () => {
    tagManager.sendEventCategory('Signup', TMEvents.Click, 'signup_attempt', host);

    const hutk = Cookies.get('hubspotutk');
    const signup = await services.signUp({
      ...credentials,
      ...(referralCode ? { referrer_code: referralCode } : {}),
      accounttype_id: AccountType.Lender,
      crm: {
        signupId: 'Onboarding_signup_form',
        signupType: 'email',
        hutk,
        uri: window.location.href
      }
    });
    signup.fold(
      () => {
        tagManager.sendEventCategory('Signup', TMEvents.Submit, 'signup_error', host);
        console.log('something went wrong');
      },
      () => {
        tagManager.sendEventCategory('Signup', TMEvents.Submit, 'signup_success', host);
        setStep(Step.Confirm);
      }
    );
  };

  const onResetPassword = async (token, password) => {
    tagManager.sendEventCategory('Reset', TMEvents.Click, 'reset_attempt', host);
    const resetPassword = await services.changePassword(token, password);

    resetPassword.fold(
      () => {
        tagManager.sendEventCategory('Reset', TMEvents.Submit, 'reset_error', host);
        setStep(Step.ResetError);
      },
      () => {
        tagManager.sendEventCategory('Reset', TMEvents.Submit, 'reset_success', host);
        setStep(Step.ResetOK);
      }
    );
  };

  const onSetPasswordBorrower = async (token, password) => {
    const resetPassword = await services.changePassword(token, password);

    resetPassword.fold(
      () => setStep(Step.BorrowerSignUpError),
      () => setStep(Step.BorrowerSignUpOK)
    );
  };

  const onActivateAccount = async (token) => {
    tagManager.sendEventCategory('ActivateBorrower', TMEvents.Click, 'activate_attempt', host);
    const activateAccount = await services.validateToken({
      token
    });

    activateAccount.fold(
      () => {
        tagManager.sendEventCategory('ActivateBorrower', TMEvents.Submit, 'activate_error', host);
        setStep(Step.BorrowerSignUpError);
      },
      () => {
        tagManager.sendEventCategory('ActivateBorrower', TMEvents.Submit, 'activate_success', host);
        setStep(Step.BorrowerSignUpOK);
      }
    );
  };

  const onRecover = async (email) => {
    tagManager.sendEventCategory('Recover', TMEvents.Click, 'recover_attempt', host);
    const request = await services.recovery(email);

    request.fold(
      () => {
        tagManager.sendEventCategory('Recover', TMEvents.Submit, 'recover_error', host);
        console.log('Something went wrong');
      },
      () => {
        tagManager.sendEventCategory('Recover', TMEvents.Submit, 'recover_success', host);
        setStep(Step.ResetConfirm);
      }
    );
  };

  const onLoginWithBloom = async (result, method) => {
    if (result instanceof Error) {
      if (method === 'Get Started') {
        tagManager.sendEventCategory('Signup', TMEvents.Submit, 'signup_error_bloom', host);
      } else if (method === 'Sign In') {
        tagManager.sendEventCategory('Login', TMEvents.Click, 'login_error_bloom', host);
      }
      return setStep(Step.ErrorWithBloom);
    }

    if (method === 'Get Started') {
      tagManager.sendEventCategory('Signup', TMEvents.Submit, 'signup_success_bloom', host);
    } else if (method === 'Sign In') {
      tagManager.sendEventCategory('Login', TMEvents.Click, 'login_success_bloom', host);
    }

    const login = LocalData.get('firstLogin');

    if (login) {
      if (login === 'first') {
        LocalData.set('firstLogin', 'passed');
      }
    } else {
      LocalData.set('firstLogin', 'first');
    }
    LocalData.setObj('auth', {
      token: result.public_key,
      id: result.id,
      status: result.userstatus_id,
      type: result.accounttype_id
    });

    LocalData.setObj('user', result);

    setAuthCookie(
      {
        token: result.public_key,
        id: result.id,
        status: result.userstatus_id,
        type: result.accounttype_id
      },
      { domain: process.env.REACT_APP_COOKIE_DOMAIN }
    );

    setuserCookie(result, { domain: process.env.REACT_APP_COOKIE_DOMAIN });
    const redirect = pathRedirect || '';
    window.location.href = getHost('APP') + redirect;
    return true;
  };

  const onLogin = async () => {
    tagManager.sendEventCategory('Login', TMEvents.Click, 'login_attempt', host);

    const request = await services.signIn({
      email: credentials.email,
      password: credentials.password,
      'g-recaptcha-response': credentials['g-recaptcha-response']
    });

    request.fold(
      (error) => {
        tagManager.sendEventCategory('Login', TMEvents.Click, 'login_error', host);
        if (error.response.status === 423) {
          const { token } = error.response.data ? error.response.data.data : { token: null };
          setStep(Step.ResendValidationEmail(token));
        }
        setLoginError(true);
      },
      (response) => {
        const {
          data: {
            data: {
              JwtToken,
              user,
              user: { id, status, accounttype_id: accountTypeId }
            }
          }
        } = response;

        const login = LocalData.get('firstLogin');

        if (login) {
          if (login === 'first') {
            LocalData.set('firstLogin', 'passed');
          }
        } else {
          LocalData.set('firstLogin', 'first');
        }

        setAuthCookie(
          {
            id,
            status,
            token: JwtToken,
            type: accountTypeId
          },
          { domain: process.env.REACT_APP_COOKIE_DOMAIN }
        );

        setuserCookie(user, { domain: process.env.REACT_APP_COOKIE_DOMAIN });
        tagManager.sendEventCategory('Login', TMEvents.Click, 'login_success', host);
        window.location.href = getHost('APP') + (pathRedirect || '');
      }
    );
  };

  const onResetToken = async () => {
    setStep(Step.Confirm);
  };

  const closeModal = () => {
    if (initStep) {
      setStep(initStep);
    } else {
      setStep(Step.Start);
    }
    if (onClose) {
      onClose();
    }
  };
  const props = {
    open,
    mountNode,
    blur,
    onClose: closeModal,
    closeButton
  };
  const getStep = () =>
    step.cata({
      Start: () => (
        <PanelWithImage {...props} title="Get Started">
          <GetStarted />
        </PanelWithImage>
      ),
      SignUpWithEmail: () => (
        <PanelWithImage {...props} title="Get Started">
          <GetStartedWithEmail />
        </PanelWithImage>
      ),
      SignUpWithEmailMini: () => <GetStartedWithEmail />,
      SignUpWithBloom: (token) => (
        <Panel {...props}>
          <GetStartedWithBloom
            onBack={() => setStep(Step.Start)}
            token={token}
            method="Get Started"
          />
        </Panel>
      ),
      SignInWithBloom: (token) => (
        <Panel {...props}>
          <GetStartedWithBloom onBack={() => setStep(Step.SignIn)} token={token} method="Sign In" />
        </Panel>
      ),
      StartMini: () => <GetStarted />,
      SignIn: () => (
        <PanelWithImage {...props} title="Login">
          <SignIn />
        </PanelWithImage>
      ),
      SignInWithEmail: () => (
        <Simple {...props}>
          <SignInWithEmail />
        </Simple>
      ),
      SignInWithEmailMini: () => <SignInWithEmail />,
      ErrorWithBloom: () => (
        <Panel {...props}>
          <ErrorBloom onBack={() => setStep(Step.Start)} method="Get Started" />
        </Panel>
      ),
      Confirm: () => (
        <Panel {...props}>
          <Confirm />
        </Panel>
      ),
      Verified: () => (
        <Simple {...props}>
          <Verified />
        </Simple>
      ),
      Verifying: () => (
        <Simple {...props}>
          <Verifying />
        </Simple>
      ),
      VerifiedError: (token) => (
        <Simple {...props}>
          <VerifiedError token={token} />
        </Simple>
      ),
      Reset: () => (
        <Simple {...props}>
          <ResetPassword />
        </Simple>
      ),
      ResetOK: () => (
        <Simple {...props}>
          <ResetOK />
        </Simple>
      ),
      ResetError: () => (
        <Simple {...props}>
          <ResetError />
        </Simple>
      ),
      ResetConfirm: () => (
        <Simple {...props}>
          <ResetConfirm />
        </Simple>
      ),
      ResetPasswordInput: (token) => (
        <Simple {...props}>
          <ResetPasswordInput token={token} />
        </Simple>
      ),
      BorrowerSignUp: (token) => (
        <Simple {...props}>
          <BorrowerSignUp token={token} />
        </Simple>
      ),
      BorrowerSignUpError: () => (
        <Simple {...props}>
          <BorrowerSignUpError />
        </Simple>
      ),
      BorrowerSignUpOK: () => (
        <Simple {...props}>
          <BorrowerSignUpOK />
        </Simple>
      ),
      ResendValidationEmail: (token) => (
        <Simple {...props}>
          <ResendValidationEmail token={token} />
        </Simple>
      )
    });

  return (
    <AppContext.Provider
      value={{
        onSetStep,
        onSetStepWithParam,
        onSetCredentials,
        onSendCredentials,
        onResetPassword,
        onSetPasswordBorrower,
        onActivateAccount,
        onRecover,
        onLoginWithBloom,
        onLogin,
        onResetToken,
        credentials,
        setLoginError,
        referralCode,
        onClose: closeModal,
        error: loginError,
        history
      }}
    >
      {getStep()}
    </AppContext.Provider>
  );
};

// PROVIDE HISTORY PROP

export { Step, App };
export default App;
