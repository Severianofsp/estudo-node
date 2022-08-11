const { texto, arquivos } = require('./base') 

// * (opcionais) 0 ou n {0,}
// + (obrigatório) 1 ou n {1,}
// ? (opcionais) 0 ou 1 {0,1}
// \ Caractere de escape
// {n,m} minimo e máximo
// {10,} minimo 10
// {,10} máximo 10
// const regExp1 = /Jo+ão+/gi;
// console.log(texto.match(regExp1))

const regExp2 = /\.(jp|JP)(e|E)?(g|G)/g

arquivos.forEach((arquivo)=>{
    const valido = arquivo.match(regExp2);
    if(valido){
        console.log(arquivo, );
    }
})