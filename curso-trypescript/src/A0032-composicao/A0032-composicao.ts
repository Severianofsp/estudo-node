export class Carro {
  private readonly motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }

  status(): void {
    this.motor.status();
  }
}

export class Motor {
  private _status = '';

  ligar(): void {
    this._status = 'Ligando';
  }

  acelerar(): void {
    this._status = 'Acelerando';
  }

  parar(): void {
    this._status = 'Parando';
  }

  desligar(): void {
    this._status = 'Desligando';
  }

  status(): void {
    console.log(`Motor está ${this._status}...`);
  }
}

const carro = new Carro();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.status();
