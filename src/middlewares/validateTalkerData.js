const validateThereIsAllData = (req, res, next) => {
  const { name, age, talk } = req.body;
  if (!name) {
    res.status(400).send({ message: 'O campo "name" é obrigatório' });
  } else if (!age) {
    res.status(400).send({ message: 'O campo "age" é obrigatório' });
  } else if (!talk) {
    res.status(400).send({ message: 'O campo "talk" é obrigatório' });
  } else {
    next();
  }
};

const validateName = (req, res, next) => {
  const MIN_NAME_LENGTH = 3;
  const { name } = req.body;
  if (name.length < MIN_NAME_LENGTH) {
    res.status(400).send({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  } else {
    next();
  }
};

const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (age < 18) {
    res.status(400).send({ message: 'A pessoa palestrante deve ser maior de idade' });
  } else {
    next();
  }
};

const validateTalkerInfo = (req, res, next) => {
  const { talk } = req.body;
  const watchedAtRegex = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g;
  const rateRegex = /[^1-5]/g;

  if (!talk.watchedAt) {
    res.status(400).send({ message: 'O campo "watchedAt" é obrigatório' });
  } else if (!watchedAtRegex.test(talk.watchedAt)) {
    res.status(400).send({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  } else if (talk.rate === undefined) {
    res.status(400).send({ message: 'O campo "rate" é obrigatório' });
  } else if (rateRegex.test(talk.rate)) {
    res.status(400).send({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  } else {
    next();
  }
};

module.exports = { validateName, validateAge, validateTalkerInfo, validateThereIsAllData };