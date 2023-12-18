const User = require("../models").User;

// Create a new user
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to create the user",
      error: err.message,
    });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        role: "siswa"
      }
    });
    res
      .status(200)
      .json({
        success: true,
        message: "Users retrieved successfully",
        data: users,
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve users",
      error: err.message,
    });
  }
};

// Get a specific user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a user by ID
const updateUserById = async (req, res) => {
  try {
    const updated = await User.update(req.body, {
      where: { id: req.params.id },
    });
    
    if (updated) {
      const updatedUser = await User.findByPk(req.params.id);
      res.status(200).json({
        success: true,
        message: "User updated successfully",
        data: updatedUser
      });
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to update the user",
      error: err.message,
    });
  }
};

// Delete a user by ID
const deleteUserById = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id },
    });
    if (!deleted) {
      throw new Error("User not found");
    }
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to delete the user",
      error: err.message,
    });
  }
};


const findInstructorByLevel = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { level: req.params.level, role: "pengajar" },
    });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to delete the user",
      error: err.message,
    });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  findInstructorByLevel,
};
