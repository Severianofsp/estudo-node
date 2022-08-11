export class Pessoa {
  constructor(
    private _nome: string,
    private _sobrenome: string,
    private _idade: number,
    private _cpf: string,
  ) {}

  get idade(): number {
    return this._idade;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  get nome(): string {
    return this._nome;
  }
}

const pessoa = new Pessoa('Felipe', 'Severiano', 30, '111.111.111.-11');

console.log(pessoa.nome);
console.log(pessoa.cpf);
pessoa.cpf = '222.222.222-22';
console.log(pessoa.cpf);
console.log(pessoa.nome);
