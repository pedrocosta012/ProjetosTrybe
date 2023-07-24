// @ts-check
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        reference: {
          model: 'blog_posts',
          key: 'id'
        },
        onDelete: 'CASCATE',
        onUpdate: 'CASCATE',
      },
      category_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        reference: {
          model: 'categories',
          key: 'id'
        },
        onDelete: 'CASCATE',
        onUpdate: 'CASCATE',
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('posts-categories');
  }
};
