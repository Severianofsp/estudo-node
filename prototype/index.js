function Pessoa(nome, sobrenome) {
    this.nome = nome,
        this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function () { return `${this.nome} ${this.sobrenome}` };

const p1 = new Pessoa('Felipe', 'Severiano');

const p2 = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}
Object.setPrototypeOf(p2, Pessoa.prototype)

const p3 = Object.create(Pessoa.prototype, {
    nome: { value: 'Maria' },
    sobrenome: { value: 'Silva' }

})

console.log(p1.nomeCompleto())
console.log(p2.nomeCompleto())
console.log(p3.nomeCompleto())