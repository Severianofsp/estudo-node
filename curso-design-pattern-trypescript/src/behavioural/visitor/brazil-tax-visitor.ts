import { AlcohoolicDrink } from './alcohoolic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { TaxVisitorProtocol } from './tax-visitor';

export class BrazilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.1;
  }
  calculateTaxForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 1.5;
  }
  calculateTaxForAlcohoolicDrink(alcohoolicDrink: AlcohoolicDrink): number {
    return alcohoolicDrink.getPrice() + alcohoolicDrink.getPrice() * 0.5;
  }
}
