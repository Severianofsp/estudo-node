// IIE -> Immediately invoked function expression
(function(){
    const sobrenome = 'Luiz';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        return criaNome('Felipe')
    }

    console.log(falaNome())
})();

const nome = 'Felipe';