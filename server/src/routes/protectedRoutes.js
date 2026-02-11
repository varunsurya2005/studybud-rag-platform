const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware");

// Any logged-in user
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

// Teacher-only route
router.get("/teacher", protect, authorize("teacher"), (req, res) => {
  res.json({ message: "Welcome Teacher" });
});

module.exports = router;
