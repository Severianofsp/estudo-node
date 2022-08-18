type VotationOption = {
  numberOfVoutes: number;
  option: string;
};

export class Votation {
  private _votationOptions: VotationOption[] = [];
  constructor(public details: string) {}

  addVotationOption(votationOption: VotationOption): void {
    this._votationOptions.push(votationOption);
  }

  vote(voteIndex: number): void {
    if (!this._votationOptions[voteIndex]) return;
    this._votationOptions[voteIndex].numberOfVoutes += 1;
  }

  get votationOption(): VotationOption[] {
    return this._votationOptions;
  }
}

export class VotationAP {
  private _votations: Votation[] = [];

  addVotation(votation: Votation): void {
    this._votations.push(votation);
  }

  showVotations(): void {
    for (const votation of this._votations) {
      console.log(votation.details);
      for (const votationOption of votation.votationOption) {
        console.log(votationOption.option, votationOption.numberOfVoutes);
      }
      console.log('####');
      console.log(' ');
    }
  }
}

const votation1 = new Votation('Qual sua linguagem de programação preferida?');
votation1.addVotationOption({ option: 'Python', numberOfVoutes: 0 });
votation1.addVotationOption({ option: 'JavaScript', numberOfVoutes: 0 });
votation1.addVotationOption({ option: 'TypeScript', numberOfVoutes: 0 });
votation1.vote(1);
votation1.vote(1);
votation1.vote(0);
votation1.vote(0);

const votation2 = new Votation('Qual sua cor preferida?');
votation2.addVotationOption({ option: 'Vermelho', numberOfVoutes: 0 });
votation2.addVotationOption({ option: 'Azul', numberOfVoutes: 0 });
votation2.addVotationOption({ option: 'Amarelo', numberOfVoutes: 0 });
votation2.vote(2);
votation2.vote(2);
votation2.vote(1);
votation2.vote(1);
votation2.vote(1);
votation2.vote(0);
votation2.vote(0);
const votationAp = new VotationAP();
votationAp.addVotation(votation1);
votationAp.addVotation(votation2);
votationAp.showVotations();
