// Array<T> - T[]
export function multiplica(...args: number[]): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

console.log(multiplica(1, 2, 3, 4, 5));
console.log(concatenaString('1', '2', '3', '4', '5'));
