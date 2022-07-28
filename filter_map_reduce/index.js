const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22];

const numerosRequiridos = numeros.filter(n => n > 10);

// console.log(numerosRequiridos)


const nomes = [
    { nome: 'Felipe', idade: 30, removido: false },
    { nome: 'Maria', idade: 23, removido: false },
    { nome: 'Eduardo', idade: 55, removido: false },
    { nome: 'Letícia', idade: 19, removido: false },
    { nome: 'Rosana', idade: 32, removido: false },
    { nome: 'Wallace', idade: 16, removido: false },
    { nome: 'Ana', idade: 15, removido: false }
];

// Filter

const pessoasComNomeGrande = nomes.filter(n => n.nome.length >= 5)
const pessoasComIdadeMaisDeCinquentaAnos = nomes.filter(n => n.idade > 50)
const pessoasComNomeTerminadoEmA = nomes.filter(n => n.nome.toLocaleLowerCase().endsWith('a'))
// console.log(pessoasComNomeTerminadoEmA)


// Map
const verificaIdadeAndRemoveMenoresIdade = nomes.map((n) => {
    if (n.idade < 18) { n.removido = true }
    return n;
});

// console.log(verificaIdadeAndRemoveMenoresIdade)    


// Reduce
const somaNumeros = numeros.reduce( (acumulador, valor) => { 
    return acumulador += valor},0);
console.log(somaNumeros);

const somaIdades = nomes.reduce( (acumulador, valor) => { 
    return acumulador += valor.idade},0);
console.log(somaIdades);