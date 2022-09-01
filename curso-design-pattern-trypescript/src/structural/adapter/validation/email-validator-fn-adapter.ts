import isEmail from 'validator/lib/isEmail';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './email-valitator-protocol';

export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (
  value: string
): boolean => {
  return isEmail(value);
};
