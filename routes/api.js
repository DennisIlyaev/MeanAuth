const express = require('express');
const mongoose = require('mongoose');
const userModel = require('../models/schema');
const jwt = require('jsonwebtoken');
const router = express.Router();

mongoose.connect('mongodb://dbuser:dbpass@ds113640.mlab.com:13640/user', (err) => {
    err ? console.log(err) : console.log('Connected to DB Bro!');
});

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }

    let token = req.headers.authorization.split(' ')[1];

    if (token === 'null') {
        return res.status(401).send('Unauthorized request');
    }

    let payload = jwt.verify(token, 'secretKey')

    if (!payload) {
        return res.status(401).send('Unauthorized request');
    }

    req.userId = payload.subject;
    next();
}

router.get('/data', verifyToken, (req, res) => {
    userModel.find({}).exec((err, data) => {
        err ? console.log(err) : res.json(data);
    });
});



router.post('/register', (req, res) => {
    const data = req.body;
    const registered = new userModel(data);
    registered.save((err, registeredData) => {
        if (err) {console.log(err)} 
        else {
            let payload = {subject: registeredData._id};
            let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({token});
        }
    });
});

router.post('/login', (req, res) => {
    const info = req.body;
    userModel.findOne({email: info.email}, (err, loggedData) => {
        if (err) console.log(err);
        else if (!loggedData) res.status(401).send('Invalid email');
        else if (loggedData.password !== info.password) res.status(401).send('Invalid password');
        else {
            let payload = {subject: loggedData._id};
            let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({token});
        }
    });
});

router.put('/update/:id', (req, res) => {
    userModel.findByIdAndUpdate(req.params.id, {$set: {email: req.body.email, password: req.body.password}},
    {new: true}, (err, updatedData) => {
        err ? console.log(err) : res.json(updatedData);
    });
});

router.delete('/delete/:id', (req, res) => {
    userModel.findByIdAndRemove(req.params.id, (err, deletedData) => {
        err ? console.log(err) : res.json(deletedData);
    });
});



module.exports = router;