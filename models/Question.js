const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  topic: String,
  subtopic: String,
  question: String,
  answer: [String],
});

module.exports = mongoose.model("Question", questionSchema);
