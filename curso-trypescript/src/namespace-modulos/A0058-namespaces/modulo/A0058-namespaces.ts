/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNameSpace {
  export const nome = 'Felipe';

  export class PessoaNameSpace {
    constructor(public nome: string) {}
  }

  const pessoa = new PessoaNameSpace('Felipe');

  export namespace OutroNameSpace {
    export const nome = 'OutroNameSpace';
  }
}
const pessoaNameSpace = new MeuNameSpace.PessoaNameSpace('Felipe');
console.log(pessoaNameSpace);
console.log(MeuNameSpace.nome);
console.log(MeuNameSpace.OutroNameSpace.nome);

const constDoNameSpace = 'Valor da const do NameSpace';
