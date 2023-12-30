"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("QuestionStudents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      questionId: {
        type: Sequelize.INTEGER,
        references: { model: "questions", key: "id" },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      answered: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("QuestionStudents");
  },
};
