import ordersModels from '../models/ordersModels';

async function getOrders() {
  const result = await ordersModels.findAll();
  return result;
}

const toExport = { getOrders };
export default toExport;
