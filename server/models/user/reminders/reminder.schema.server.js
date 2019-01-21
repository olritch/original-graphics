const mongoose = require('mongoose');

const ReminderSchema = mongoose.Schema(
    {
        description: { type: String }
    },
    { collection: 'reminder' }
)

module.exports = ReminderSchema;
