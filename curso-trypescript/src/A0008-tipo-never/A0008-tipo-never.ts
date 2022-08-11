export function criarErro(): never {
  throw new Error('erro qualquer');
}
criarErro();
