const express = require('express');
const router = express.Router();
const TermSubStus = require('../model/termSubStus')
const Students = require('../model/students')

const fs = require('fs');
const formidable = require('formidable');
const xlsx = require('node-xlsx')

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
        studentList
    } = req.body
    TermSubStus.create({
        termID,
        subjectID,
        subjectName,
        studentList
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
        studentList
    } = req.body
    TermSubStus.update(id, {
        termID,
        subjectID,
        subjectName,
        studentList
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

router.post('/importFile/:id(\[0-9a-fA-F]{24})', (req, res, next) => {
    let fileUpload = formidable.IncomingForm()
    let id = req.params.id
    fileUpload.parse(req, function (err, fields, files) {
        const fileData = xlsx.parse(fs.readFileSync(files['inputFile'].path))[0].data
        StudentList = fileData.filter((item, index) => index >= 2).map(item => {
            return {
                studentID: String(item[1]),
                name: `${item[2]} ${item[3]}`,
                dateOfBirth: item[4].split('.').reverse().join('-'),
                classMajor: item[5],
                midExamPoint: item[6],
                elementPoint: item[7],
                examRegisAble: item[8] == "Không" ? false : true
            }
        })
        TermSubStus.addStudents(id, StudentList).then(result=>{
            TermSubStus.getByID(id).then(result=>{
                res.send(result)
            })
        }).catch(error=>{
            console.log(error),
            res.send(error)
        })
    });
});


module.exports = router;