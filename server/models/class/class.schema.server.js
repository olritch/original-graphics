const mongoose = require('mongoose');

const ClassSchema = mongoose.Schema(
    {
        title: { type: String, default: '' },
        description: { type: String, default: '' },
        proficiency: { type: String, default: ''},
        date : { type: String }
    },
    { collection: 'class' }
);

module.exports = ClassSchema;
