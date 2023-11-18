const express = require("express");
const router = express.Router();
const { getStudents, getStudentsById, addStudent,deleteStudentById } = require("./controller");
router
  .get("/", getStudents)
  .get("/:id", getStudentsById)
  .post("/", addStudent)
  .delete("/:id",deleteStudentById)

module.exports = router;
