const mongoose = require('mongoose');
const Crypto = require('./crypto')
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
    console.log(Crypto.encodeSHA256('tung1998'))
    Crypto.random32Bytes().then(console.log)

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