import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import { Either } from '.';

export default {
  isEmail: (value) => Either.either(isEmail(value)),
  password: (value) => Either.either(isLength(value, { min: 8 })),
};
