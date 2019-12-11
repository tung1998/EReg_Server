module.exports = {
    getAll
}

function getAll(db){
    return db.find({}).toArray()
}