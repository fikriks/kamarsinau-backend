"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class QuestionStudent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QuestionStudent.init(
    {
      questionId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      answered: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "QuestionStudent",
    }
  );
  return QuestionStudent;
};
