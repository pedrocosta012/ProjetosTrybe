const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsController = require('../../../src/controllers/products.controller');
const { productsService } = require('../../../src/services');
const mock = require('../mocks/products.mock');

describe('Camada Controller => Testes unitários', () => {
  afterEach(sinon.restore)

  it('Verifica se é possível retornar todos os produtos', async () => {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'findAll').resolves(mock.allProductsResponse[0]);

    await productsController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(mock.allProductsResponse[0]);
  });

  it('Verifica se id invalido retorna erro', async () => {
    const res = {};
    const req = { params: { id: 9999 } };
    const errorObject = { message: 'Product not found' };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'thisProductExists').resolves(errorObject);

    await productsController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(errorObject);
  });

  it('Verifica se id valido retorna produto desejado', async () => {
    const res = {};
    const req = { params: { id: 1 } };
    const successObject = { product: { id: 1, name: 'Martelo de Thor' }};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'thisProductExists').resolves(successObject);

    await productsController.getProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(successObject.product);
  });

  it('Verifica se é possível criar um novo produto', async () => {
    const res = {};
    const req = { body: { name: 'ProdutoDeTeste' } };
    const wantedResponse = { id: 4, name: 'ProdutoDeTeste' };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'addNewProduct').resolves({ createdProduct: wantedResponse });

    await productsController.postProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(wantedResponse);
  });

  it('Verifica se não é possivel criar um produto sem nome', async () => {
    const res = {};
    const req = { body: {} };
    const wantedResponse = { message: '"name" length must be at least 5 characters long' };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'addNewProduct').resolves(wantedResponse);

    await productsController.postProduct(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(wantedResponse);
  });
});
