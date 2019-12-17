const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId

const STUDENTS = new mongoose.Schema({
    studentID: String,
    name: String,
    dateOfBirth: String,
    sex: String,
    major: String,
    classMajor: String,
    address: String,
    phone: String,
    email: String,
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdTime:{
        type: Number,
        default: Date.now()
    },
    updatedTime:{
        type: Number,
        default: Date.now()
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