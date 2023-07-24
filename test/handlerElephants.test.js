const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se ao chamar a função handlerElephants sem parâmetros obtemos o returno "undefined"', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Testa se ao chamar a função handlerElephants com parâmetros NÃO "String" ela retorna "Parâmetro inválido, é necessário uma string"', () => {
    const errorMessage = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(123)).toBe(errorMessage);
    expect(handlerElephants(23.56)).toBe(errorMessage);
    expect(handlerElephants(NaN)).toBe(errorMessage);
    expect(handlerElephants(null)).toBe(errorMessage);
    expect(handlerElephants(false)).toBe(errorMessage);
    expect(handlerElephants(true)).toBe(errorMessage);
  });
  it('', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(handlerElephants('name')).toBe('elephants');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('residents')).toEqual(
      [
        {
          name: 'Ilana',
          sex: 'female',
          age: 11,
        },
        {
          name: 'Orval',
          sex: 'male',
          age: 15,
        },
        {
          name: 'Bea',
          sex: 'female',
          age: 12,
        },
        {
          name: 'Jefferson',
          sex: 'male',
          age: 4,
        },
      ],
    );
  });
  it('Testa as propriedades ', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('abc')).toEqual(null);
  });
});
