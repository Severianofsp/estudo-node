import { TShirt } from './product/t-shirt';
// import { ProductDecorator } from './product/product-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { ProductCustomizationDecorator } from './product/product-customization-decorator';
const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const tShirStampFrontAndBack = new ProductStampDecorator(tShirtWithStamp);
const tShirCustomized = new ProductCustomizationDecorator(tShirt);
console.log(tShirt.getPrice(), tShirt.getName());
console.log(tShirtWithStamp.getPrice(), tShirtWithStamp.getName());
console.log(tShirCustomized.getPrice(), tShirCustomized.getName());
console.log(
  tShirStampFrontAndBack.getPrice(),
  tShirStampFrontAndBack.getName()
);
