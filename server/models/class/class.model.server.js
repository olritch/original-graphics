const mongoose = require('mongoose');
const ClassSchema = require('./class.schema.server');
const ClassModel = mongoose.model('ClassModel', ClassSchema);

ClassModel.createClass = createClass;
ClassModel.updateClass = updateClass;
ClassModel.deleteClass = deleteClass;
ClassModel.getClassByDate = getClassByDate

function getClassByDate(date) {
    return ClassModel.find({ date: date });
}

function createClass(course) {
    return ClassModel.create(course);
}

function updateClass(cid, course) {
    return ClassModel.updateOne({ _id: cid }, course);
}

function deleteClass(cid) {
    return ClassModel.deleteOne({ _id : cid });
}

module.exports = ClassModel;
