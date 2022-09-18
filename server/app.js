const express = require("express");
const config = require("./utils/config");
const userRouter = require("./controllers/users");
const splodeRouter = require("./controllers/splodes");
const loginRouter = require("./controllers/login");
const app = express();
const mongoose = require("mongoose");
const { application } = require("express");

const url = config.MONGODB_URI;
console.log("connecting to", url);

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.use(express.json());

//app.use("./api/login", loginRouter);
app.use("./api/users", userRouter);
app.use("/api/splodes", splodeRouter);
