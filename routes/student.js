const express = require("express");
const  router = express.Router();

const {
  createStudent,
  getStudents,
  getStudentById,
  deleteStudent,
  StudentPhotoUpload,
  } = require("../controllers/student");

  const { protect } = require("../middleware/auth");

  router
  .route("/")
  .get(getStudents)
  .post(protect, createStudent);

  router
  .route("/:id/photo")
  .put(protect, StudentPhotoUpload);

  router
  .route("/:id")
  .get(getStudentById)
  .delete(protect, deleteStudent);


  module.exports = router