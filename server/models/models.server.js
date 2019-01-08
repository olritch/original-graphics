var connectionString = "mongodb://127.0.0.1:27017/original-graphics"; // for local

var mongoose = require('mongoose');

var db = mongoose.connect(
    connectionString,
    { useNewUrlParser: true }
);

module.exports = db;
