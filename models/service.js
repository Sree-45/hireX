/**
 * Service Model
 * 
 * This model defines the structure of the `Service` table in the database.
 * It includes the following fields:
 * - `service_id`: An auto-incrementing integer that serves as the primary key.
 * - `ID_category`: An integer that represents the category ID, which is a foreign key.
 * - `user_id`: An integer that represents the user ID, which is a foreign key.
 * - `service_title`: A string that represents the title of the service.
 * - `service_desc`: A string that represents the description of the service.
 * - `service_price`: A string that represents the price of the service.
 * - `image_path`: A string that represents the path to the image of the service.
 * 
 * @param {Object} sequelize - The Sequelize instance.
 * @param {Object} DataTypes - The data types provided by Sequelize.
 * @returns {Object} The defined Service model.
 */
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Service', {
    service_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    ID_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    service_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    service_desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    service_price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
