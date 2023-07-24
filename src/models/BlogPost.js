module.exports = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      reference: {
        model: 'users',
        key: 'id'
      },
      onUpdate: 'CASCATE',
      onDelete: 'CASCATE'
    },
    published: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  }, {
    tableName: 'blog_posts',
    timestamps: false,
    underscore: true
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, {
      as: 'creator',
      foreignKey: 'id'
    })
  };

  return blogPost;
};
