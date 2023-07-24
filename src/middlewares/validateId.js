const { readTalkerFile } = require('../utils');

const checkIsNum = async (req, res, next) => {
  const { id } = req.params;
  const listIds = (await readTalkerFile()).map((t) => t.id);
  if (Number.isNaN(Number(id)) || !listIds.includes(Number(id))) {
    res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
  } else {
    next();
  }
};

module.exports = checkIsNum;