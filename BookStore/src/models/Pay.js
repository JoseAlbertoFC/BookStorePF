const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {

  sequelize.define(
    "Pay",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      ip:{
        type: DataTypes.STRING,
        allowNull: false,

      },
      idpay:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      orderNumber:{
        type: DataTypes.STRING,
        allowNull: false,

      },
      orderType:{
        type: DataTypes.STRING,
        allowNull: false,

      },
      operationType:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      metodo:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      currentOperation:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      data_aprove:{
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      total_paid_amount:{
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      net_received_amount:{
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2), // Definir tipo de dato DECIMAL con 10 dígitos y 2 decimales
        allowNull: false,
        validate: {
          isDecimal: true,
          min: 0, // Mínimo valor permitido
          max: 100000, // Máximo valor permitido
        },
      },
      paymentDate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      paymentStatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    { timestamps: true, 
      paranoid: true }
  );
};
