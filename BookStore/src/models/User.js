const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {

  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      birthday: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phoneCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,       
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },    
      dniPasaport: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      rol: {
        type: DataTypes.ENUM("user", "admin","new"),
        defaultValue: "new",
        allowNull: false,
      },
      dateChange: { 
          type: DataTypes.DATE,
          allowNull: true,
          //defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),//Sequelize.NOW,
      },
      token:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      thirdPartyCreated: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      photoUser: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      listWish: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],       
      },
    },
    { timestamps: true, 
      paranoid: true }
  );
};