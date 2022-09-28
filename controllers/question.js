const asyncWrapper = require("../middleware/async");
const Questions = require("../models/Question");

const getQuestions = asyncWrapper(async (req, res) => {
  const askedIds = req.query.askedIds;
  const queryObject = {};

  if (askedIds) queryObject._id = { $nin: askedIds };

  const questionsTotal = await Questions.find({});
  const questionsLeft = await Questions.find(queryObject);

  const question = await Questions.findOne(queryObject);
  res
    .set("Access-Control-Allow-Origin", "http://localhost:3000")
    .status(200)
    .json({
      question,
      total: questionsTotal.length,
      left: questionsLeft.length,
    });
});

module.exports = getQuestions;
