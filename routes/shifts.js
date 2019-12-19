const express = require('express');
const router = express.Router();
const Shifts = require('../model/shifts')

router.get('/', (req, res, next) => {
    Shifts.getAll().then(result => {
        res.send(result)
    }).catch(error => {
        res.send(error)
    })
});

router.get('/:id(\[0-9a-fA-F]{24})', (req, res, next) => {
    let id = req.params.id
    Shifts.getByID(id).then(result => {
        res.send(result)
    }).catch(error => {
        res.send(error)
    })
});

router.post('/', (req, res, next) => {
    let {
        subjectID,
        roomID,
        time,
        studentID,
        term
    } = req.body
    Shifts.create({
        subjectID,
        roomID,
        time,
        studentID,
        term
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
        subjectID,
        roomID,
        time,
        studentID,
        term
    } = req.body
    Shifts.update(id, {
        subjectID,
        roomID,
        time,
        studentID,
        term
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
    Shifts.deleteOne(id).then(result => {
        console.log(result)
        res.send(result)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
});
router.post

module.exports = router;