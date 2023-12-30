"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Question.init(
    {
      courseId: DataTypes.INTEGER,
      question: DataTypes.TEXT("long"),
      optionA: DataTypes.TEXT("long"),
      optionB: DataTypes.TEXT("long"),
      answer: DataTypes.STRING,
      level: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
