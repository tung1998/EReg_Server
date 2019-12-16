module.exports = {
    _PERMISSION
}

function _PERMISSION() {
    return {
        MANAGER: [
            //users
            /GET \/users/,
            /GET \/users\/[0-9a-fA-F]{24}/,
            /GET \/users\/getByAccessToken\/[0-9a-fA-F]+/,
            /GET \/users\/checkAccessToken/,
            /PUT \/users\/[0-9a-fA-F]{24}/,
            /POST \/users/,
            /POST \/users\/changePassword\/[0-9a-fA-F]{24}/,
            /DELETE \/users\/[0-9a-fA-F]{24}/,
            
        ],
        STUDENT: [
            
        ],
        BOTH: [
            /POST \/users\/changePassword/,
            /POST \/users\/deleteAccesstoken/
        ],
        NO_RULE: [
            /POST \/users\/checkPassword/,
        ]
    }
}