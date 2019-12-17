const mongoose = require('mongoose');

const ROOMS= new mongoose.Schema({
    name: String,
    address: String,
    computerQuantity: Number,
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const Rooms = mongoose.model('Rooms', ROOMS);

module.exports = {
    getAll,
    getByID,
    create,
    update,
    deleteOne
}

function getAll() {
    return Rooms.find({
        isDeleted: false
    })
}

function getByID(id) {
    return Rooms.findOne({
        _id: ObjectId(id),
        isDeleted: false
    })
}

function create(data) {
    return Rooms.create(data)
}

function update(id, data) {
    return Rooms.update({
        _id: ObjectId(id)
    }, data)
}

function deleteOne(id) {
    return Rooms.update({
        _id: ObjectId(id)
    }, {
        isDeleted: true
    })
}