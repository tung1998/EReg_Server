const express = require('express');
const router = express.Router();
const Shifts = require('../model/shifts')
const TermSubStus = require('../model/termSubStus')
const Terms = require('../model/terms')
const Rooms = require('../model/rooms')

router.get('/', (req, res, next) => {
    Shifts.getAll().then(result => {
        res.send(result)
    }).catch(error => {
        res.send(error)
    })
});

router.get('/getAvaiableShift', (req, res, next) => {
    Terms.getCurrentTerm().then(term => {
        return TermSubStus.getAvaiable(term._id, req.user.username)
    }).then(result => {
        let subjectID = result.map(item => item._id)
        console.log(subjectID)
        return Shifts.getAvaiableShift(subjectID)
    }).then(async result => {
        let room = await Promise.all(result.map(item => {
            return Rooms.getByID(item.roomID)
        }))
        res.send(result.filter((item, index) => item.studentID.length < room[index].computerQuantity))
    }).catch(error => {
        res.send(error)
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
        shiftExam,
        time,
        studentID,
        termID
    } = req.body
    Shifts.create({
        subjectID,
        roomID,
        shiftExam,
        time,
        studentID,
        termID
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
        shiftExam,
        time,
        studentID,
        termID
    } = req.body
    Shifts.update(id, {
        subjectID,
        roomID,
        shiftExam,
        time,
        studentID,
        termID
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

router.post('/registerShift', (req, res, next) => {
    let {
        shiftID,
    } = req.body
    console.log(shiftID,req.user._id)
    res.send('1111')
    // Shifts.create({
    //     shiftID
    // }).then(result => {
    //     console.log(result)
    //     res.send(result)
    // }).catch(error => {
    //     console.log(error)
    //     res.send(error)
    // })
});

router.post

module.exports = router;