import { Message } from '../services/message';
import { Persistence } from '../services/persistence';
import { CustomerOrder } from './interfaces/customer-protocol';
import { MessageProtocol } from './interfaces/message-protocol';
import { OrderStatus } from './interfaces/order-status';
import { PersistenceProtocol } from './interfaces/persitence-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    public readonly cart: ShoppingCartProtocol,
    public readonly message: MessageProtocol,
    public readonly persistence: PersistenceProtocol,
    private readonly customer: CustomerOrder,
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
    console.log(
      `O cliente é ${this.customer.getName()} ${this.customer.getIDN()}`,
    );
    this.persistence.saveOrder();
    this.cart.clear();
  }
}
