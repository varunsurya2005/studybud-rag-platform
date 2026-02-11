const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const courseRoutes = require("./routes/courseRoutes");
const documentRoutes = require("./routes/documentRoutes");
app.use("/api/documents", documentRoutes);


const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);

app.use("/api/protected", protectedRoutes);

app.use("/api/courses", courseRoutes);

app.use("/api/documents", documentRoutes);


app.get("/", (req, res) => {
  res.send("StudyBud Backend Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
