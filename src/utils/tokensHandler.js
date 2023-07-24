const tokens = [];

const newToken = async (token) => tokens.push(token);

const removeToken = async (token) => tokens.filter((t) => t !== token);

const getTokens = async () => tokens;

module.exports = { newToken, removeToken, getTokens };