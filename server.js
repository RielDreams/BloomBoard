////////////////////
//PACKAGES
////////////////////
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();

////////////////////
//intializing
////////////////////
const server = express();

////////////////////
//DATA
////////////////////
const meat = require("./models/meats");
const cheese = require("./models/cheese");
const addOns = require("./models/addOns");
const { urlencoded } = require("express");

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
mongoose.connect(DATABASE_URI);
const db = mongoose.connection;
const ordersController = require('./controller/orders')

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
//ROUTES/CONTROLLER
////////////////////

////////////////////
//CONTROLLER
server.use('/orders', ordersController)

////////////////////
//INDEX
server.get("/", (req, res) => {
  res.render("index.ejs");
});

server.get("/contact", (req, res) => {
  res.render('contact.ejs');
});


////////////////////
//NEW


////////////////////
//DESTORY


////////////////////
//UPDATE


////////////////////
//CREATE


////////////////////
//EDIT


////////////////////
//SHOW
server.get("/:id", (req, res) => {
  res.render('show.ejs');
});

////////////////////
//LISTENING
////////////////////
server.listen(PORT, () => {
  console.log(`BloomBoards is now online at ${PORT}`);
});
db.on("error", (err)=> console.log("an error occured with mongodb " + err.message))
db.on('connected', ()=> console.log(`connected to mongoDB on ${db.host}:${db.port}`))