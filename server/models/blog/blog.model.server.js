const mongoose = require('mongoose');
const BlogSchema = require('./blog.schema.server');
const BlogModel = mongoose.model('BlogModel', BlogSchema);

BlogModel.createComment = createComment;
BlogModel.updateComment = updateComment;
BlogModel.deleteComment = deleteComment;
BlogModel.getComments = getComments;

function createComment(comment) {
    return BlogModel.create(comment);
}

function updateComment(cid, comment) {
    return BlogModel.updateOne( { _id: cid}, comment);
}

function deleteComment(cid) {
    return BlogModel.remove({ _id : cid });
}

function getComments() {
    return BlogModel.find();
}

module.exports = BlogModel;