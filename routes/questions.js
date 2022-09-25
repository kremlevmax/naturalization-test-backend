const express = require("express");
const getQuestions = require("../controllers/question");
const router = express.Router();

router.route("/").get(getQuestions);

module.exports = router;
