type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (object, chave) => object[chave];

const animal = {
  cor: 'Vermelho',
  vacina: ['Vacina1', 'Vacina2'],
};

const vacinas = obterChave(animal, 'vacina');
const cor = obterChave(animal, 'cor');
console.log(vacinas);
console.log(cor);
