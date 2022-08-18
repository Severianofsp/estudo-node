export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    console.log(this.bordao());
    personagem.perderVida(this.ataque);
  }
  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(`${this.emoji} ${this.nome} agora tem ${this.vida} de vida`);
  }
  abstract bordao(): void;
}
class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';
  bordao(): void {
    console.log('GUERREIRA AO ATAQUE');
  }
}
class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';
  bordao(): void {
    console.log('GGGGRRRRRRRRR');
  }
}

const personagem1 = new Guerreira('Mario', 10, 100);
const personagem2 = new Monstro('Bowser', 10, 300);

personagem1.atacar(personagem2);
personagem2.atacar(personagem1);
