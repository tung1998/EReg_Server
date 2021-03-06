const mongoose = require('mongoose');
const Crypto = require('./crypto')
const ObjectId = mongoose.Types.ObjectId

const USERS = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    password: String,
    salt: String,
    accessToken: String,
    userType: {
        type: Number,
        default: 1
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
    deleteOne,
    getByAccessToken,
    changePassword,
    checkPassword,
    deleteAccessToken
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

async function create(data) {
    data.accessToken = await Crypto.random32Bytes()
    data.salt = await Crypto.random32Bytes()
    data.password = Crypto.encodeSHA256(data.password, data.salt)
    return Users.findOneAndUpdate({
        username: data.username
    }, data, {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true
    })
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

async function changePassword(id, newPass) {
    try {
        accessToken = await Crypto.random32Bytes()
        salt = await Crypto.random32Bytes()
        password = Crypto.encodeSHA256(newPass, salt)
        return Users.update({
            _id: id
        }, {
            salt,
            accessToken,
            password
        })
    } catch (error) {
        throw error
    }
}

function checkPassword(username, password) {
    return Users.findOne({
        username,
        isDeleted: false
    }).then(user => {
        let hashPassword = Crypto.encodeSHA256(password, user.salt)
        if (hashPassword == user.password) {
            let {
                _id,
                userType,
                username,
                accessToken
            } = user
            return {
                _id,
                username,
                userType,
                message: 'Correct password!',
                accessToken
            }
        } else return {
            message: 'Wrong password!'
        }
    }).catch(error => {
        return {
            message: 'User not found!'
        }
    })
}


async function deleteAccessToken(id) {
    accessToken = await Crypto.random32Bytes()
    return Users.update({
        _id: ObjectId(id)
    }, {
        accessToken
    })
}