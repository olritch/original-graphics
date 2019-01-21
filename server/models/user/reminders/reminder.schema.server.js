const mongoose = require('mongoose');

const ReminderSchema = mongoose.Schema(
    {

    },
    { collection: 'reminder' }
)

module.exports = ReminderSchema;