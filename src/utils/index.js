const handleTalkerFile = require('./handleTalkerFile');
const tokenGenerator = require('./tokenGenerator');
const tokensHandler = require('./tokensHandler');
const nextTalkerId = require('./nextTalkerId');

module.exports = { ...handleTalkerFile, tokenGenerator, ...tokensHandler, nextTalkerId };