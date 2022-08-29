export interface PersonPrototype {
  clone(): PersonPrototype;
}

export class Person implements PersonPrototype {
  public address: Address[] = [];
  constructor(public name: string, public age: number) {}

  clone(): Person {
    const newObj = new Person(this.name, this.age);
    newObj.address = this.address.map((item) => item.clone());
    return newObj;
  }

  addAddress(addAddress: Address): void {
    this.address.push(addAddress);
  }
}
export class Address implements PersonPrototype {
  constructor(public street: string, public number: number) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}
const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Felipe', 30);
person1.addAddress(address1);

const person2 = person1.clone();
person1.address[0].street = 'Bla bla bla';
console.log(person1);
console.log('--------------');
console.log(person2);

person2.name = 'Luiz';
console.log(person2.name);
console.log(person2.address);
