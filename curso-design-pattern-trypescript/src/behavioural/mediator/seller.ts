import { Mediator } from './mediator';
import { SellerProduct } from './seller-product';

export class Seller {
  private procucts: SellerProduct[] = [];
  private mediator?: Mediator;

  showProducts(): void {
    this.procucts.forEach((product) =>
      console.log(product.id, product.name, product.price)
    );
  }

  addProduct(...procucts: SellerProduct[]): void {
    procucts.forEach((product) => this.procucts.push(product));
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }

  sell(id: string): SellerProduct | void {
    const productIndex = this.procucts.findIndex(
      (procuct) => (procuct.id = id)
    );

    if (productIndex === -1) return;

    const procuct = this.procucts.slice(productIndex, 1);
    return procuct[0];
  }
}
