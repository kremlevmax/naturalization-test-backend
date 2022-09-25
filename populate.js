require("dotenv").config();

const connectDB = require("./db/connect");
const Question = require("./models/Question");
const data = require("./questions.json");

const populate = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Question.deleteMany({});
    await Question.create(data);
    console.log("Done!");
    process.exit(0);
  } catch (error) {
    console.log(error);
  }
};

populate();
