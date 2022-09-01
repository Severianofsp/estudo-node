import { DeliveryFlyWeight } from './deliery-flyweight';
import { DeliveryLocationData } from './delivery-types';

export class DeliveryLocation implements DeliveryFlyWeight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  delievry(name: string, number: string): void {
    console.log('Entrega para %s', name);
    console.log('Em', this.intrinsicState.street, this.intrinsicState.city);
    console.log('Número', number);
    console.log('$$$$');
  }
}
