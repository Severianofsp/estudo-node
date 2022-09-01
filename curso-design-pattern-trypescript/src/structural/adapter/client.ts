import { EmailValidatorClassAdapter } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-valitator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string
) {
  if (emailValidator.isEmail(email)) {
    console.log('É valido (Class)');
  } else {
    console.log('É inválido (class)');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string
) {
  if (emailValidator(email)) {
    console.log('É valido (FN)');
  } else {
    console.log('É inválido (FN)');
  }
}
const email = 'felipe@gmail.com';
validaEmailClass(new EmailValidatorClassAdapter(), email);
validaEmailFn(emailValidatorFnAdapter, email);
