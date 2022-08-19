import { Message } from '../services/message';
import { Persistence } from '../services/persistence';
import { OrderStatus } from './interfaces/order-status';
import { Product } from './product';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    public readonly cart: ShoppingCart,
    public readonly message: Message,
    public readonly persistence: Persistence,
  ) {}
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
    }

    this._orderStatus = 'closed';
    this.message.sendMessage(
      `Seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido`,
    );
    this.persistence.saveOrder();
    this.cart.clear();
  }
}
