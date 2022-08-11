// forma longa de criação de classe
export class Empresa {
  private readonly nome: string; // public
  private readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  setColaboradores(colaborador: Colaborador[]): void {
    colaborador.forEach((c) => this.colaboradores.push(c));
  }
  getColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
  getNome(): string {
    return this.nome;
  }
}
// forma curta de criação de classe
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Facebook', '11.111.111/0001-11');
// empresa1.nome = 'udemy';

// console.log(empresa1);
const colaboradores1 = new Colaborador('Felipe', 'Severiano');
const colaboradores2 = new Colaborador('Flavio', 'Severiano');
const colaboradores3 = new Colaborador('Igor', 'Reis');
empresa1.setColaboradores([colaboradores1, colaboradores2, colaboradores3]);
console.log(empresa1.getColaboradores());
console.log(empresa1);
