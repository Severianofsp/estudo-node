import { CarFactory } from './factories/car-factory';
import { randoCarmAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const carFactory = new CarFactory();
const customerNames = ['Ana', 'Joana', 'Helen'];
for (let i = 0; i < 10; i++) {
  const vehicle = randoCarmAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickup(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `Novo car ${randomNumbers(100)}`);
  console.log('-----');
}
