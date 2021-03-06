const mongoose = require('mongoose');

const STUDENTSUBJ = new mongoose.Schema({
    student_id: String,
    subject_id: String,
    term: String,
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const StudentSubj = mongoose.model('StudentSubj', STUDENTSUBJ);

module.exports = {
    getAll,
    getByID,
    create,
    update,
    deleteOne
}

function getAll() {
    return StudentSubj.find({
        isDeleted: false
    })
}

function getByID(id) {
    return StudentSubj.findOne({
        _id: ObjectId(id),
        isDeleted: false
    })
}

function create(data) {
    return StudentSubj.create(data)
}

function update(id, data) {
    return StudentSubj.update({
        _id: ObjectId(id)
    }, data)
}

function deleteOne(id) {
    return StudentSubj.update({
        _id: ObjectId(id)
    }, {
        isDeleted: true
    })
}