/**
 * Category Model
 * 
 * This model defines the structure of the `Category` table in the database.
 * It includes the following fields:
 * - `ID_category`: An auto-incrementing integer that serves as the primary key.
 * - `category`: A string that represents the name of the category.
 * 
 * @param {Object} sequelize - The Sequelize instance.
 * @param {Object} DataTypes - The data types provided by Sequelize.
 * @returns {Object} The defined Category model.
 */
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Category', {
    ID_category: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
