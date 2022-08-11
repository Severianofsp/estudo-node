const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
} = {
  chaveA: 'chaveA',
  chaveB: 'chaveB',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveB;
