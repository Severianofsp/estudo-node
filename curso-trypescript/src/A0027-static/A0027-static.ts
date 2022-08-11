export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '0';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Felipe', 'Severiano', 30, '111.111.111.-11');

console.log(pessoa.nome);
console.log(pessoa.cpf);
pessoa.cpf = '222.222.222-22';
console.log(pessoa.cpf);
console.log(pessoa.nome);
const pessoa2 = Pessoa.criaPessoa('Felipe', 'Severiano');
console.log(pessoa2);
