import { AlcohoolicDrink } from './alcohoolic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { TaxVisitorProtocol } from './tax-visitor';

export class USTaxVisitor implements TaxVisitorProtocol {
  calculateTaxForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.15;
  }
  calculateTaxForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 2;
  }
  calculateTaxForAlcohoolicDrink(alcohoolicDrink: AlcohoolicDrink): number {
    return alcohoolicDrink.getPrice() + alcohoolicDrink.getPrice() * 1;
  }
}
