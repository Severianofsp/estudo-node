const nomes = ['Felipe', 'Igor', 'Jeff', 'Flavio'];

for (let i in nomes) {
    console.log(nomes[i]);
}
console.log('######')

for (let i of nomes) {
    console.log(i);
}

console.log('######')
nomes.forEach(function (valor, indice, array) {
    console.log(valor, indice, array)
})