const postService = require('../service/post.service');

const newPost = async (req, res) => {
  const postData = req.body;
  const { result, error } = await postService.addNewPost(postData);
  if (error) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(201).json(result);
};

module.exports = { newPost };
