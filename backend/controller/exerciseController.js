const noteModel = require("../model/exercise.model");

const createNote = async (req, res) => {
  const { username, description, duration } = req.body;

  const newNote = new noteModel({
    username: username,
    description: description,
    duration: Number(duration),
  });

  try {
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: "something get wrong." });
  }
};

const getAllNote = async (req, res) => {
  try {
    const notes = await noteModel.find({});
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "something went wrong.." });
  }
};

const getNote = async (req, res) => {
  let id = req.params.id;
  let notes = await noteModel.findById(id);
  try {
    res.status(200).json(notes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "getNote is not working from exerciseController.." });
  }
};

const deleteNote = async (req, res) => {
  let id = req.params.id;
  let notes = await noteModel.findByIdAndDelete(id);
  try {
    res.status(200).json(notes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "deleteNote is not working from exerciseController.." });
  }
};

const updateNote = async (req, res) => {
  // create id
  let id = req.params.id;
  const { username, description, duration } = req.body;
  let newNote = {
    username: username,
    description: description,
    duration: duration,
  };

  try {
    await noteModel.findByIdAndUpdate(id, newNote, { new: true });
    res.status(200).json(newNote);
  } catch (error) {
    res.status(500).json({ message: "something get wrong." });
  }
};
module.exports = { createNote, getAllNote, getNote, deleteNote, updateNote };
