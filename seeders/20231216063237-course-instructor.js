'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("CourseInstructors", [
      {
        courseId: "1",
        userId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseId: "2",
        userId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseId: "3",
        userId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseId: "4",
        userId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseId: "5",
        userId: "4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        courseId: "6",
        userId: "4",
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
