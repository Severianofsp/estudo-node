/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class ProductComponente {
  abstract getPrice(): number;

  add(product: ProductComponente): void {}
  remove(product: ProductComponente): void {}
}
//LEAF
export class ProductLeaf extends ProductComponente {
  constructor(public name: string, public price: number) {
    super();
  }
  getPrice(): number {
    return this.price;
  }
}
// COMPOSITE
export class ProductComposite extends ProductComponente {
  private children: ProductComponente[] = [];
  add(...products: ProductComponente[]): void {
    products.forEach((product) => this.children.push(product));
  }
  remove(product: ProductComponente): void {
    const productIndex = this.children.indexOf(product);

    if (productIndex !== -1) {
      this.children.splice(productIndex, 1);
    }
  }
  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

//CLIENT
const pen = new ProductLeaf('Caneta', 1);
const smartphone = new ProductLeaf('Smartphone', 1_000);
const tshirt = new ProductLeaf('Camieta', 40);
const productBox = new ProductComposite();
productBox.add(pen, smartphone, tshirt);

const tablet = new ProductLeaf('Tablet', 2_000);
const kindle = new ProductLeaf('Kindle', 300);
const anotherProductBox = new ProductComposite();

anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());
