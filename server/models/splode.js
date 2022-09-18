const mongoose = require("mongoose");

const splodeSchema = mongoose.Schema({
  headline: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    minlength: 100
  },
  votes: {
    Type: Number,
  },
//   user: {
//     Type: mongoose.Schema.Types.ObjectID,
//     ref: "User",
//   },
  thumbEmoji: {
    Type: Number,
  },
  happyEmoji: {
    Type: Number,
  },
  thumbnailImage: {
    Type: String,
  },
});

module.exports = mongoose.model("Splode", splodeSchema);
