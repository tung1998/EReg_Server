var express = require('express');
var router = express.Router();
const users = require('../model/users')

/* GET home page. */
router.get('/', (req, res, next) => {
    db = res.app.locals.db;
    users.getAll(db).then(result=>{
        res.send(result)
    }).catch(error=>{
        res.send(error)
    })
});


module.exports = router;


