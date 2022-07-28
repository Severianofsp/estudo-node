function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if (valor > this.saldo){
        console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`)
        return;
    }

    this.saldo -= valor;
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
}

Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta} \nSaldo: ${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta(10,10,10);
// conta1.verSaldo();
// conta1.depositar(100)
// conta1.verSaldo();
// conta1.sacar(110); 
// conta1.verSaldo();
// conta1.sacar(110); 

function ContaCorrente(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.call(Conta);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if (valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`)
        return;
    }

    this.saldo -= valor;
}

const contaCorrente = new ContaCorrente(10,10,10,10);