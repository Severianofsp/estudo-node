import { AlcohoolicDrink } from './alcohoolic-drink';
import { BrazilTaxVisitor } from './brazil-tax-visitor';
import { Cigarette } from './cigarette';
import { Food } from './food';
import { USTaxVisitor } from './us-tax-visitor';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcohoolicDrink = new AlcohoolicDrink(5);
const brazilTaxVisitor = new BrazilTaxVisitor();
const uSTaxVisitor = new USTaxVisitor();

const cart = [food, cigarette, alcohoolicDrink];

const total = cart.reduce((sum, item) => sum + item.getPrice(), 0);
const totalWithTaxesBrazil = cart.reduce(
  (sum, item) => sum + item.getPriceWithTaxes(brazilTaxVisitor),
  0
);
const totalWithTaxesUS = cart.reduce(
  (sum, item) => sum + item.getPriceWithTaxes(uSTaxVisitor),
  0
);
console.log(total);
console.log(totalWithTaxesBrazil);
console.log(totalWithTaxesUS);
