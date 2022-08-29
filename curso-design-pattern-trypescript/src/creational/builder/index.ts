import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';
const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeBeverage().makeDessert();
console.log(mainDishBuilder.getPrice());
console.log(mainDishBuilder.getMeal());

mainDishBuilder.reset();
const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
