const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");
const {
  createCourse,
  getAllCourses,
  getCourseById,
} = require("../controllers/courseController");

// Teacher only
// basically routes take middleware as parametrs but we gave authorize with teacher as input
//so that will call higher order function with teacher as parameter
router.post("/", protect, authorize("teacher"), createCourse); 

// Anyone logged in
router.get("/", protect, getAllCourses);
router.get("/:id", protect, getCourseById);

module.exports = router;
