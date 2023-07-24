require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Verifica se é uma função', () => {
    expect.assertions(1);
    expect(typeof fetchItem).toBe('function')
  });
  it('Verifica se a função "fetch" foi chamada em "fetchItem"', () => {
    expect.assertions(1);
    fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  it('Verifica se a função "fetch" foi chamada com o parâmetro correto', () => {
    expect.assertions(1);
    fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  });
  it('Verifica se a função "fetchItem" retorna o objeto esperado', async () => {
    expect.assertions(1);
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  it('Verifica se o erro da função "fetchItem" coincide com o esperado', async () => {
    expect.assertions(1);
    try {
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
