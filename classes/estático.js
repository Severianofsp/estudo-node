class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    aumentaVolume(){
        this.volume += 2;
    }
    diminuiVolume(){
        this.volume -= 2;
    }
    static trocaPilha(){
        console.log('Trocando pilha')
    }
}

const controle = new ControleRemoto('Samsung');
console.log(controle);
controle.aumentaVolume();
console.log(controle);
controle.aumentaVolume();
console.log(controle);
controle.aumentaVolume();
console.log(controle);

ControleRemoto.trocaPilha();