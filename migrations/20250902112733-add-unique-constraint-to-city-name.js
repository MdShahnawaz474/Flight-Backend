'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('cities', {
      fields: ['name'],
      type: 'unique',
      name: 'unique_city_name'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('cities', 'unique_city_name');
  }
};
