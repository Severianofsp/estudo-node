import { EnterpriseCreateVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory copy';
import { IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const indivudalFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Fusca', 'Joao');
const car2 = indivudalFactory.createVehicle('Celta', 'Helena');

car1.pickup();
car2.pickup();
