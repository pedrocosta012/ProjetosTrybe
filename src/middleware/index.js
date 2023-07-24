const postLoginValidation = require('./postLoginValidation');
const postUserValidateData = require('./postUserValidateData');
const validateToken = require('./validateToken');
const isThereAName = require('./isThereAName');
const requiredForNewPost = require('./requiredForNewPost');

module.exports = {
  postLoginValidation, postUserValidateData, validateToken, isThereAName, requiredForNewPost,
};
