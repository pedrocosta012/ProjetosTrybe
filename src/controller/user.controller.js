const userService = require('../service/user.service');

const postUser = async (req, res) => {
  const data = req.body;
  const { token, error } = await userService.postUserHandler(data);
  if (error) {
    return res.status(error.status || 400).json({ message: error.message });
  }
  res.status(201).json({ token });
};

const findUsers = async (req, res) => {
  const userData = req.body;
  const { authorization } = req.headers;
  const { users, error } = await userService.getUsers(authorization, userData);
  if (error) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(200).json(users);
};

const findUser = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const { users, error } = await userService.getUser(authorization, id);
  if (error) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(200).json(users);
};

module.exports = { postUser, findUsers, findUser };
