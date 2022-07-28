const falar = {
    falar() {
        console.log(`${this.nome} está falando`)
    }
}

const pessoaPrototype = Object.assign({}, falar);

function criaPessoa(nome, sobrenome, idade) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
        idade: { value: idade }
    })
}

const pessoa1 = criaPessoa('Felipe', 'Severiano', 30);
pessoa1.falar();