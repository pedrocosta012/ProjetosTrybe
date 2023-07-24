const express = require('express');
const { emailValidation, passwordValidation } = require('../middlewares');
const { tokenGenerator, newToken } = require('../utils');

const router = express.Router();

router.post('/login', emailValidation, passwordValidation, (req, res) => {
  const token = tokenGenerator();
  newToken(token).then(() => res.status(200).send({ token }));
});

module.exports = router;