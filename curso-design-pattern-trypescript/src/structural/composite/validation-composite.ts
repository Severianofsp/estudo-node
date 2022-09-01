export abstract class ValidationComponente {
  abstract validate(value: unknown): boolean;
}

//Leaf
export class ValidateEmail extends ValidationComponente {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateString extends ValidationComponente {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumber extends ValidationComponente {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /\d+/.test(value);
  }
}

// Composite
export class ValidationComposite extends ValidationComponente {
  private readonly children: ValidationComponente[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }
    return true;
  }
  add(...validations: ValidationComponente[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
}

const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();

const validationComposite = new ValidationComposite();
validationComposite.add(validateEmail);
validationComposite.add(validateString);
validationComposite.add(validateNumber);
console.log(validationComposite.validate('1@gmail.com'));
