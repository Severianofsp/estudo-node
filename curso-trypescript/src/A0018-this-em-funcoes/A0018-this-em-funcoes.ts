export function funcao(this: Date, argumento1: string, age: number): void {
  console.log(this);
  console.log(argumento1);
  console.log(age);
}
funcao.call(new Date(), 'Felipe', 30);
funcao.apply(new Date(), ['Felipe', 30]);
