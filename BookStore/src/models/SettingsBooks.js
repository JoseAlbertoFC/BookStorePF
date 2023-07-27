const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "SettingsBooks",
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
        primaryKey: true,
      },
      nameType: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
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