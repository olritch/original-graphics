const mongoose = require('mongoose');
const ReminderSchema = require('./reminder.schema.server');
const ReminderModel = mongoose.model('ReminderModel', ReminderSchema);

ReminderModel.createReminder = createReminder;
ReminderModel.deleteReminder = deleteReminder;
ReminderModel.updateReminder = updateReminder;
ReminderModel.getReminders = getReminders;

function createReminder(reminder) {
    return ReminderModel.create(reminder);
}

function deleteReminder(rid) {
    return ReminderModel.remove({ _id : rid });
}

function updateReminder(rid, reminder) {
    return ReminderModel.updateOne({ _id : rid }, reminder);
}

function getReminders() {
    return ReminderModel.find({});
}

module.exports = ReminderModel;
