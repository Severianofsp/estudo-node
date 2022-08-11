export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `Vem de Aluno: ${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Vem de Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Felipe', 'Severiano', 30, '111.111.111.-11');
const pessoa = new Pessoa('Felipe', 'Severiano', 30, '111.111.111.-11');
const cliente = new Cliente('Felipe', 'Severiano', 30, '111.111.111.-11');

console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
