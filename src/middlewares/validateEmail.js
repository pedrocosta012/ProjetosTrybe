const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const emailRegexValidator = /\S+@\S+\.\S+/gm;
  if (!email) {
    res.status(400).send({ message: 'O campo "email" é obrigatório' });
  } else if (!emailRegexValidator.test(email)) {
    res.status(400).send({ message: 'O "email" deve ter o formato "email@email.com"' });
  } else {
    next();
  }
};

module.exports = emailValidation;