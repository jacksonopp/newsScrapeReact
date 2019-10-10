const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    body: {
        type: String
    },
    author: {
        type: String
    }
})

const Comment = module.exports = mongoose.model("Comment", CommentSchema);