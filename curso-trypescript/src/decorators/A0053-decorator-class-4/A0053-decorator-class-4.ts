type Constructor = new (...args: any[]) => any;

function inverteNomeCor(param1: string, param2: string) {
  //Closure
  return function <T extends Constructor>(target: T): T {
    console.log('Sou o decorador e recebi', target);

    return class extends target {
      cor: string;

      constructor(...args: any[]) {
        super();
        this.nome = this.inverter(args[0]);
        this.cor = this.inverter(args[1]);
      }
      inverter(valor: string): string {
        return (
          valor.split('').reverse().join('') + ' ' + param1 + ' ' + ' ' + param2
        );
      }
    };
  };
}

function outroDecorador<T extends Constructor>(target: any): any {
  console.log('Sou outro decorador');
}
@outroDecorador
@inverteNomeCor('Valor1', 'Valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Felipe', 'Vermelho');
console.log(animal);
