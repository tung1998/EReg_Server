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
    getAvaiableShift
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