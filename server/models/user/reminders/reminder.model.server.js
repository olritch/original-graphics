const mongoose = require('mongoose');
const ReminderSchema = require('./reminder.schema.server');
const ReminderModel = mongoose.model('ReminderModel', ReminderSchema);

ReminderModel.createReminder = createReminder;

function createReminder() {

}