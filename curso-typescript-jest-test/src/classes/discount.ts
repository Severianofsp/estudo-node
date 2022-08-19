export abstract class Discount {
  protected percent = 0;
  calculate(price: number): number {
    return price - price * this.percent;
  }
}

export class TenPercentDiscount extends Discount {
  protected readonly percent = 0.1;
}

export class FiftyPercentDiscount extends Discount {
  protected readonly percent = 0.5;
}

export class NoPercentDiscount extends Discount {}
