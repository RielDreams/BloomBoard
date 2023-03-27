const bcrypt = require('bcrypt')
const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')

////////////////////
//MIDWARE
////////////////////
userRouter.use(express.static("./public"));

////////////////////
//NEW USER
////////////////////
userRouter.get('/new', (req, res) => {
    res.render('user/new.ejs', {
        currentUser: req.session.currentUser
    })
})


////////////////////
//CREATE NEW USER
////////////////////
userRouter.post('/', (req,res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (err, createdUser) => {
        res.redirect('/')
    })
})

module.exports = userRouter