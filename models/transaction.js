/**
 * Transaction Model
 * 
 * This model defines the structure of the `Transaction` table in the database.
 * It includes the following fields:
 * - `transaction_id`: An auto-incrementing integer that serves as the primary key.
 * - `service_id`: An integer that represents the service ID, which is a foreign key.
 * - `user_id`: An integer that represents the user ID, which is a foreign key.
 * - `transaction_req`: A string that represents the request details of the transaction.
 * - `transaction_datetime`: A string that represents the date and time of the transaction.
 * 
 * @param {Object} sequelize - The Sequelize instance.
 * @param {Object} DataTypes - The data types provided by Sequelize.
 * @returns {Object} The defined Transaction model.
 */
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Transaction', {
    transaction_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: true,
    },
    service_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    transaction_req: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transaction_datetime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
