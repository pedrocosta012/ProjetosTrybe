// @types-check
const express = require('express');
const loginController = require('../controller/login.controller');
const { postLoginValidation } = require('../middleware');

const router = express.Router();

router.post('/', postLoginValidation, loginController.makeLogin);

module.exports = router;
