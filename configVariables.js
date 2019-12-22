module.exports = {
    _PERMISSION
}

function _PERMISSION() {
    return {
        MANAGER: [
            //users
            /GET \/users/,
            /GET \/users\/[0-9a-fA-F]{24}/,
            /PUT \/users\/[0-9a-fA-F]{24}/,
            /POST \/users/,
            /DELETE \/users\/[0-9a-fA-F]{24}/,
            /GET \/users\/getByAccessToken\/[0-9a-fA-F]+/,
            /POST \/users\/changePassword\/[0-9a-fA-F]{24}/,
            //room
            /GET \/rooms/,
            /GET \/rooms\/[0-9a-fA-F]{24}/,
            /PUT \/rooms\/[0-9a-fA-F]{24}/,
            /POST \/rooms/,
            /DELETE \/rooms\/[0-9a-fA-F]{24}/,
            //students
            /GET \/students/,
            /GET \/students\/[0-9a-fA-F]{24}/,
            /PUT \/students\/[0-9a-fA-F]{24}/,
            /POST \/students/,
            /POST \/students\/importFile/,
            /DELETE \/students\/[0-9a-fA-F]{24}/,
            //subject
            /GET \/subjects/,
            /GET \/subjects\/[0-9a-fA-F]{24}/,
            /PUT \/subjects\/[0-9a-fA-F]{24}/,
            /POST \/subjects/,
            /DELETE \/subjects\/[0-9a-fA-F]{24}/,
            //shift
            /GET \/shifts/,
            /GET \/shifts\/[0-9a-fA-F]{24}/,
            /PUT \/shifts\/[0-9a-fA-F]{24}/,
            /POST \/shifts/,
            /DELETE \/shifts\/[0-9a-fA-F]{24}/,
            //term
            /GET \/terms/,
            /GET \/terms\/[0-9a-fA-F]{24}/,
            /PUT \/terms\/[0-9a-fA-F]{24}/,
            /POST \/terms/,
            /DELETE \/terms\/[0-9a-fA-F]{24}/,
            //term-subject-student
            /GET \/termSubStus/,
            /GET \/termSubStus\/[0-9a-fA-F]{24}/,
            /PUT \/termSubStus\/[0-9a-fA-F]{24}/,
            /POST \/termSubStus/,
            /DELETE \/termSubStus\/[0-9a-fA-F]{24}/,
            /POST \/termSubStus\/importFile\/[0-9a-fA-F]{24}/,
        ],
        STUDENT: [

        ],
        BOTH: [
            /GET \/users\/checkAccessToken/,
            /POST \/users\/changePassword/,
            /POST \/users\/deleteAccesstoken/
        ],
        NO_RULE: [
            /POST \/users\/checkPassword/,
        ]
    }
}