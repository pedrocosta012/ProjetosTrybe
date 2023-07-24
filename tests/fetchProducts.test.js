require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('É uma função?', () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });
  it('Verifica se a função "fetch" foi chamada', () => {
    expect.assertions(1);
    fetchProducts('computador');
    expect(fetch).toBeCalled();
  });
  it('Verifica se o parâmetro passado à função "fetch" está correto', () => {
    expect.assertions(1);
    fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('Verifica a função "fetchProducts", com "computador" como parâmetro, possui retorno esperado.', async () => {
    expect.assertions(1);
    const entrada = await fetchProducts('computador');
    expect(entrada).toBe(computadorSearch);
  });
  it('Verifica se um erro é retornado ao chamar a função "fetchProducts" sem parâmetros', async () => {
    expect.assertions(1);
    const result = new Error('You must provide an url');
    try {
      await fetchProducts();
    } catch (e) {
      expect(e).toEqual(result);
    }
  });
});
