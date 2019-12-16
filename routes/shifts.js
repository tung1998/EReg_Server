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
        subject_id,
        room_id,
        time,
        student_id,
        term
    } = req.body
    Shifts.create({
        subject_id,
        room_id,
        time,
        student_id,
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
        subject_id,
        room_id,
        time,
        student_id,
        term
    } = req.body
    Shifts.update(id, {
        subject_id,
        room_id,
        time,
        student_id,
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

module.exports = router;