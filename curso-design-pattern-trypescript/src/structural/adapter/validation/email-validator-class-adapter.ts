import isEmail from 'validator/lib/isEmail';
import { EmailValidatorProtocol } from './email-valitator-protocol';
export class EmailValidatorClassAdapter implements EmailValidatorProtocol {
  isEmail(value: string): boolean {
    return isEmail(value);
  }
}
