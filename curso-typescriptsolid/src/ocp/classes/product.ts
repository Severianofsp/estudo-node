import { CartItem } from './interfaces/cart-item';

export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }
}
