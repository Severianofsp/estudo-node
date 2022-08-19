import { PersistenceProtocol } from '../classes/interfaces/persitence-protocol';

export class Persistence implements PersistenceProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }
}
