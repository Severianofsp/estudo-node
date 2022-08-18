interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly endereco: readonly string[];
}
const pessoa: Pessoa = {
  nome: 'Felipe',
  sobrenome: 'Severiano',
  endereco: ['Passagem Thiago'],
};
pessoa.endereco.push('Av Brasil');
console.log(pessoa);
