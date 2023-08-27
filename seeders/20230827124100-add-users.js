"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Device",
      [
        {
          firstName: "Harshil",
          lastName: "Chauhan",
          email: "harshil@chauhan.com",
          password: "Harshil@123",
          mobile: "7202845787",
        },
        {
          firstName: "Johnny ",
          lastName: "Depp",
          email: "johnny@depp.com",
          password: "Harshil@123",
          mobile: "8855774466",
        },
        {
          firstName: "Robert Downey ",
          lastName: "Jr.",
          email: "tony@stark.com",
          password: "Harshil@123",
          mobile: "6699558877",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Device", null, {});
  },
};
s