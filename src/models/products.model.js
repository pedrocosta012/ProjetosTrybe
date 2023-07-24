const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products',
  );
  return products;
};

const giveProduct = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );
  return product;
};

const pushNewProduct = async (name) => {
  const [createdProduct] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );
  return { id: createdProduct.insertId, name };
};

const altAProduct = async ({ id, name }) => {
  const [result] = await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [name, id],
  );
  if (result.affectedRows === 1) return { id, name };
  return { error: { status: 500, message: 'Database is not responding' } };
};

const deleteAProduct = async (id) => {
  const result = await connection.execute(
    'DELETE FROM products WHERE id = ?',
    [id],
  );
  console.log(result);
  return true;
};

module.exports = { findAll, giveProduct, pushNewProduct, altAProduct, deleteAProduct };
