'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     return queryInterface.bulkInsert("CourseStudents", [
       {
         courseId: "1",
         userId: "5",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         courseId: "2",
         userId: "5",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         courseId: "3",
         userId: "6",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         courseId: "4",
         userId: "6",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         courseId: "5",
         userId: "7",
         createdAt: new Date(),
         updatedAt: new Date(),
       },
       {
         courseId: "6",
         userId: "7",
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
