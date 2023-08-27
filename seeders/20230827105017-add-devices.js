"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "devices",
      [
        {
          id: 1,
          brandName: "Samsung",
          itemName: "Galaxy A21s",
          user_id: 1,
        },
        {
          id: 2,
          brandName: "Realme",
          itemName: "Realme 6",
          user_id: 2,
        },
        {
          id: 3,
          brandName: "Apple",
          itemName: "Iphone SE",
          user_id: 2,
        },
        {
          id: 4,
          brandName: "Suzuki",
          itemName: "Hayabusa",
          user_id: 1,
        },
        {
          id: 5,
          brandName: "Honda",
          itemName: "CBR 250RR",
          user_id: 2,
        },
        {
          id: 6,
          brandName: "Kawasaki",
          itemName: "Ninja H2R",
          user_id: 3,
        },
        {
          id: 7,
          brandName: "Lamborghini",
          itemName: "Urus",
          user_id: 1,
        },
        {
          id: 8,
          brandName: "Toyota",
          itemName: "Supra",
          user_id: 2,
        },
        {
          id: 9,
          brandName: "Porche",
          itemName: "Cayenne",
          user_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("devices", null, {});
  },
};
