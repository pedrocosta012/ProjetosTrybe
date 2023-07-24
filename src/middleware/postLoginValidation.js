// @types-check
module.exports = (req, res, next) => {
  const { email, password } = req.body;
  if (email && password) {
    next();
  } else {
    res.status(400).json({ message: 'Some required fields are missing' });
  }
};
