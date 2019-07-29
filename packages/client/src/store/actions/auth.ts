import {
  signIn,
  signUp,
  recovery,
  getUser,
  changePassword,
  checkUsername,
  checkEmail,
  verifyAuth
} from '../../services/auth';
import LocalData from '../../helpers/localData';
import * as Type from '../store.types';
import { Either, to, getHost } from '../../utils/index';
import { Status } from '../../commons/userStatus';

export default (dispatch: any, state: any) => {
  const onSignin = async ({ email, password }: Type.onSignin) => {
    const request = await to(signIn({ email, password }));

    request.fold(
      error => dispatch({ type: 'SIGNIN_ERROR', data: 'Invalid credentials' }),
      response => {
        const { user } = response;
        const userStatus = Either.either(user.status >= Status.EMAIL_VERIFIED);

        userStatus.fold(
          error => {
            return dispatch({
              type: 'EMAIL_NOT_VERIFIED',
              data:
                'Your email is not verified. Please check your inbox and verify it.'
            });
          },
          () => {
            LocalData.setObj('auth', {
              token: response.JwtToken,
              id: user.id,
              status: user.status,
              type: user.accounttype_id
            });

            LocalData.setObj('user', user);
            return dispatch({ type: 'SIGNIN_SUCCESS', response });
          }
        );
      }
    );
  };

  const onRecovery = async (email: Type.onRecovery) => {
    try {
      await recovery(email);

      return dispatch({ type: 'RECOVERY_SUCCESS' });
    } catch (error) {
      return dispatch({ type: 'RECOVERY_ERROR', error });
    }
  };

  const onChangePassword = token => async email => {
    const request = await changePassword(token, email);

    request.fold(
      () => dispatch({ type: 'NEW_PASSWORD_ERROR' }),
      () => dispatch({ type: 'NEW_PASSWORD_SUCCESS' })
    );
  };

  const onSignup = async (data: Type.onSignup) => {
    try {
      const response = await signUp({ ...data, accounttype_id: 1 });

      return dispatch({ type: 'SIGNUP_SUCCESS', response });
    } catch (error) {
      return dispatch({ type: 'SIGNUP_ERROR', error });
    }
  };

  const onSignout = () => {
    LocalData.remove('user');
    LocalData.remove('auth');
    window.location.href = `${getHost('APP')}/join/login`;
  };

  const getUserAuth = async () => {
    try {
      const {
        auth: { id }
      } = state;

      const user = await getUser(id);
      const { token } = LocalData.getObj('auth') || '{}';
      LocalData.setObj('auth', {
        token,
        id: user.id,
        status: user.status,
        type: user.accounttype_id
      });
      const response = { user };
      dispatch({ type: 'SET_USER_SESSION', response });
    } catch (error) {
      console.error('ERROR : ', error);
    }
  };

  const onCheckUsername = checkUsername;

  const onCheckEmail = checkEmail;

  const onVerifyAuth = async () => {
    try {
      await verifyAuth();
      dispatch({ type: 'AUTH_TOKEN_VERIFIED' });
    } catch (error) {
      LocalData.remove('user');
      LocalData.remove('auth');
    }
  };

  return {
    onSignin,
    onRecovery,
    onSignup,
    onSignout,
    getUserAuth,
    onChangePassword,
    onCheckUsername,
    onCheckEmail,
    onVerifyAuth
  };
};
