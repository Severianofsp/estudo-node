import { Message } from './message';

const createSut = () => {
  return new Message();
};
describe('Message', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // Sustem under test
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Sua mensagem foi enviada:", msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Sua mensagem foi enviada: teste');
  });
});
