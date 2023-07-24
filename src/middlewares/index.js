const checkIsNumber = require('./validateId');
const emailValidation = require('./validateEmail');
const passwordValidation = require('./validatePassword');
const talkerInfoValidation = require('./validateTalkerData');
const tokenValidation = require('./validateToken');

module.exports = {
  checkIsNumber,
  emailValidation,
  passwordValidation,
  ...talkerInfoValidation,
  tokenValidation,
};