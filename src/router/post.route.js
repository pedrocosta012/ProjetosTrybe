const express = require('express');

const { validateToken, requiredForNewPost } = require('../middleware');
const postController = require('../controller/post.controller');

const router = express.Router();

router.post('/', validateToken, requiredForNewPost, postController.newPost);

module.exports = router;
