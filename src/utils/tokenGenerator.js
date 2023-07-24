const ALPHA_NUMBER = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789';
const TOKEN_SIZE = 16;

const randomNumberGenerator = () => Math.floor(Math.random() * ALPHA_NUMBER.length);

const tokenGenerator = () => {
  let token = '';
  for (let i = 0; i < TOKEN_SIZE; i += 1) {
    token += ALPHA_NUMBER[randomNumberGenerator()];
  }
  return token;
};

module.exports = tokenGenerator;