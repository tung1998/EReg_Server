const mongoose = require('mongoose');

const USERS = new mongoose.Schema({
    name: 'string',
    size: 'string'
});

const Users = mongoose.model('Users', USERS);

module.exports = {
    getAll
}

function getAll() {
    return Users.find({})
}