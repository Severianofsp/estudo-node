export class Calculadora {
  constructor(public numero: number) {}
  ad(n: number) {
    this.numero += n;
    return this;
  }
  sub(n: number) {
    this.numero -= n;
    return this;
  }
  div(n: number) {
    this.numero /= n;
    return this;
  }
  mul(n: number) {
    this.numero *= n;
    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}

const calculadora = new SubCalculadora(10);
calculadora.ad(5).mul(2).div(2).sub(5).pow(2);
console.log(calculadora);
