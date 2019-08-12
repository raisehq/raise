import React from 'react';
import daggy from 'daggy';
import GetStarted from './SignUp/GetStarted';
import Register from './SignUp/Register';
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
import PanelModal from './Modals/Panel';
import SimpleModal from './Modals/Simple';
import { IContext, ICredentials, Steps } from './types';
import { defaultContext } from './defaults';
import useAsyncEffect from '../hooks/useAsyncEffect';
import { validateToken } from '../services';
import { to, getHost } from '../utils';
import useCookie from '../hooks/useCookie';
import * as services from '../services';
import useGoogleTagManager from '../hooks/useGoogleTagManager';

const { useState, useEffect, createContext } = React;

export const AppContext = createContext<IContext>(defaultContext);

const Step = daggy.taggedSum('UI', {
  Start: [],
  Register: [],
  SignIn: [],
  Confirm: [],
  Verifying: [],
  Verified: [],
  VerifiedError: [{}],
  Reset: [],
  ResetConfirm: [],
  ResetOK: [],
  ResetError: [],
  ResetPasswordInput: [{}]
});
interface IProps {
  history: any;
  open: boolean;
  blur: boolean;
  mountNode?: any;
  onClose?: () => null;
  closeButton?: boolean;
}

const App = ({
  history,
  open,
  mountNode,
  blur,
  onClose,
  closeButton
}: IProps) => {
  const [step, setStep] = useState(Step.Start);
  const [loginError, setLoginError] = useState<boolean>(false);
  const [credentials, setCredentials] = useState<ICredentials>(
    defaultContext.credentials
  );
  const [referralCode, setRefCode] = useState<string>('');
  const [user, setuserCookie] = useCookie('user', {});
  const [auth, setAuthCookie] = useCookie('auth', {});

  useAsyncEffect(async () => {
    const { pathname } = history.location;
    if (pathname === '/join') {
      setStep(Step.Start);
    }

    if (pathname.includes('verify/token')) {
      const path = pathname.split('/');
      const token = path[path.length - 1];

      setStep(Step.Verifying);

      const verifying = await validateToken({
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
    if (pathname.includes('login')) {
      setStep(Step.SignIn);
    }
    
  }, [history.location.pathname, open]);

  const onSetStep = (step: Steps) => () => setStep(Step[step]);

  const onSetCredentials = (input, value) =>
    setCredentials(creds => ({ ...creds, [input]: value }));

  const onSendCredentials = async () => {
    const signup = await services.signUp({
      ...credentials,
      ...(!!referralCode ? { referrer_code: referralCode } : {}),
      accounttype_id: 1
    });
    signup.fold(
      () => console.log('something went wrong'),
      () => setStep(Step.Confirm)
    );
  };

  const onResetPassword = async (token, password) => {
    const resetPassword = await services.changePassword(token, password);

    resetPassword.fold(
      () => setStep(Step.ResetError),
      () => setStep(Step.ResetOK)
    );
  };

  const onRecover = async email => {
    const request = await services.recovery(email);

    request.fold(
      () => console.log('Something went wrong'),
      () => setStep(Step.ResetConfirm)
    );
  };

  const onLogin = async () => {
    useGoogleTagManager(
      credentials.email,
      'www.raise.it',
      'Login',
      '/join',
      'LoginPage',
      'dataLayer',
      'Click',
      'Login Attempt'
    );

    const request = await services.signIn({
      email: credentials.email,
      password: credentials.password
    });

    request.fold(
      () => setLoginError(true),
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

        useGoogleTagManager(
          id,
          'www.raise.it',
          'Login',
          '/join',
          'LoginPage',
          'dataLayer',
          'Submit',
          'Login Success'
        );

        window.location.href = getHost('APP');
      }
    );
  };

  const onResetToken = async () => {
    setStep(Step.Confirm)
  }

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const refCode = query.get('referralCode');

    if (!!refCode) {
      setRefCode(refCode);
    }
  }, []);

  const onOnClose = () => {
    setStep(Step.Start);
    onClose();
  };

  const getStep = () =>
    step.cata({
      Start: () => (
        <PanelModal>
          <GetStarted />
        </PanelModal>
      ),
      Register: () => (
        <PanelModal>
          <Register />
        </PanelModal>
      ),
      SignIn: () => (
        <SimpleModal>
          <SignIn />
        </SimpleModal>
      ),
      Confirm: () => (
        <SimpleModal>
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
      )
    });

  return (
    <AppContext.Provider
      value={{
        onSetStep,
        onSetCredentials,
        onSendCredentials,
        onResetPassword,
        onRecover,
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
