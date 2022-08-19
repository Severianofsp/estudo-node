import { MessageProtocol } from '../classes/interfaces/message-protocol';

export class Message implements MessageProtocol {
  sendMessage(msg: string): void {
    console.log(`Sua mensagem foi enviada: ${msg}`);
  }
}
