const express = require("express");
const router = express.Router();
const moduleController = require("../controllers/moduleController");

// Create a new module
router.post("/", moduleController.createModule);
// Get all modules
router.get("/", moduleController.getAllModules);
// Get a specific module by ID
router.get("/:id", moduleController.getModuleById);
router.get("/course/:id", moduleController.getModuleByCourseId);
// Update a module by ID
router.put("/:id", moduleController.updateModuleById);
// Delete a module by ID
router.delete("/:id", moduleController.deleteModuleById);

router.get(
  "/course/:id/student/:studentId",
  moduleController.getModuleByCourseIdAndStudentId
);

module.exports = router;
