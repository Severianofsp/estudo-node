function Produto(nome, preco) {
    this.nome = nome,
        this.preco = preco
}

Produto.prototype.aumenta = function (quantia) {
    return this.preco += quantia
}


Produto.prototype.diminui = function (quantia) {
    return this.preco -= quantia
}

function Camisa(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camisa.prototype = Object.create(Produto.prototype)
Camisa.prototype.constructor = Camisa

const produto = new Produto('Gen', 1111)
const camisa = new Camisa('Camisa', 17.0)
produto.aumenta(10)
console.log(produto)
camisa.aumenta(10)
console.log(camisa)