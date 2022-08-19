import { Order } from './entities/order';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';
import { Message } from './services/message';
import { Persistence } from './services/persistence';

const shoppingCart = new ShoppingCart();
const message = new Message();
const persistence = new Persistence();
const order = new Order(shoppingCart, message, persistence);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lápis', 1.59));

// shoppingCart.clear();
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
// console.log(shoppingCart.items);
// console.log(shoppingCart.total());
