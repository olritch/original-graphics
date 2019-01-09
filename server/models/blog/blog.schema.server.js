var mongoose = require('mongoose');

var BlogSchema = mongoose.Schema(
    {

    },
    { collection: 'blog' }
);

module.exports = BlogSchema;
