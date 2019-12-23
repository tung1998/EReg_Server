const express = require('express');
const router = express.Router();
const Students = require('../model/students')

const path = require('path')
const fs = require('fs');
const formidable = require('formidable');
const xlsx = require('node-xlsx')

router.get('/', (req, res, next) => {
    Students.getAll().then(result => {
        res.send(result)
    }).catch(error => {
        res.send(error)
    })
});

router.get('/currentInfo', (req, res, next) => {
    Students.getByUserID(req.user._id).then(result => {
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
        studentID,
        name,
        dateOfBirth,
        sex,
        major,
        classMajor,
        address,
        phone,
        email
    } = req.body
    Students.create({
        studentID,
        name,
        dateOfBirth,
        sex,
        major,
        classMajor,
        address,
        phone,
        email
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
        studentID,
        name,
        dateOfBirth,
        sex,
        major,
        classMajor,
        address,
        phone,
        email
    } = req.body
    Students.update(id, {
        studentID,
        name,
        dateOfBirth,
        sex,
        major,
        classMajor,
        address,
        phone,
        email
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

router.post('/importFile', (req, res, next) => {
    let fileUpload = formidable.IncomingForm()
    fileUpload.parse(req, function (err, fields, files) {
        // console.log(files)
        const fileData = xlsx.parse(fs.readFileSync(files['inputFile'].path))[0].data
        StudentCreateList = fileData.filter((item, index) => index >= 2).map(item => {
            return Students.create({
                studentID: String(item[1]),
                name: `${item[2]} ${item[3]}`,
                dateOfBirth: item[4].split('.').reverse().join('-'),
                sex: item[5],
                major: item[7],
                classMajor: item[6],
            })
        })
        Promise.all(StudentCreateList).then(result => {
            res.send(result)
        }).catch(error => {
            console.log(error)
            res.send(error)
        })
    });
});

router.post

module.exports = router;