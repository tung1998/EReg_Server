module.exports = {
    _PERMISSION
}

function _PERMISSION() {
    return {
        MANAGER: [
            /GET \/users/,
            /GET \/users\/[0-9a-fA-F]{24}/,
            /POST \/users/,
            /GET \/users\/[0-9a-fA-F]{24}/,
            /GET \/users\/[0-9a-fA-F]{24}/,
        ],
        STUDENT: [

        ],
        BOTH: [

        ],
        NO_RULE: [

        ]
    }
}