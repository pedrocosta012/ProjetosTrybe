// @types-check
module.exports = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
    underscore: true
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost, {
      as: 'posts',
      foreignKey: 'id'
    });
  };

  return UserTable;;
};
