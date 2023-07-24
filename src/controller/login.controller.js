// @types-check
const loginServices = require('../service/login.service');

const makeLogin = async (req, res) => {
  const { body } = req;
  const { token, error } = await loginServices.newLogin(body);
  if (error) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(200).json({ token });
};

module.exports = { makeLogin };
