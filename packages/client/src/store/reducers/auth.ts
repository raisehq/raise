export default (state: any, action: any) => {
  switch (action.type) {
    case 'SIGNIN_ERROR':
      return {
        ...state,
        ...{
          login: {
            logged: false,
            redirect: false,
            error: true,
            stack: action.data,
            signup: false
          },
          token: '',
          id: '',
          status: 0,
          type: 0
        }
      };

    case 'SIGNOUT_SUCCESS': {
      return {
        ...state,
        ...{
          login: {
            logged: false,
            redirect: false,
            error: false,
            signup: false,
            stack: ''
          },
          token: '',
          id: '',
          status: 0,
          type: 0
        }
      };
    }

    case 'EMAIL_NOT_VERIFIED':
      return {
        ...state,
        ...{
          login: {
            logged: false,
            redirect: false,
            error: true,
            stack: action.data,
            signup: false
          },
          token: '',
          id: '',
          status: 0,
          type: 0
        }
      };

    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        login: {
          logged: true,
          redirect: true,
          error: false,
          signup: false
        },
        token: action.response.JwtToken,
        id: action.response.user.id,
        status: action.response.user.status,
        type: action.response.user.accounttype_id
      };

    case 'SIGNUP_ERROR':
      const newState = {
        ...state,
        ...{
          login: {
            logged: false,
            redirect: false,
            error: true,
            stack: action.error,
            signup: false
          },
          id: '',
          token: '',
          status: 0,
          type: 0
        }
      };
      return newState;

    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        ...{
          login: { signup: true, logged: false, redirect: true, error: false }
        }
      };

    case 'RECOVERY_ERROR':
      return {
        ...state,
        ...{
          login: {
            logged: false,
            redirect: false,
            error: true,
            stack: action.error,
            signup: false,
            reset: false
          }
        }
      };

    case 'RECOVERY_SUCCESS':
      return {
        ...state,
        ...{
          login: {
            logged: false,
            redirect: true,
            error: false,
            signup: false,
            reset: true
          }
        }
      };

    case 'NEW_PASSWORD_SUCCESS': {
      return {
        ...state,
        newPassword: true,
        newPasswordError: false
      };
    }

    case 'NEW_PASSWORD_ERROR': {
      return {
        ...state,
        newPassword: true,
        newPasswordError: true
      };
    }

    case 'PLACEHOLDER':
      return {
        ...state,
        ...{
          login: {
            logged: false,
            redirect: false,
            error: true,
            stack: action.error,
            signup: false
          },
          token: '',
          id: '',
          status: 0,
          type: 0
        }
      };

    case 'SET_USER_SESSION':
      return {
        ...state,
        ...{
          id: action.response.user.id,
          status: action.response.user.status,
          type: action.response.user.accounttype_id
        }
      };
    case 'AUTH_TOKEN_VERIFIED':
      return {
        ...state,
        ...{
          login: {
            logged: true,
            redirect: true,
            error: false,
            signup: false
          },
        }
      }
    default:
      return state;
  }
};
