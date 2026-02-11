const Document = require("../models/Document");

// Upload document to course (Teacher only)
exports.uploadDocument = async (req, res) => {
  try {
    const { title, type } = req.body;
    const { courseId } = req.params;

    if (!req.file) {
      return res.status(400).json({ message: "PDF file is required" });
    }

    const document = await Document.create({
      title,
      type,
      filename: req.file.filename,
      course: courseId,
      uploadedBy: req.user._id,
    });

    res.status(201).json(document);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all documents of a course
exports.getCourseDocuments = async (req, res) => {
  try {
    const { courseId } = req.params;

    const documents = await Document.find({ course: courseId });

    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
