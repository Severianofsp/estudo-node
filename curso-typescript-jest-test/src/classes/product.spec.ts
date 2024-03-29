import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};
describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have properties name and price', () => {
    // Sustem under test
    const sut = createSut('Camiseta', 49.9);
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(49.9);
  });

  it('should save Order', () => {
    // Sustem under test
    const sut = createSut('Camiseta', 49.9);
    const sutSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(sutSpy).toBeCalledTimes(1);
  });
});
