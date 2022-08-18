/* eslint-disable @typescript-eslint/no-namespace */
var MeuNameSpace;
(function (MeuNameSpace) {
    MeuNameSpace.nome = 'Felipe';
    var PessoaNameSpace = /** @class */ (function () {
        function PessoaNameSpace(nome) {
            this.nome = nome;
        }
        return PessoaNameSpace;
    }());
    MeuNameSpace.PessoaNameSpace = PessoaNameSpace;
    var pessoa = new PessoaNameSpace('Felipe');
    var OutroNameSpace;
    (function (OutroNameSpace) {
        OutroNameSpace.nome = 'OutroNameSpace';
    })(OutroNameSpace = MeuNameSpace.OutroNameSpace || (MeuNameSpace.OutroNameSpace = {}));
})(MeuNameSpace || (MeuNameSpace = {}));
var pessoaNameSpace = new MeuNameSpace.PessoaNameSpace('Felipe');
console.log(pessoaNameSpace);
console.log(MeuNameSpace.nome);
console.log(MeuNameSpace.OutroNameSpace.nome);
/* eslint-disable @typescript-eslint/triple-slash-reference */
///<reference path="modulo/A0058-namespaces.ts"/>
console.log(MeuNameSpace.OutroNameSpace.nome);
