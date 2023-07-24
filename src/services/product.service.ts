import productsModel from '../models/productsModel';

async function addAProduct(name: string, amount: string) {
  const result = await productsModel.create({ name, amount });
  return { result };
}

async function findAllProducts() {
  const result = await productsModel.findAll();
  return result;
}

const toExport = { addAProduct, findAllProducts };

export default toExport;
