"use strict";

/** @type {import('sequelize-cli').Migration} */

const cars = [
  {
    model: "Test",
    manufacturer: "Test Manuf",
    model_year: 2020,
    price: 45.0,
    is_used: false,
    serial_number: "XT32321KJDS",
    created_at: new Date(),
    updated_at: new Date(),
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("cars", cars);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "cars",
      {
        serial_number: cars[0].serial_number,
      },
      {}
    );
  },
};
