const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "SettingsBook",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true, // Definir auto-incremento
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
   
      },
      nameType: {
        type: DataTypes.STRING,
        allowNull: false,

      },
      descType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    { timestamps: true, paranoid: true }
  );
};