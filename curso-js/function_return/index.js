function criaMultiplicador(multiplicador){
    return (n) => n * multiplicador
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log('duplica',duplica(2))
console.log('triplica', triplica(2))
console.log('quadruplica',quadruplica(2))