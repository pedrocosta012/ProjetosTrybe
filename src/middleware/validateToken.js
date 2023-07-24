const { User } = require('../models');
const decryptToken = require('../Utils/decryptToken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  if (authorization.length < 137) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  const user = decryptToken(authorization);
  User.findOne({
    where: user,
  }).then((validatedUser) => {
    if (!validatedUser) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.body.reqUserId = validatedUser.dataValues.id;
    next();
  });
};
