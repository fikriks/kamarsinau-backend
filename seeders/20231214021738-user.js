'use strict';
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert("Users", [
     {
       name: "Admin",
       email: "admin@gmail.com",
       password: bcrypt.hashSync("1234567890"),
       role: "admin",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       name: "Pengajar",
       email: "pengajar@gmail.com",
       password: bcrypt.hashSync("1234567890"),
       role: "pengajar",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       name: "Siswa",
       email: "siswa@gmail.com",
       password: bcrypt.hashSync("1234567890"),
       role: "siswa",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
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
