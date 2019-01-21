const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    email: { type: String, default: '' },
    admin: { type: Boolean, default: false },
    bio: { type: String, default: '' },
    telephone: { type: String, default: '' },
    dateCreated: { type: Date, default: Date.now },
    interests: [{ type: String }],
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ClassModel' }],
    reminders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ReminderModel' }]
  },
  { collection: 'user' }
)

module.exports = UserSchema
