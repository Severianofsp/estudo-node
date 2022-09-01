import { DeliveryFactory } from './delivery/delivery-factory';
import { deliveryContext } from './delivery/delivery-context';
const factory = new DeliveryFactory();
deliveryContext(factory, 'Felipe', '1356', 'Av Brasil', 'RJ');
deliveryContext(factory, 'Luana', '1356', 'Av Brasil', 'RJ');
deliveryContext(factory, 'Helena', '2', 'Rua A', 'BH');
deliveryContext(factory, 'Wallace', '10', 'Rua A', 'BH');
deliveryContext(factory, 'Flavio', '502', 'Av Brasil', 'RJ');

console.log();
console.log(factory.getLocations());
