const express = require('express');

const login = require('./login.router');
const talker = require('./talker.router');

const router = express.Router();

router.use(talker);
router.use(login);

module.exports = router;
