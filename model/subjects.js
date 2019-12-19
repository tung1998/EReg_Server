const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId

const SUBJECTS= new mongoose.Schema({
    subjectID: String,
    name: String,
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const Subjects = mongoose.model('Subjects', SUBJECTS);

module.exports = {
    getAll,
    getByID,
    create,
    update,
    deleteOne
}

function getAll() {
    return Subjects.find({
        isDeleted: false
    })
}

function getByID(id) {
    return Subjects.findOne({
        _id: ObjectId(id),
        isDeleted: false
    })
}

function create(data) {
    return Subjects.create(data)
}

function update(id, data) {
    return Subjects.updateOne({
        _id: ObjectId(id)
    }, data)
}

function deleteOne(id) {
    return Subjects.update({
        _id: ObjectId(id)
    }, {
        isDeleted: true
    })
}