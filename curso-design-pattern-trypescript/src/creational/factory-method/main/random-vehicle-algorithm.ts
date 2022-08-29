import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-numbers';
import { Vehicle } from '../vehicles/vehicle';

export function randoCarmAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta');
  const bycicle = bicycleFactory.getVehicle('Bicycle');
  const cars = [car1, car2, bycicle];
  return cars[randomNumbers(cars.length)];
}
