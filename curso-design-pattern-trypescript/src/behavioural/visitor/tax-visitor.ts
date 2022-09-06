import { AlcohoolicDrink } from './alcohoolic-drink';
import { Cigarette } from './cigarette';
import { Food } from './food';

export interface TaxVisitorProtocol {
  calculateTaxForFood(food: Food): number;
  calculateTaxForCigarette(cigarette: Cigarette): number;
  calculateTaxForAlcohoolicDrink(alcohoolicDrink: AlcohoolicDrink): number;
}
