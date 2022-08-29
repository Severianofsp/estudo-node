import { Bycicle } from '../vehicles/bycicle';
import { Vehicle } from '../vehicles/vehicle';
import { VehicleFactory } from './vehicle-factory';

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bycicle(vehicleName);
  }
}
