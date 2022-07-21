let a = 'A';
let b = 'B';
let c = 'C';

const numero = [1, 2, 3];
[a, b, c] = numero;

console.log(a, b, c)

const numeros = [1000, 2000, 3000, 40000, 50000];
const [primeiroNumero, segundoNumero, ...restoNumero] = numeros;

console.log(primeiroNumero, segundoNumero, restoNumero)

const [um, , dois, , tres] = numeros;
console.log(um, dois, tres)