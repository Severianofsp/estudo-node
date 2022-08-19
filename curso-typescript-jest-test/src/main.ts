/*
Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.
Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { EnterpriseCustomer, IndidualCustomer } from './classes/customer';
import {
  FiftyPercentDiscount,
  NoPercentDiscount,
  TenPercentDiscount,
} from './classes/discount';
import { MessageProtocol } from './classes/interfaces/message-protocol';
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

class MessaginMock implements MessageProtocol {
  sendMessage(msg: string): void {
    console.log('A mensagem foi enviada pelo MOCK');
  }
}

const messageMock = new MessaginMock();
const order = new Order(
  shoppingCart,
  messageMock,
  persistence,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
