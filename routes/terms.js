const express = require('express');
const router = express.Router();
const Terms = require('../model/terms')

router.get('/', (req, res, next) => {
    Terms.getAll().then(result => {
        res.send(result)
    }).catch(error => {
        res.send(error)
    })
});

router.get('/:id(\[0-9a-fA-F]{24})', (req, res, next) => {
    let id = req.params.id
    Terms.getByID(id).then(result => {
        res.send(result)
    }).catch(error => {
        res.send(error)
    })
});

router.post('/', (req, res, next) => {
    let {
        name,
        startTime,
        endTime,
        subject,
        registSTime,
        registETime
    } = req.body
    Terms.create({
        name,
        startTime,
        endTime,
        subject,
        registSTime,
        registETime
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
        name,
        startTime,
        endTime,
        subject,
        registSTime,
        registETime
    } = req.body
    Terms.update(id, {
        name,
        startTime,
        endTime,
        subject,
        registSTime,
        registETime
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
    Terms.deleteOne(id).then(result => {
        console.log(result)
        res.send(result)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
});



module.exports = router;