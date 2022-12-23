const express = require('express')
const menuRouter = express.Router()

////////////////////
//DATA  
////////////////////
const Menu = require('../models/menu')

////////////////////
//MIDWARE
////////////////////
menuRouter.use(express.static("./public"));

////////////////////
//INDEX
menuRouter.get('/', (req,res)=> {
    res.send('this is the menu')
})

////////////////////
//SHOW
menuRouter.get("/:id", (req, res) => {
    res.render("show.ejs", {
      currentUser: req.session.currentUser
    });
  });

module.exports = menuRouter
