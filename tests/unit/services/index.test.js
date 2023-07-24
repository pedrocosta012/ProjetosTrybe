
const { expect } = require('chai');
const sinon = require('sinon');

const mocks = require('../mocks/products.mock');
const { productsModel } = require('../../../src/models');
const { productsService } = require('../../../src/services');

describe('Camada Services => Testes unitários', () => {
  afterEach(sinon.restore);

  it('Verifica se a mensagem de erro é retornada em um objeto na chave "message" quando o id é inválido', async () => {
    sinon.stub(productsModel, 'giveProduct').returns(undefined);

    const result = await productsService.thisProductExists(99999)

    expect(result).to.be.deep.equal({ message: 'Product not found'})
  });

  it('Verifica se a função "thisProductExists" retorna os dados obtidos na chave product de um objeto', async () => {
    const wishedReturn = { id: 1, name: 'Martelo de Thor' };
    sinon.stub(productsModel, 'giveProduct').returns(wishedReturn);

    const result = await productsService.thisProductExists(1)

    expect(result).to.be.deep.equal({ product: wishedReturn })
  });

  it('Verifica se a função "findAll" retorna todos os produtos em uma lista de objetos', async () => {
    sinon.stub(productsModel, 'findAll').returns(mocks.allProductsResponse[0]);

    const result = await productsService.findAll();

    expect(result).to.be.deep.equal(mocks.allProductsResponse[0]);
  });

  it('Verifica se o objeto do produto criado é retornado', async () => {
    const data = { id: 4, name: 'Product' }
    sinon.stub(productsModel, 'pushNewProduct').returns(data);

    const result = await productsService.addNewProduct('Product');

    expect(result).to.be.deep.equal({ createdProduct: data});
  });

  it('Verifica se "name" inválido retorna erro', async () => {
    const result = await productsService.addNewProduct('');

    expect(result).to.be.deep.equal({ message: '"name" length must be at least 5 characters long'});
  });
});
