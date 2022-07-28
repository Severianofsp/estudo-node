function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('Felipe');
console.log(funcao(),funcao2())