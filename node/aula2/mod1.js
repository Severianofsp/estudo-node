module.exports = class Cachorro{
    constructor(nome){
        this.nome = nome;
    }

    latir(){
        return `${this.nome} está fazendo au au`;
    }
}