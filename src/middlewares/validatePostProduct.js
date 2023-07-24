module.exports = function validatePostProduct(req, res, next) {
  const product = req.body;

  if (!product.every((p) => typeof p.productId === 'number')) {
    res.status(400).json({ message: '"productId" is required' });
  } else if (!product.every((p) => typeof p.quantity === 'number')) {
    res.status(400).json({ message: '"quantity" is required' });
  } else if (!product.every((p) => p.productId > 0)) {
    res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  } else if (!product.every((p) => p.quantity > 0)) {
    res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  } else {
    next();
  }
};
