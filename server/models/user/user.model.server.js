const mongoose = require('mongoose');
const UserSchema = require('./user.schema.server');
const UserModel = mongoose.model('UserModel', UserSchema);

