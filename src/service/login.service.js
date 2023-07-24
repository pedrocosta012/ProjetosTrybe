const { User } = require('../models');
const createToken = require('../Utils/createToken');

const newLogin = async ({ email, password }) => {
  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { email, password },
  });
  if (!user) {
    return { error: { status: 400, message: 'Invalid fields' } };
  }
  return { token: createToken(user.dataValues) };
};

module.exports = { newLogin };
