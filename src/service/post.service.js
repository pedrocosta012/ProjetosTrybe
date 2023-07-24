const snakeize = require('snakeize');
const { BlogPost, Category, PostCategory } = require('../models');

const addNewPost = async (data) => {
  const { title, content, categoryIds, reqUserId } = data;
  const categoriesAvailable = (await Category.findAll({ attributes: ['id'] }))
    .map((id) => Object.values(id.dataValues)[0]);
  if (!categoryIds.every((c) => categoriesAvailable.includes(c))) {
    return { error: { status: 400, message: 'one or more "categoryIds" not found' } };
  }
  const result = await BlogPost.create(snakeize({ title, content, userId: reqUserId }));
  await Promise.all(categoryIds.map(async (c) => {
    await PostCategory.create(snakeize({ postId: result.dataValues.id, categoryId: c }));
  }));
  result.dataValues.userId = result.dataValues.user_id;
  delete result.dataValues.user_id;
  return { result: result.dataValues };
};

module.exports = { addNewPost };
