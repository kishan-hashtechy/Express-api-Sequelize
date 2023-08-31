"use strict";
const bcrypt = require("bcrypt")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "Harshil",
          lastName: "Chauhan",
          email: "harshil@chauhan.com",
          password: await bcrypt.hash("Harshil@123", 10),
          mobile: "7202845787",
        },
        {
          firstName: "Johnny ",
          lastName: "Depp",
          email: "johnny@depp.com",
          password: await bcrypt.hash("Harshil@123", 10),
          mobile: "8855774466",
        },
        {
          firstName: "Robert Downey ",
          lastName: "Jr.",
          email: "tony@stark.com",
          password: await bcrypt.hash("Harshil@123", 10),
          mobile: "6699558877",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};