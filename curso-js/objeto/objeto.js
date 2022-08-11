function criaPessoa(nome,sobrenome,idade){
    return {nome,sobrenome,idade};
}
const pessoa1 = criaPessoa('Felipe','Severiano',30);
console.log(pessoa1)
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)

const num = 10;
const num2 = '10';
console.log(num == num2)