"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cars_to_sellers", {
      carId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "car_id",
        references: {
          model: "cars",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: "seller_id",
        references: {
          model: "sellers",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cars_to_sellers");
  },
};
