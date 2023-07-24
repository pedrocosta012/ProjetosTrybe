
const { expect } = require('chai');
const sinon = require('sinon');

const mocks = require('../mocks/products.mock');
const { productsModel } = require('../../../src/models');

const connection = require('../../../src/models/connection')

describe('Camada Models => Testes unitários', () => {
  afterEach(sinon.restore);

  it('Verifica se a função "findAll" retorna os dados esperados', async () => {
    sinon.stub(connection, 'execute').resolves(mocks.allProductsResponse);
    const result = await productsModel.findAll();
    expect(result).to.equal(mocks.allProductsResponse[0]);
  });

  it('Verifica se a função "giveProduct" retorna os dados esperados', async () => {
    sinon.stub(connection, 'execute').resolves([mocks.allProductsResponse]);
    const result = await productsModel.giveProduct(1);
    expect(result).to.equal(mocks.allProductsResponse[0]);
  });

  it('Verifica se a função "pushNewProduct" retorna os dados esperados', async () => {
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);

    const result = await productsModel.pushNewProduct('Product');

    expect(JSON.stringify(result)).to.equal(JSON.stringify({ id: 4, name: 'Product' }));
  });
});
