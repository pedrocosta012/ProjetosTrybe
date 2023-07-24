// @types-check
const Joi = require('joi');
const snakeize = require('snakeize');
const createToken = require('../Utils/createToken');
const decryptToken = require('../Utils/decryptToken');

const { User } = require('../models');

const userDataModel = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const postUserHandler = async (userData) => {
  const { error } = userDataModel.validate(userData);
  if (error) {
    return { error: { message: error.details[0].message } };
  }
  const user = await User.findOne({
    where: { email: userData.email },
  });
  if (user) {
    return { error: { status: 409, message: 'User already registered' } };
  }
  await User.create(snakeize(userData));
  const { image, password, ...toEncrypt } = userData;
  const token = createToken(toEncrypt);
  return { token };
};

const getUsers = async (token) => {
  const error = { status: 401, message: 'Expired or invalid token' };
  if (token.length < 137) {
    return { error };
  }
  const user = decryptToken(token);
  const validatedUser = await User.findOne({
    where: user,
  });
  if (!validatedUser) {
    return { error };
  }
  const users = await User.findAll({
    attributes: ['id', ['display_name', 'displayName'], 'email', 'image'],
  });
  return { users };
};

const getUser = async (token, id) => {
  if (token.length < 137) {
    return { error: { status: 401, message: 'Expired or invalid token' } };
  }
  const user = decryptToken(token);
  const validatedUser = await User.findOne({
    where: user,
  });
  if (!validatedUser) {
    return { error: { status: 401, message: 'Expired or invalid token' } };
  }
  const users = await User.findOne({
    where: { id },
    attributes: ['id', ['display_name', 'displayName'], 'email', 'image'],
  });
  if (!users) {
    return { error: { status: 404, message: 'User does not exist' } };
  }
  return { users };
};

module.exports = { postUserHandler, getUsers, getUser };
