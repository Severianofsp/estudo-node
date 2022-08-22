import { EnterpriseCustomer, IndidualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndidualCustomer => {
  return new IndidualCustomer(firstName, lastName, cpf);
};

const enterpriseCustomer = (name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};
describe('IndidualCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer(
      'Felipe',
      'Severiano',
      '111.111.111-11',
    );
    expect(sut).toHaveProperty('firstName', 'Felipe');
    expect(sut).toHaveProperty('lastName', 'Severiano');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and idn', () => {
    const sut = createIndividualCustomer(
      'Felipe',
      'Severiano',
      '111.111.111-11',
    );
    expect(sut.getName()).toBe('Felipe Severiano');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have name and cnpj', () => {
    const sut = enterpriseCustomer('Empresa grande', '11.1111/0001-11');

    expect(sut).toHaveProperty('name', 'Empresa grande');
    expect(sut).toHaveProperty('cnpj', '11.1111/0001-11');
  });

  it('should have methods to get name and idn', () => {
    const sut = enterpriseCustomer('Empresa grande', '11.1111/0001-11');

    expect(sut.getName()).toBe('Empresa grande');
    expect(sut.getIDN()).toBe('11.1111/0001-11');
  });
});
