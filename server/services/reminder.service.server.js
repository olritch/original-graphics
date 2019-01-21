module.exports = function(app) {
    const reminderModel = require('../models/user/reminders/reminder.model.server');

    app.post('/api/user/reminder', createReminder);
    app.delete('/api/user/reminder', deleteReminder);

    async function createReminder(req, res) {
        const reminder = req.body;
        const data = await reminderModel.createReminder(reminder);
        res.json(data);
    }

    async function deleteReminder(req, res) {
        const rid = req.body;
        const data = await reminderModel.deleteReminder(rid);
        res.json(data);
    }
}