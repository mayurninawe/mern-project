const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ExerciseModel = new schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("exercise", ExerciseModel);
