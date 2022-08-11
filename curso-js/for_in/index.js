const frutas = ['Pera', 'Uva', 'Maçã'];
const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Severiano',
    idade: 30
}

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }

for (const i in frutas) {
    console.log(frutas[i]);
}

for (let key in pessoa){
    console.log(key, pessoa[key]);
}