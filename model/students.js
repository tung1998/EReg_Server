const mongoose = require('mongoose');
const Users = require('./users')
const ObjectId = mongoose.Types.ObjectId


const STUDENTS = new mongoose.Schema({
    studentID: {
        type: String,
        unique: true,
        required: true,
        dropDups: true
    },
    userID: String,
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
    createdTime: {
        type: Number,
        default: Date.now()
    },
    updatedTime: {
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
    deleteOne,
    getByStudentID,
    getByUserID
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

function getByStudentID(id) {
    return Students.findOne({
        studentID: id,
        isDeleted: false
    })
}

function getByUserID(id) {
    return Students.findOne({
        userID: id,
        isDeleted: false
    })
}

function create(data) {
    return Users.create({
        username: data.studentID,
        password: data.studentID,
        userType: 1,
    }).then(result => {
        data.userID = result._id
        return Students.findOneAndUpdate({
            studentID: data.studentID
        }, data, {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true
        })
    })
}

function update(id, data) {
    return Students.findOneAndUpdate({
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