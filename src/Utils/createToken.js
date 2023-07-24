require('dotenv/config');
const jwt = require('jsonwebtoken');

module.exports = (data) => jwt.sign({ data }, process.env.JWT_SECRET, {
  expiresIn: '7d',
  algorithm: 'HS256',
});
