const express = require("express");
const {
  getAllNote,
  createNote,
  getNote,
  deleteNote,
  updateNote,
} = require("../controller/exerciseController");

const noteRoute = express.Router();

noteRoute.get("/", getAllNote);

noteRoute.post("/add", createNote);

noteRoute.get("/:id", getNote);

noteRoute.delete("/:id", deleteNote);

noteRoute.put("/:id", updateNote);

module.exports = noteRoute;
