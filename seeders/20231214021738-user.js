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
       name: "Pengajar 1",
       email: "pengajar1@gmail.com",
       password: bcrypt.hashSync("1234567890"),
       role: "pengajar",
       level: "SD",
       phoneNumber: "0888888888",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       name: "Pengajar 2",
       email: "pengajar2@gmail.com",
       password: bcrypt.hashSync("1234567890"),
       role: "pengajar",
       level: "SMP",
       phoneNumber: "0888888888",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       name: "Pengajar 3",
       email: "pengajar3@gmail.com",
       password: bcrypt.hashSync("1234567890"),
       role: "pengajar",
       level: "SMA",
       phoneNumber: "0888888888",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       name: "Siswa SD",
       email: "siswasd@gmail.com",
       password: bcrypt.hashSync("1234567890"),
       role: "siswa",
       level: "SD",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       name: "Siswa SMP",
       email: "siswasmp@gmail.com",
       password: bcrypt.hashSync("1234567890"),
       role: "siswa",
       level: "SMP",
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       name: "Siswa SMA",
       email: "siswasma@gmail.com",
       password: bcrypt.hashSync("1234567890"),
       role: "siswa",
       level: "SMA",
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
