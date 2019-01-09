const mongoose = require('mongoose');
const ClassSchema = require('./class.schema.server');
const ClassModel = mongoose.model('ClassModel', ClassSchema);

ClassModel.createClass = createClass;
ClassModel.updateClass = updateClass;
ClassModel.deleteClass = deleteClass;

function createClass(course) {
    return ClassModel.create(course);
}

function updateClass(cid, course) {
    return ClassModel.updateOne({ _id: cid }, course);
}

function deleteClass(cid) {
    return ClassModel.remove({ _id: cid });
}

module.exports = ClassModel;
