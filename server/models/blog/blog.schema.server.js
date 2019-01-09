const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema(
    {

    },
    { collection: 'blog' }
);

module.exports = BlogSchema;
