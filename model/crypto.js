const Crypto = require('crypto')

module.exports = {
    encodeSHA256,
    random32Bytes,
}

function encodeSHA256(text, update = '') {
    return Crypto.createHmac("sha256", text).update(update).digest('hex')
}

function random32Bytes() {
    return new Promise((resolve, rejects) => {
        Crypto.randomBytes(32, (err, buf) => {
            if (err) rejects(err)
            else resolve(buf.toString('hex'))
        })
    })
}