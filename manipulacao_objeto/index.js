function Produto(nome,preco){
    this.nome = nome,
    this.preco = preco
}

const camisa = new Produto('Camisa', 1.8);

// Freeze - congela objeto
Object.freeze(camisa);

//Object.assing - copia objeto
const caneca = Object.assign({},camisa, {material: 'porcelana'});

// spread - copia objeto
const bermuda = {...camisa};


//Object.getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(caneca,'nome'));

Object.defineProperty(caneca,'nome',{
    writable: true,
    enumerable: false,
    configurable: true
});

console.log(Object.getOwnPropertyDescriptor(caneca,'nome'));

console.log(camisa);
console.log(caneca);