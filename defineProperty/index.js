function Produto(nome, preco, estoque) {
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        configurable: false, //configurável
        get: () => estoquePrivado,
        set: (valor) => estoquePrivado = valor
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra chave
            value: nome, //valor
            writable: false, // pode alterar
            configurable: false //configurável
        },
        preco: {
            enumerable: true, // mostra chave
            value: preco, //valor
            writable: false, // pode alterar
            configurable: false //configurável
        }
    })
}

const p1 = new Produto('Camisa', 10.10, 10)
console.log(Object.keys(p1))
console.log(p1.estoque)
p1.estoque = 20
console.log(p1.estoque)