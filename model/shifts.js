const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId

const SHIFTS = new mongoose.Schema({
    subjectID: String,
    shiftExam: String,
    roomID: String,
    time: String,
    studentID: Array,
    termID: String,
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
    deleteOne,
    getAvaiableShift,
    getBySubjectID,
    removeStudent,
    addStudent,
    getRegister
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

function getBySubjectID(subjectID) {
    return Shifts.find({
        subjectID,
        isDeleted: false
    })
}

function create(data) {
    return Shifts.create(data)
}

async function update(id, data) {
    return Shifts.update({
        _id: ObjectId(id)
    }, {
        $set: data
    })
}

function deleteOne(id) {
    return Shifts.update({
        _id: ObjectId(id)
    }, {
        isDeleted: true
    })
}


function getAvaiableShift(subjectIDs) {
    return Shifts.find({
        subjectID: {
            $in: subjectIDs
        },
        isDeleted: false
    })
}

function getRegister(subjectIDs, studentID) {
    return Shifts.find({
        subjectID: {
            $in: subjectIDs
        },
        studentID,
        isDeleted: false
    })
}

function addStudent(shiftID, studentID) {
    return Shifts.updateOne({
        _id: ObjectId(shiftID)
    }, {
        $push: {
            studentID
        }
    })
}

function removeStudent(shiftID, studentID) {
    return Shifts.updateOne({
        _id: ObjectId(shiftID)
    }, {
        $pull: {
            studentID
        }
    })
}