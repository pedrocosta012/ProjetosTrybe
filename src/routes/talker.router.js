const express = require('express');
const { readTalkerFile, writeTalkerFile, nextTalkerId } = require('../utils');
const {
  checkIsNumber,
  validateThereIsAllData,
  validateName,
  validateAge,
  validateTalkerInfo,
  tokenValidation,
} = require('../middlewares');

const router = express.Router();

router.get('/talker/search?', tokenValidation, async (req, res) => {
  const { q } = req.query;
  const data = await readTalkerFile();
  const filtered = data.filter((t) => t.name.toLowerCase().includes(q.toLowerCase()));
  res.status(200).send(filtered);
});

router.get('/talker', async (_req, res) => {
  res.status(200).send(await readTalkerFile());
});

router.get('/talker/:id', checkIsNumber, async (req, res) => {
  const { id } = req.params;
  const content = await readTalkerFile();
  const result = content.filter((t) => t.id === Number(id))[0];
  if (result.length) {
    res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
    return;
  }
  return res.status(200).send(result);
});

router.post(
  '/talker',
  tokenValidation,
  validateThereIsAllData,
  validateName,
  validateAge,
  validateTalkerInfo,
  async (req, res) => {
    const oldContent = await readTalkerFile();
    const nextId = await nextTalkerId();
    const { name, age, talk } = req.body;
    const newTalker = { id: nextId, name, age, talk };
    await writeTalkerFile(oldContent.concat([newTalker]));
  res.status(201).send(newTalker);
},
);

router.put(
  '/talker/:id',
  tokenValidation,
  checkIsNumber,
  validateThereIsAllData,
  validateName,
  validateAge,
  validateTalkerInfo,
  async (req, res) => {
    const oldContent = await readTalkerFile();
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const updatedTalker = { id: Number(id), name, age, talk };
    const newContent = oldContent.filter((t) => t.id !== Number(id)).concat([updatedTalker]);
    await writeTalkerFile(newContent);
  res.status(200).send(updatedTalker);
},
);

router.delete('/talker/:id', tokenValidation, checkIsNumber, async (req, res) => {
  const oldContent = await readTalkerFile();
  const { id } = req.params;
  const newContent = oldContent.filter((t) => t.id !== Number(id));
  await writeTalkerFile(newContent);
  res.status(204).send({ message: 'Deletado com sucesso!' });
});

module.exports = router;
