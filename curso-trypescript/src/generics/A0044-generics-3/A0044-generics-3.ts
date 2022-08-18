interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Felipe',
  sobrenome: 'Severiano',
  idade: 30,
};
const aluno2: PessoaProtocolo<number, number> = {
  nome: 213,
  sobrenome: 321312,
  idade: 30,
};

const aluno3: PessoaProtocolo2 = {
  nome: 'Luiz',
  sobrenome: 'Otavio',
  idade: 30,
};
console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
