enum Cores {
  VERMELHO,
  AZUL,
  AMARELO,
}

enum Cores {
  ROXO = 3,
  VERDE,
  ROSA,
}

// console.log(Cores);
// console.log(Cores.VERMELHO);
// console.log(Cores[0]);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaCor(2);
