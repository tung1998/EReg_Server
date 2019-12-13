module.exports = {
    _PERMISSION
}

function _PERMISSION() {
    return {
        MANAGER: [
            /GET \/users/,
            /GET \/users\/[0-9a-fA-F]{24}/,
            /POST \/users/,
        ],
        STUDENT: [

        ],
        BOTH: [
            /POST \/users\/changePass/,
        ],
        NO_RULE: [

        ]
    }
}