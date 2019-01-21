module.exports = function(app) {
    const reminderModel = require('../models/user/reminders/reminder.model.server');

    app.get('/api/user/reminder', getReminders)

    async function getReminders(req, res) {

    }
}