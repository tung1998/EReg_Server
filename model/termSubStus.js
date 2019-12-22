const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId

const TERMSUBSTUS = new mongoose.Schema({
    termID: String,
    subjectID: String,
    subjectName: String,
    studentList: Array,
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const TermSubStus = mongoose.model('TermSubStus', TERMSUBSTUS);

module.exports = {
    getAll,
    getByID,
    create,
    update,
    deleteOne,
    addStudents
}

function getAll() {
    return TermSubStus.find({
        isDeleted: false
    })
}

function getByID(id) {
    return TermSubStus.findOne({
        _id: ObjectId(id),
        isDeleted: false
    })
}

function create(data) {
    return TermSubStus.create(data)
}

async function update(id, data) {
    return TermSubStus.updateOne({
        _id: ObjectId(id)
    }, {
        $set: data
    })
}

function deleteOne(id) {
    return TermSubStus.update({
        _id: ObjectId(id)
    }, {
        isDeleted: true
    })
}

function addStudents(id, studentList) {
    return TermSubStus.findOneAndUpdate({
        _id: ObjectId(id)
    }, {
        $addToSet: {
            studentList
        }
    })
}