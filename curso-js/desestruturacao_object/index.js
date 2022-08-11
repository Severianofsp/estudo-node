const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Severiano',
    idade: 30,
    endereco: {
        rua: 'Passagem Thiago',
        numero: 14
    }
};

const { nome, sobrenome, idade, endereco: { rua: r, numero }, endereco } = pessoa;
// console.log(nome, sobrenome, idade, r, numero, endereco)

const{nome: nome2, ...rest} = pessoa

console.log(nome2, rest)