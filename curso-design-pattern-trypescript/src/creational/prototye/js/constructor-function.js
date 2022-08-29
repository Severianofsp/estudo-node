function Person(firstName, lastname, age) {
  this.firstName = firstName;
  this.lastname = lastname;
  this.age = age;
}

const personPrototype = {
  firstName: 'Felipe',
  lastname: 'Severiano',
  age: 30,

  fullName() {
    return `${this.firstName}  ${this.lastname}`;
  },
};
Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastname, age) {
  Person.call(this, firstName, lastname, age);
  this.fromSubClass = 'Hello';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Luiz', 'Miranda', 30);
console.log(person1.fullName());
const person2 = new SubPerson('Helena', 'Vireia', 20);
console.log(person2);
