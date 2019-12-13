const express = require('express');
const router = express.Router();
const Students = require('../model/Students')

router.get('/', (req, res, next) => {
    Students.getAll().then(result => {
        res.send(result)
    }).catch(error => {
        res.send(error)
    })
});

router.get('/:id(\[0-9a-fA-F]{24})', (req, res, next) => {
    let id = req.params.id
    Students.getByID(id).then(result => {
        res.send(result)
    }).catch(error => {
        res.send(error)
    })
});

router.post('/', (req, res, next) => {
    let {
        username,
        password,
        salt,
        access_token,
        userType,
        email,
        phone,
        address
    } = req.body
    Students.create({
        username,
        password,
        salt,
        access_token,
        userType,
        email,
        phone,
        address
    }).then(result => {
        console.log(result)
        res.send(result)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
});

router.put('/:id(\[0-9a-fA-F]{24})', (req, res, next) => {
    let id = req.params.id
    let {
        username,
        password,
        salt,
        access_token,
        userType,
        email,
        phone,
        address
    } = req.body
    Students.update(id, {
        username,
        password,
        salt,
        access_token,
        userType,
        email,
        phone,
        address
    }).then(result => {
        console.log(result)
        res.send(result)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
});

router.delete('/:id(\[0-9a-fA-F]{24})', (req, res, next) => {
    let id = req.params.id
    Students.deleteOne(id).then(result => {
        console.log(result)
        res.send(result)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
});

router.post

module.exports = router;