/*
  Open/Closed principle
  Entidades devem estar abertar para extensão e fechadas para modificação.
*/

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
const order = new Order(shoppingCart, message, persistence);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
