const express = require('express');
const router = express.Router();
const TermSubStus = require('../model/termSubStus')

router.get('/', (req, res, next) => {
    TermSubStus.getAll().then(result => {
        res.send(result)
    }).catch(error => {
        res.send(error)
    })
});

router.get('/:id(\[0-9a-fA-F]{24})', (req, res, next) => {
    let id = req.params.id
    TermSubStus.getByID(id).then(result => {
        res.send(result)
    }).catch(error => {
        res.send(error)
    })
});

router.post('/', (req, res, next) => {
    let {
        termID,
        subjectID,
        subjectName,
        student
    } = req.body
    TermSubStus.create({
        termID,
        subjectID,
        subjectName,
        student
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
        termID,
        subjectID,
        subjectName,
        student
    } = req.body
    TermSubStus.update(id, {
        termID,
        subjectID,
        subjectName,
        student
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
    TermSubStus.deleteOne(id).then(result => {
        console.log(result)
        res.send(result)
    }).catch(error => {
        console.log(error)
        res.send(error)
    })
});


module.exports = router;