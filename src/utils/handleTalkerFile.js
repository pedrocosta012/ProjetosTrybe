const { readFile, writeFile } = require('fs').promises;
const { resolve } = require('path');

const filePath = resolve(__dirname, '../talker.json');

const readTalkerFile = async () => {
  const content = JSON.parse(await readFile(filePath));
  return content;
};

const writeTalkerFile = async (newContent) => {
  await writeFile(filePath, JSON.stringify(newContent));
};

module.exports = { readTalkerFile, writeTalkerFile };
