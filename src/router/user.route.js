const express = require('express');
const userController = require('../controller/user.controller');
const { postUserValidateData, validateToken } = require('../middleware');

const router = express.Router();

router.get('/', validateToken, userController.findUsers);

router.get('/:id', validateToken, userController.findUser);

router.post('/', postUserValidateData, userController.postUser);

module.exports = router;
