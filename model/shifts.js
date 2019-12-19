const mongoose = require('mongoose');
const Users = require('./users')
const ObjectId = mongoose.Types.ObjectId

const SHIFTS = new mongoose.Schema({
    subjectID: String,
    roomID: String,
    time: String,
    studentID: String,
    term: String,
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const Shifts = mongoose.model('Shifts', SHIFTS);

module.exports = {
    getAll,
    getByID,
    create,
    update,
    deleteOne
}

function getAll() {
    return Shifts.find({
        isDeleted: false
    })
}

function getByID(id) {
    return Shifts.findOne({
        _id: ObjectId(id),
        isDeleted: false
    })
}

function create(data) {
    return Shifts.create(data)
}

function update(id, data) {
    return Shifts.update({
        _id: ObjectId(id)
    }, data)
}

function deleteOne(id) {
    return Shifts.update({
        _id: ObjectId(id)
    }, {
        isDeleted: true
    })
}