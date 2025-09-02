'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('cities', [
      { name: "Mumbai", createdAt: new Date(), updatedAt: new Date() },
      { name: "Bangalore", createdAt: new Date(), updatedAt: new Date() },
      { name: "Chennai", createdAt: new Date(), updatedAt: new Date() },
      { name: "Kolkata", createdAt: new Date(), updatedAt: new Date() },
      { name: "Hyderabad", createdAt: new Date(), updatedAt: new Date() },
      { name: "Pune", createdAt: new Date(), updatedAt: new Date() },
      { name: "Ahmedabad", createdAt: new Date(), updatedAt: new Date() },
      { name: "Jaipur", createdAt: new Date(), updatedAt: new Date() },
      { name: "Lucknow", createdAt: new Date(), updatedAt: new Date() },
      { name: "Goa", createdAt: new Date(), updatedAt: new Date() },
      { name: "Chandigarh", createdAt: new Date(), updatedAt: new Date() },
      { name: "Bhopal", createdAt: new Date(), updatedAt: new Date() },
      { name: "Indore", createdAt: new Date(), updatedAt: new Date() },
      { name: "Patna", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
