const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: true,
      primaryKey: true,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_avatar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  /**
   * Custom method to compare passwords.
   * 
   * This method compares the provided password with the hashed password stored in the database.
   * 
   * @param {string} userPassword - The password to compare.
   * @returns {boolean} True if the passwords match, false otherwise.
   */
  User.prototype.validPassword = function (userPassword) {
    return bcrypt.compareSync(userPassword, this.user_password);
  };

  /**
   * Hook to hash the user's password before creating the user.
   * 
   * This hook hashes the user's password using bcrypt before storing it in the database.
   * 
   * @param {Object} user - The user object.
   */
  User.beforeCreate((user) => {
    user.user_password = bcrypt.hashSync(
      user.user_password,
      bcrypt.genSaltSync(10),
      null,
    );
  });

  return User;
};
