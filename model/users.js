const mongoose = require('mongoose');
const Crypto = require('./crypto')
const ObjectId = mongoose.Types.ObjectId

const USERS = new mongoose.Schema({
    username: String,
    password: String,
    salt: String,
    accessToken: String,
    userType: Number,
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
    deleteOne,
    getByAccessToken,
    changePass
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

function getByAccessToken(accessToken) {
    return Users.findOne({
        accessToken,
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

async function changePass(id, newPass){
    try{
        newSalt = await Crypto.random32Bytes()
        newAccessToken = await Crypto.random32Bytes()
        console.log(newSalt,newAccessToken)
    }
    catch(error){
        throw error
    }
}