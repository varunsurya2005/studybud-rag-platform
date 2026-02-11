const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const fileFilter = (req, file, cb) => {
  if (path.extname(file.originalname).toLowerCase() !== ".pdf") {
    return cb(new Error("Only PDF files are allowed"));
  }
  cb(null, true);
};

module.exports = multer({ storage, fileFilter });
