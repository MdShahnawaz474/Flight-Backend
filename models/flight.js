"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    static associate(models) {
      this.belongsTo(models.Airplane, {
        foreignKey: "airplaneId",
        as: "airplanedetail",
      });
      this.belongsTo(models.Airport, {
        foreignKey: "departureAirportId",
        as: "departureAirport",
        targetKey: "code",
      });
      this.belongsTo(models.Airport, {
        foreignKey: "arrivalAirportId",
        as: "arrivalAirport",
        targetKey: "code",
      });
    }
  }

  Flight.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      flightNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      airplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      departureAirportId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivalAirportId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrivalTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      departureTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      boardingGate: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      totalSeat: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Flight",
      tableName: "Flights",
      underscored: false, // CHANGED: false instead of true
      timestamps: true,
      createdAt: "created_at", // ADDED: explicit mapping
      updatedAt: "updated_at", // ADDED: explicit mapping
    },
  );

  return Flight;
};
