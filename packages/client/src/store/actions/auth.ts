import {
  signIn,
  getUser,
  checkUsername,
  checkEmail,
  verifyAuth
} from '../../services/auth';
import LocalData from '../../helpers/localData';
import * as Type from '../store.types';
import { Either, to, getHost } from '../../utils/index';
import { Status } from '../../commons/userStatus';
import * as Cookies from 'js-cookie';

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

  const onSignout = () => {
    LocalData.remove('user');
    LocalData.remove('auth');
    Cookies.remove('auth', { path: '/', domain: process.env.REACT_APP_COOKIE_DOMAIN});
    Cookies.remove('user', { path: '/', domain: process.env.REACT_APP_COOKIE_DOMAIN});
    window.location.href = `${getHost('APP')}/login`;
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
      Cookies.remove('auth', { path: '/', domain: process.env.REACT_APP_COOKIE_DOMAIN});
      Cookies.remove('user', { path: '/', domain: process.env.REACT_APP_COOKIE_DOMAIN});
    }
  };

  return {
    onSignin,
    onSignout,
    getUserAuth,
    onCheckUsername,
    onCheckEmail,
    onVerifyAuth
  };
};
