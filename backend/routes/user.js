const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    User.find()
        .then((items) => res.json(items))
})

router.post('/', (req, res) => {
    const { body } = req;
    const { firstName, lastName, email, password } = body;

    let newUser = new User();
    newUser.email = email
    newUser.password = password
    newUser.firstName = firstName
    newUser.lastName = lastName
    newUser.save(() => {
        return res.json({
            success: true,
            message: 'Created'
        })
    })
})

module.exports = router;