module.exports = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true
  });

  postCategory.associate = ({BlogPost, Category}) => {
    Category.belongsToMany(BlogPost, {
      as: 'category_id',
      through: postCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id'
    });
    BlogPost.belongsToMany(Category, {
      as: 'post_id',
      through: postCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id'
    });
  };

  return postCategory;
};
