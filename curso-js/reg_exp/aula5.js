const {alfabeto } = require('./base') 

// [abc] -> Conjunto [^] -> Negação
// [0-9]
// [min-max]
// [^min-max] >> Negação

console.log(alfabeto);
// console.log(alfabeto.match(/[abc123]/g));
// console.log(alfabeto.match(/[abc123]+/g));

// console.log(alfabeto.match(/[^abc123]/g));
// console.log(alfabeto.match(/[^abc123]+/g));

// console.log(alfabeto.match(/[0-9]/g));
// console.log(alfabeto.match(/[0-9]+/g));

// console.log(alfabeto.match(/[A-Z]/g));
// console.log(alfabeto.match(/[A-Z]+/g));

// console.log(alfabeto.match(/[^A-Za-z0-9]+/g));
// console.log(alfabeto.match(/\W+/g));

console.log(alfabeto.match(/[A-Za-z0-9]+/g));
console.log(alfabeto.match(/\w+/g));

