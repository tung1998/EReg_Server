const express = require('express');
const router = express.Router();
const Users = require('../model/users')

router.get('/', (req, res, next) => {
    db = res.app.locals.db;
    Users.getAll().then(result=>{
        console.log(result)
        res.send(result)
    }).catch(error=>{
        res.send(error)
    })
});

router.post('/', (req, res, next) => {
    db = res.app.locals.db;
    Users.getAll().then(result=>{
        console.log(result)
        res.send(result)
    }).catch(error=>{
        res.send(error)
    })
});

module.exports = router;
