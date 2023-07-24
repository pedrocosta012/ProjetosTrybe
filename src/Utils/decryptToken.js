// @types-check
const jwt = require('jsonwebtoken');
require('dotenv/config');

module.exports = (token) => {
  try {
    const decrypt = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decrypt);
    return decrypt.data;
  } catch (error) {
    return error;
  }
};
