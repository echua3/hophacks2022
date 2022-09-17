const splodeRouter = require("express").Router();
const Splode = require("../models/splode");

splodeRouter.get("/", async (request, response) => {
  const splodes = await Splode.find({});
  response.json(splodes);
});

splodeRouter.post("/", async (request, response) => {
  const body = request.body;

  //NEED TO ADD SOME TOKEN STUFF HERE IF TIME FOR AUTHENTICATION

  if (!body.votes) {
    body.votes = 0;
  }

  if (!body.thumbEmoji) {
    body.thumbEmoji = 0;
  }

  if (!body.happyEmoji) {
    body.happyEmoji = 0;
  }
});
