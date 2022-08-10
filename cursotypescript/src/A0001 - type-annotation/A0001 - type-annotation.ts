/* eslint-disable */
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-simbolo');
// let big: bigint = 10n;
console.log(nome,idade,adulto,simbolo.toString())


//Arrays
let arrayDeNumeros: Array<number> = [30,20]
let arrayDeNumeros2: number[] = [30,20]
let arrayDeStrings: Array<string> = ['30','20']
let arrayDeStrings2: string[] = ['30','20']

// Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean}={
  nome: 'Felipe',
  idade: 30,
  adulto: true
}
console.log(pessoa)


// Funções

function soma(x:number,y:number): number{
  return x + y;
}
const soma2: (x: number, y:number) => number = (x,y) => x+y;
const result = soma(2,2)
console.log(soma2(3,3))

export default pessoa;
