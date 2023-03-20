const Comment = require("../database/models/comment.model")

exports.createNewComment = (body) => {
    const newComment = new Comment(body);
    return newComment
}