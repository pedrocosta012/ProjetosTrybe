const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Macarrão', 'Arroz'))).toEqual(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.values(productDetails('Feijão', 'Açúcar')).length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof Object.values(productDetails('Biscoito', 'Bolacha'))[0]).toBe('object');
    expect(typeof Object.values(productDetails('Mandioca', 'Macaxeira'))[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(Object.entries(productDetails('Ketchup', 'Mostarda'))[0] === Object.entries(productDetails('Ketchup', 'Mostarda'))[1]).toBe(false);
    // Teste se os dois productIds terminam com 123.
    expect(productDetails('Manteiga', 'Margarina')[0].details.productId.endsWith('123')).toBe(true);
    expect(productDetails('Acém', 'Suã')[1].details.productId.endsWith('123')).toBe(true);
  });
});
