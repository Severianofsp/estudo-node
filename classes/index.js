class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando.`)
    }
}

const p1 = new Pessoa('Felipe', 'Severiano');
p1.falar();