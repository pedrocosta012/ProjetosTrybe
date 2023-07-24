const express = require('express');
const categoryController = require('../controller/category.controller');
const { validateToken, isThereAName } = require('../middleware');

const router = express.Router();

router.get('/', validateToken, categoryController.getAllCategories);

router.post('/', validateToken, isThereAName, categoryController.addNewCategory);

module.exports = router;
