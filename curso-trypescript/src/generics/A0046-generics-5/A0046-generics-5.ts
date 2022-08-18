export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T): void {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }
  pop(): T | void {
    if (this.isEMpty()) return undefined;
    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }
  isEMpty(): boolean {
    return this.contador === 0;
  }

  lenght(): number {
    return this.contador;
  }
}

const pilha = new Pilha<string | number>();
pilha.push('Teste');
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);
console.log(pilha);
pilha.pop();
pilha.pop();
pilha.pop();
pilha.pop();
pilha.pop();
console.log(pilha);
