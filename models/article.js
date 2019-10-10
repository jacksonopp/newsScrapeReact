const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  sub: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  },
  upvotes: {
    type: Number
  },
  user: {
    type: String,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
})

const Article = module.exports = mongoose.model("Article", articleSchema);