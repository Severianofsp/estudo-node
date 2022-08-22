describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10); // Object.is
    expect(number).toEqual(10);

    expect(number).not.toBeNull();

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(9);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(11);

    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Felipe', age: 30 };
    const anotherPerson = { ...person };

    expect(person).not.toBe(anotherPerson);
    expect(person).toEqual(anotherPerson);

    expect(person).toHaveProperty('age', 30);
    expect(person).toHaveProperty('age', 30);

    expect(person.name).toBe('Felipe');
  });
});
