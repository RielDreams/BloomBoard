////////////////////
//PACKAGES
////////////////////
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const session = require('express-session')

////////////////////
//intializing
////////////////////
const server = express();

////////////////////
//DATA
////////////////////
const { urlencoded } = require("express");
const accountController = require('./controller/account')
const userController = require('./controller/users')
const ordersController = require("./controller/orders");
const menuController = require('./controller/menu')

////////////////////
//CONFIG
////////////////////
const PORT = process.env.PORT;
const DATABASE_URI = process.env.DATABASE_URI;

////////////////////
//MIDWARE
////////////////////
server.use(express.static("./public"));
server.use(methodOverride("_method"));
server.use(urlencoded({ extended: true }));
server.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}))
mongoose.connect(DATABASE_URI);
const db = mongoose.connection;

////////////////////
//ROUTES
////////////////////

////////////////////
//controller
server.use("/orders", ordersController);
server.use('/account', accountController)
server.use('/user', userController)
server.use('/menu', menuController)

////////////////////
//INDEX
server.get("/", (req, res) => {
  res.render("index.ejs", {
    currentUser: req.session.currentUser
});
});

server.get("/contact", (req, res) => {
  res.render("contact.ejs",{
    currentUser: req.session.currentUser
});
});

////////////////////
//NEW

////////////////////
//DESTORY

////////////////////
//UPDATE

////////////////////
//SEED/CREATE
////////////////////
server.get("/createm", (req, res) => {
    meat.create(req.body, (err) => {
      console.log(meat);
    });
  });
  
  server.get("/createc", (req, res) => {
    cheese.create(req.body, (err, c) => {
      res.send(c);
    });
  });
  
  server.get("/createa", (req, res) => {
    addOns.create(req.body, (err) => {
      addOns.find({}, (err, find) => {
        res.send(find);
      });
    });
  });

////////////////////
//EDIT

////////////////////
//SHOW


////////////////////
//LISTENING
////////////////////
server.listen(PORT, () => {
  console.log(`BloomBoards is now online at ${PORT}`);
});
db.on("error", (err) =>
  console.log("an error occured with mongodb " + err.message)
);
db.on("connected", () =>
  console.log(`connected to mongoDB on ${db.host}:${db.port}`)
);
