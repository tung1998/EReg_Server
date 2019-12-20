const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId

const TERMS = new mongoose.Schema({
    name: String,
    startTime: String,
    endTime: String,
    subject: String,
    registSTime: String,
    registETime: String,
    isDeleted: {
        type: Boolean,
        default: false
    }
});

const Terms = mongoose.model('Terms', TERMS);

module.exports = {
    getAll,
    getByID,
    create,
    update,
    deleteOne
}

function getAll() {
    return Terms.find({
        isDeleted: false
    })
}

function getByID(id) {
    return Terms.findOne({
        _id: ObjectId(id),
        isDeleted: false
    })
}

function create(data) {
    return Terms.create(data)
}

async function update(id, data) {
    return Terms.updateOne({
        _id: ObjectId(id)
    }, {
        $set: data
    })
}

function deleteOne(id) {
    return Terms.update({
        _id: ObjectId(id)
    }, {
        isDeleted: true
    })
}