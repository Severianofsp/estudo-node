@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    cor: string;

    constructor(...args: any[]) {
      super();
      this.nome = this.inverter(args[0]);
      this.cor = this.inverter(args[1]);
    }
    inverter(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Felipe', 'Vermelho');
console.log(animal);
