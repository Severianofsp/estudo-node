/*
Interface segregation principle (Princípio da segregação de Interface) -
os clientes não devem ser forçados a depender de types, interfaces ou membros
abstratos que não utilizam
*/

import { EnterpriseCustomer, IndidualCustomer } from './classes/customer';
import {
  FiftyPercentDiscount,
  NoPercentDiscount,
  TenPercentDiscount,
} from './classes/discount';
import { Order } from './classes/order';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { Message } from './services/message';
import { Persistence } from './services/persistence';

// const tenPercentDiscount = new TenPercentDiscount();
// const noPercentDiscount = new NoPercentDiscount();
const fiftyPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const message = new Message();
const persistence = new Persistence();
const individualCustomer = new IndidualCustomer(
  'Felipe',
  'Severiano',
  '152.000.000-23',
);

const enterpriseCustomer = new EnterpriseCustomer(
  'Empresa grande',
  '11.1111/0001-11',
);
const order = new Order(shoppingCart, message, persistence, enterpriseCustomer);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
