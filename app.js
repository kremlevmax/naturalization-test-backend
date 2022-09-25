const express = require("express");
const morgan = require("morgan");
const connectDB = require("./db/connect");
const questions = require("./routes/questions");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api/v1/questions", questions);

const start = async () => {
  await connectDB(process.env.MONGO_URI);
  app.listen(PORT, () => {
    console.log(`Server is listening on a port ${PORT}...`);
  });
};

start();
