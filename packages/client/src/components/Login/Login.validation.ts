import { isEmail, isLength } from 'validator';
import { Right, Left } from '../../utils/index';

const validationFields = (
  mode: any,
  { email, password, firstname, lastname, accounttype_id, newPassword }: any,
  terms: boolean
) => {
  const validation = mode.cata({
    SignIn: () => ({
      email: isEmail(email || ''),
      password: isLength(password || '', { min: 6 })
    }),
    SignUp: () => ({
      firstname: isLength(firstname || '', { min: 2 }),
      lastname: isLength(lastname || '', { min: 2 }),
      email: isEmail(email || ''),
      password: isLength(password || '', { min: 6 }),
      accounttype_id: accounttype_id,
      terms: terms
    }),
    RecoverPassword: () => ({
      email: isEmail(email || '')
    }),
    NewPassword: () => ({
      password: password === newPassword
    }),
    Redirection: () => ({})
  });

  return Object.values(validation).every(val => !!val)
    ? Right(true)
    : Left(validation);
};

export default validationFields;
