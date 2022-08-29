export interface PersonPrototype {
  clone(): PersonPrototype;
}

export class Person implements PersonPrototype {
  public address: Address[] = [];
  constructor(public name: string, public age: number) {}

  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAddress(addAddress: Address): void {
    this.address.push(addAddress);
  }
}
export class Address {
  constructor(public street: string, number: number) {}
}
const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Felipe', 30);
person1.addAddress(address1);

const person2 = person1.clone();
person1.address[0].street = 'Bla bla bla';
console.log(person2);

person2.name = 'Luiz';
console.log(person2.name);
console.log(person2.address);
