import React, { useState, useEffect } from 'react';
import daggy from 'daggy';
import 'url-search-params-polyfill';
import { AccountType } from '@raisehq/components';
import AppContext from './App.context';
import GetStarted from './SignUp/GetStarted';
import GetStartedWithEmail from './SignUp/GetStartedWithEmail';
import GetStartedWithBloom from './SignUp/GetStartedWithBloom';
import Confirm from './SignUp/Confirm';
import SignIn from './SignIn/SignIn';
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
import PanelWithImage from './Modals/PanelWithImage';
import Panel from './Modals/Panel';
import SimpleModal from './Modals/Simple';
import { ICredentials, Steps } from './types';
import useAsyncEffect from '../hooks/useAsyncEffect';
import * as services from '../services';
import { getHost } from '../utils';
import useCookie from '../hooks/useCookie';
import LocalData from './localData';
import useGoogleTagManager, { TMEvents } from '../hooks/useGoogleTagManager';
import defaultContext from './defaults';

const Step = daggy.taggedSum('UI', {
  Start: [],
  SignUpWithEmail: [],
  SignUpWithBloom: [],
  StartMini: [],
  SignIn: [],
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
  BorrowerSignUpOK: []
});
interface IProps {
  history: any;
  open: boolean;
  blur: boolean;
  mountNode?: any;
  onClose?: () => null;
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
  const [user, setuserCookie] = useCookie('user', {});
  // @ts-ignore
  const [auth, setAuthCookie] = useCookie('auth', {});
  const tagManager = useGoogleTagManager();
  const { host } = history.location;
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const refCode = query.get('referralCode');

    if (initStep) {
      if (initStep === Step.StartMini) setStartMini(true);
      setStep(initStep);
    }
    if (!!refCode) {
      setRefCode(refCode);
    }
  }, []);

  useAsyncEffect(async () => {
    const { pathname } = history.location;

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
        () => setStep(Step.Verified)
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
  }, [history.location.pathname, open]);

  useEffect(() => {
    /*
      This case is special because this step of the signup or dashboard is already showed in the view
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

  const onSetCredentials = (input, value) => {
    setCredentials(creds => ({ ...creds, [input]: value }));
  };

  const onSendCredentials = async () => {
    tagManager.sendEventCategory('Signup', TMEvents.Click, 'signup_attempt', host);
    const signup = await services.signUp({
      ...credentials,
      ...(!!referralCode ? { referrer_code: referralCode } : {}),
      accounttype_id: AccountType.Lender
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

  const onActivateAccount = async token => {
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

  const onRecover = async email => {
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

  const onLoginWithBloom = async result => {
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
    window.location.href = getHost('APP') + (pathRedirect ? pathRedirect : '');
  };

  const onLogin = async () => {
    tagManager.sendEventCategory('Login', TMEvents.Click, 'login_attempt', host);

    const request = await services.signIn({
      email: credentials.email,
      password: credentials.password,
      'g-recaptcha-response': credentials['g-recaptcha-response']
    });

    request.fold(
      () => {
        tagManager.sendEventCategory('Login', TMEvents.Click, 'login_error', host);
        setLoginError(true);
      },
      response => {
        const {
          data: {
            data: {
              JwtToken,
              user,
              user: { id, status, accounttype_id }
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
            type: accounttype_id
          },
          { domain: process.env.REACT_APP_COOKIE_DOMAIN }
        );

        setuserCookie(user, { domain: process.env.REACT_APP_COOKIE_DOMAIN });
        tagManager.sendEventCategory('Login', TMEvents.Click, 'login_success', host);
        window.location.href = getHost('APP') + (pathRedirect ? pathRedirect : '');
      }
    );
  };

  const onResetToken = async () => {
    setStep(Step.Confirm);
  };

  const onOnClose = () => {
    if (initStep) {
      setStep(initStep);
    } else {
      setStep(Step.Start);
    }
    if (onClose) {
      onClose();
    }
  };

  const getStep = () =>
    step.cata({
      Start: () => (
        <PanelWithImage>
          <GetStarted />
        </PanelWithImage>
      ),
      SignUpWithEmail: () => (
        <PanelWithImage>
          <GetStartedWithEmail />
        </PanelWithImage>
      ),
      SignUpWithBloom: () => (
        <Panel>
          <GetStartedWithBloom onBack={() => setStep(Step.Start)} />
        </Panel>
      ),
      StartMini: () => <GetStarted mini />,
      SignIn: () => (
        <SimpleModal>
          <SignIn />
        </SimpleModal>
      ),
      Confirm: () => (
        <SimpleModal localClose>
          <Confirm />
        </SimpleModal>
      ),
      Verified: () => (
        <SimpleModal>
          <Verified />
        </SimpleModal>
      ),
      Verifying: () => (
        <SimpleModal>
          <Verifying />
        </SimpleModal>
      ),
      VerifiedError: token => (
        <SimpleModal>
          <VerifiedError token={token} />
        </SimpleModal>
      ),
      Reset: () => (
        <SimpleModal>
          <ResetPassword />
        </SimpleModal>
      ),
      ResetOK: () => (
        <SimpleModal>
          <ResetOK />
        </SimpleModal>
      ),
      ResetError: () => (
        <SimpleModal>
          <ResetError />
        </SimpleModal>
      ),
      ResetConfirm: () => (
        <SimpleModal>
          <ResetConfirm />
        </SimpleModal>
      ),
      ResetPasswordInput: token => (
        <SimpleModal>
          <ResetPasswordInput token={token} />
        </SimpleModal>
      ),
      BorrowerSignUp: token => (
        <SimpleModal>
          <BorrowerSignUp token={token} />
        </SimpleModal>
      ),
      BorrowerSignUpError: () => (
        <SimpleModal>
          <BorrowerSignUpError />
        </SimpleModal>
      ),
      BorrowerSignUpOK: () => (
        <SimpleModal>
          <BorrowerSignUpOK />
        </SimpleModal>
      )
    });

  return (
    <AppContext.Provider
      value={{
        onSetStep,
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
        onClose: onOnClose,
        blur,
        error: loginError,
        mountNode,
        closeButton,
        open
      }}
    >
      {getStep()}
    </AppContext.Provider>
  );
};

//PROVIDE HISTORY PROP
export default App;

export { Step, App };
