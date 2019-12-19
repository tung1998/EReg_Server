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
            /GET \/subject/,
            /GET \/subject\/[0-9a-fA-F]{24}/,
            /PUT \/subject\/[0-9a-fA-F]{24}/,
            /POST \/subject/,
            /DELETE \/subject\/[0-9a-fA-F]{24}/,
            //shift
            /GET \/shift/,
            /GET \/shift\/[0-9a-fA-F]{24}/,
            /PUT \/shift\/[0-9a-fA-F]{24}/,
            /POST \/shift/,
            /DELETE \/shift\/[0-9a-fA-F]{24}/  
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