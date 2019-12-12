const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId

const USERS = new mongoose.Schema({
    username: String,
    password: String,
    salt: String,
    access_token: String,
    userType: {
        type: Number,
        min: 0,
        max: 1
    },
    email: String,
    phone: String,
    address: String,
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const Users = mongoose.model('Users', USERS);

module.exports = {
    getAll,
    getByID,
    create,
    update,
    deleteOne
}

function getAll() {
    return Users.find({
        isDeleted: false
    })
}

function getByID(id) {
    return Users.findOne({
        _id: ObjectId(id),
        isDeleted: false
    })
}

function create(data) {
    return Users.create(data)
}

function update(id, data) {
    return Users.update({
        _id: ObjectId(id)
    }, data)
}

function deleteOne(id) {
    return Users.update({
        _id: ObjectId(id)
    }, {
        isDeleted: true
    })
}