import {
  Discount,
  FiftyPercentDiscount,
  NoPercentDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount) => {
  return new className();
};
describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createSut(NoPercentDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should aply 50% discount on price', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('should aply 10% discount on price', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
