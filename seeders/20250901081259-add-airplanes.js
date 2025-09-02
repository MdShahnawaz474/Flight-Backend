"use strict";

const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Airplanes",
      [
  {
    modelNumber: "Airbus320",
    capacity: 200,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "Boeing 737",
    capacity: 250,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "Airbus A330",
    capacity: 300,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "Airbus A350",
    capacity: 350,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "Boeing 747",
    capacity: 416,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "Boeing 757",
    capacity: 295,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "Boeing 767",
    capacity: 375,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "Boeing 777",
    capacity: 396,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "Boeing 787 Dreamliner",
    capacity: 330,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "Embraer E190",
    capacity: 114,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "Embraer E195",
    capacity: 124,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "Bombardier CRJ900",
    capacity: 90,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "Bombardier CS300",
    capacity: 130,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "ATR 72",
    capacity: 78,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "McDonnell Douglas DC-10",
    capacity: 270,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "Concorde",
    capacity: 128,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    modelNumber: "Sukhoi Superjet 100",
    capacity: 108,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]
);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Airplanes", {
      [Op.or]: [
        { modelNumber: "Airbus320" },
        { modelNumber: "Boeing 747" },
      ],
    });
  },
};
