const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");
const { protect, authorize } = require("../middleware/authMiddleware");
const {
  uploadDocument,
  getCourseDocuments,
} = require("../controllers/documentController");

// Teacher uploads to specific course
router.post(
  "/:courseId/upload",
  protect,
  authorize("teacher"),
  upload.single("pdf"),
  uploadDocument
);

// Students view course documents
router.get("/:courseId", protect, getCourseDocuments);

module.exports = router;
