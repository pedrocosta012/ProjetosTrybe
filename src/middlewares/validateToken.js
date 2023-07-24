const { getTokens } = require('../utils');

const MIN_TOKEN_LENGTH = 16;

const tokenValidation = (req, res, next) => {
  const { authorization } = req.headers;
  getTokens().then((tokens) => {
    if (!authorization) {
      res.status(401).send({ message: 'Token não encontrado' });
    } else if (authorization.length !== MIN_TOKEN_LENGTH) {
      res.status(401).send({ message: 'Token inválido' });
    } else if (!tokens.includes(authorization)) {
      res.status(401).send({ message: 'Token inválido' });
    } else {
      next();
    }
  });
};

module.exports = tokenValidation;