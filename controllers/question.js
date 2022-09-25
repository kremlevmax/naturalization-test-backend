const asyncWrapper = require("../middleware/async");
const Questions = require("../models/Question");

const getQuestions = asyncWrapper(async (req, res) => {
  const askedIds = req.body.askedIds;
  const queryObject = {};

  if (askedIds) queryObject._id = { $nin: askedIds };

  const questionsTotal = await Questions.find(queryObject);

  const questions = await Questions.findOne(queryObject);
  res.status(200).json({ questions, total: questionsTotal.length + 1 });
});

module.exports = getQuestions;
