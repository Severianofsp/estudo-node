import { OrderPending } from './order-pending';
import { ShoppingOrderState } from './shopping-order-state';

export class ShoppingOrder {
  private state: ShoppingOrderState = new OrderPending(this);

  getState(): ShoppingOrderState {
    return this.state;
  }

  setState(state: ShoppingOrderState): void {
    this.state = state;
    console.log(`O estado do pedido agora é ${this.getStateName()}`);
  }

  approvePayment(): void {
    this.state.approvePayment();
  }

  getStateName(): string {
    return this.state.getName();
  }

  rejectPayment(): void {
    this.state.rejectPayment();
  }

  waitPayment(): void {
    this.state.waitPayment();
  }

  shipOrder(): void {
    this.state.shipOrder();
  }
}
