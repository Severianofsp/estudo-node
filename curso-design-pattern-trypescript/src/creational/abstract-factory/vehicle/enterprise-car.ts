import { Customer } from '../customer/customer';
import { Vehicle } from './vehicle';

export class EnterPriseCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {}

  pickup(): void {
    console.log(
      `${this.name} está buscando ${this.customer.name} (Enterprise)`
    );
  }
}
