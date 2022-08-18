function inverteNomeCor<T extends new (...args: any[]) => any>(target: T): T {
  console.log('Sou o decorador e recebi', target);

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

@inverteNomeCor
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

// const animal = new Animal('Felipe', 'Vermelho');
// console.log(animal);
