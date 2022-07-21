
// argumentos que sustentam todos os dados enviados 
function funcao1(a, b = 0, c) {
    console.log('Oie')
    console.log(arguments)
    console.log(a + b + c)
}
function funcao2({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}

const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Severiano',
    idade: 30
}

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '%') acumulador %= numero;
        if (operador === '**') acumulador **= numero;
    }
    console.log(acumulador)
};


conta('**', 1, 10, 30, 40, 50, 60, 70);
funcao1(1, null, 3)
funcao2(pessoa)