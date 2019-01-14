const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema(
    {
        author: { type : String, default: '' },
        dateCreated : { type: Date, default: Date.now },
        content: { type: String, default: '' },
        // Comment in response to another user
    },
    { collection: 'blog' }
);

module.exports = BlogSchema;