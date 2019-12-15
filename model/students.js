const mongoose = require('mongoose');

const STUDENTS = new mongoose.Schema({
    name: String,
    student_id: Number,
    dateOfBirth: String,
    sex: String,
    phone: Number,
    email: String,
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const Students = mongoose.model('Students', STUDENTS);

module.exports = {
    getAll,
    getByID,
    create,
    update,
    deleteOne
}

function getAll() {
    return Students.find({
        isDeleted: false
    })
}

function getByID(id) {
    return Students.findOne({
        _id: ObjectId(id),
        isDeleted: false
    })
}

function create(data) {
    return Students.create(data)
}

function update(id, data) {
    return Students.update({
        _id: ObjectId(id)
    }, data)
}

function deleteOne(id) {
    return Students.update({
        _id: ObjectId(id)
    }, {
        isDeleted: true
    })
}