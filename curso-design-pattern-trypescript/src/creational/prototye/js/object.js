const personPrototype = {
  firstName: 'Felipe',
  lastname: 'Severiano',
  age: 30,

  fullName() {
    return `${this.firstName}  ${this.lastname}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Luiz';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
