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

  const splode = new Splode({
    headline: body.headline,
    url: body.url,
    content: body.content,
    votes: body.votes,
    thumbEmoji: body.thumbEmoji,
    happyEmoji: body.happyEmoji,
  });

  const savedSplode = await blog.save();
  console.log(`added ${splode.headline} to the dash`);

  response.json(savedSplode.toJSON());
});

splodeRouter.put("/:id", async (request, response) => {
  const body = request.body;

  if (!body.likes) {
    body.likes = 0;
  }

  const splodeToUpdate = await Splode.findById(request.params.id);

  const splode = {
    headline: body.headline,
    url: body.url,
    content: body.content,
    votes: body.votes,
    thumbEmoji: body.thumbEmoji,
    happyEmoji: body.happyEmoji,
    thumbnailImage: body.thumbnailImage,
  };

  const updatedSplode = await Blog.findByIdAndUpdate(request.params.id, blog, {
    new: true,
  });
  console.log(`splode ${blog.title} succesfully updated`);
  response.json(updatedSplode.toJSON());
});

module.export = splodeRouter;
