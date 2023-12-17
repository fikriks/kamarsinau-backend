const { Module, Course, Progress, CourseStudent } = require("../models");
const { Op } = require("sequelize");

const createModule = async (req, res) => {
  try {
    const newModule = await Module.create(req.body);
    res.status(201).json({
      success: true,
      message: "Module created successfully",
      data: newModule,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to create the module",
      error: err.message,
    });
  }
};

const getAllModules = async (req, res) => {
  try {
    const modules = await Module.findAll();
    res
      .status(200)
      .json({
        success: true,
        message: "Modules retrieved successfully",
        data: modules,
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve modules",
      error: err.message,
    });
  }
};

const getModuleById = async (req, res) => {
  try {
    const module = await Module.findByPk(req.params.id);
    if (!module) {
      return res
        .status(404)
        .json({ success: false, message: "Module not found" });
    }
    res.status(200).json({
      success: true,
      message: "Module retrieved successfully",
      data: module,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getModuleByCourseId = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);

    Module.hasMany(Progress);

    const module = await Module.findAll({
      where: { courseId: req.params.id },
      include: [
        {
          model: Progress
        }
      ]
    });
    if (!module) {
      return res
        .status(404)
        .json({ success: false, message: "Module not found" });
    }
    res.status(200).json({
      success: true,
      message: "Module retrieved successfully",
      course: course,
      data: module,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getModuleByCourseIdAndStudentId = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);

    Module.hasMany(Progress);
    Module.belongsTo(Course);

    Course.hasMany(CourseStudent);

    const module = await Module.findAll({
      where: { courseId: req.params.id },
      include: [
        {
          model: Progress,
        },
        {
          model: Course,
          include: [
            {
              model: CourseStudent,
              where: {
                userId: req.params.studentId
              }
            },
          ],
        },
      ],
    });
    if (!module) {
      return res
        .status(404)
        .json({ success: false, message: "Module not found" });
    }
    res.status(200).json({
      success: true,
      message: "Module retrieved successfully",
      course: course,
      data: module,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateModuleById = async (req, res) => {
  try {
    const [updated] = await Module.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedModule = await Module.findByPk(req.params.id);
      res.status(200).json({
        success: true,
        message: "Module updated successfully",
        data: updatedModule,
      });
    } else {
      throw new Error("Module not found");
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to update the module",
      error: err.message,
    });
  }
};

const deleteModuleById = async (req, res) => {
  try {
    const deleted = await Module.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      throw new Error("Module not found");
    }
    res
      .status(200)
      .json({ success: true, message: "Module deleted successfully" });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to delete the module",
      error: err.message,
    });
  }
};

module.exports = {
  createModule,
  getAllModules,
  getModuleById,
  updateModuleById,
  deleteModuleById,
  getModuleByCourseId,
  getModuleByCourseIdAndStudentId,
};
