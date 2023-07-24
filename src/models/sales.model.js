const camelize = require('camelize');
const connection = require('./connection');

const newSale = async () => {
  const date = new Date();
  const nowDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
  const nowHours = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  const nowFullDate = `${nowDate} ${nowHours}`;
  const [salesResult] = await connection.execute(
    'INSERT INTO sales (date) VALUES ( ? )',
    [nowFullDate],
  );
  return salesResult.insertId;
};

const createSale = async (data) => {
  const id = await newSale();
  const readyElements = data.map((element) => ({ saleId: id, ...element }));
  const formattedValues = readyElements
    .map((p) => `(${p.saleId}, ${p.productId}, ${p.quantity})`).join(', ');
  await connection.execute(
      `INSERT INTO sales_products (sale_id, product_id, quantity) Values ${formattedValues}`,
    );
  return { id, itemsSold: data };
};

const findSaleById = async (id) => {
  const [info] = await connection.execute(
    `SELECT * FROM sales_products AS sp
    INNER JOIN sales AS s
    ON s.id = sp.sale_id
    WHERE sale_id = ${id}`,
  );
  const formattedInfo = info.map((s) => {
    const camelized = camelize(s);
    delete camelized.saleId;
    delete camelized.id;
    return camelized;
  });
  return formattedInfo;
};

const findAllSales = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM sales_products AS sp INNER JOIN sales AS s ON s.id = sp.sale_id',
  );
  const formattedResult = result.map((s) => camelize(s));
  return formattedResult;
};

module.exports = { createSale, findAllSales, findSaleById };
