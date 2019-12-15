const mongoose = require('mongoose');

const MANAGERS = new mongoose.Schema({
    name: String,
    dateOfBirth: Number,
    position: String,
    phone: Number, 
    email: String
});

const Managers = mongoose.model('Managers', MANAGERS);

module.exports = {
    getAll,
    getByID,
    create,
    update,
    deleteOne
}

function getAll() {
    return Managers.find({})
}

function getByID(id) {
    return Managers.findOne({
        _id: ObjectId(id),
        isDeleted: false
    })
}

function create(data) {
    return Managers.create(data)
}

function update(id, data) {
    return Managers.update({
        _id: ObjectId(id)
    }, data)
}

function deleteOne(id) {
    return Managers.update({
        _id: ObjectId(id)
    }, {
        isDeleted: true
    })
}