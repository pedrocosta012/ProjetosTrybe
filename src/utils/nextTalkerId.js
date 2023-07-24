const { readTalkerFile } = require('./handleTalkerFile');

const nextTalkerId = async () => {
  const content = await readTalkerFile();
  let newId = 0;
  content.forEach((curr) => {
    if (curr.id > newId) {
      newId = curr.id;
    }
  });
  return newId + 1;
};

module.exports = nextTalkerId;