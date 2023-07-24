module.exports = function validateId(req, res, next) {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) {
    res.status(400).json({ message: 'the "id" key must be a "number"' });
  } else {
    next();
  }
};
