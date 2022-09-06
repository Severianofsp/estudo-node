import { TaxVisitorProtocol } from './tax-visitor';
import { VisitableProduct } from './visitable-product';

export class AlcohoolicDrink extends VisitableProduct {
  constructor(protected price: number) {
    super('AlcohoolicDrink', price);
  }

  getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
    return visitor.calculateTaxForAlcohoolicDrink(this);
  }
}
