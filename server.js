////////////////////
//PACKAGES
////////////////////
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
const methodOverride = require("method-override");
const session = require("express-session");

////////////////////
//intializing
////////////////////
const server = express();

////////////////////
//DATA
////////////////////
const { Meats, Cheese, AddOns } = require("./models/menuitem");
const Menu = require("./models/menu");
const Sizes = require("./models/size");
const { urlencoded } = require("express");
const accountController = require("./controller/account");
const userController = require("./controller/users");
const ordersController = require("./controller/orders");
const menuController = require("./controller/menu");

////////////////////
//CONFIG
////////////////////
const PORT = process.env.PORT || 3000;
const DATABASE_URI = process.env.DATABASE_URI;

////////////////////
//MIDWARE
////////////////////
const db = mongoose.connection;
server.use(express.static("./public"));
server.use(methodOverride("_method"));
server.use(urlencoded({ extended: false }));
server.use(express.json());
server.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
mongoose.connect(DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

////////////////////
//ROUTES
////////////////////

////////////////////
//controller
server.use("/orders", ordersController);
server.use("/account", accountController);
server.use("/user", userController);
server.use("/menu", menuController);

////////////////////
//INDEX
server.get("/", (req, res) => {
  res.render("index.ejs", {
    currentUser: req.session.currentUser,
  });
});

server.get("/contact", (req, res) => {
  res.render("contact.ejs", {
    currentUser: req.session.currentUser,
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
  Meats.create(req.body, (err) => {});
});

server.get("/createc", (req, res) => {
  Cheese.create(req.body, (err, c) => {
    res.send(c);
  });
});

server.get("/createa", (req, res) => {
  AddOns.create(req.body, (err) => {
    AddOns.find({}, (err, find) => {
      res.send(find);
    });
  });
});

server.get("/creates", (req, res) => {
  Sizes.create(req.body, (err, size) => {
    res.send(size);
  });
});

server.get("/createmenu", (req, res) => {
  Menu.create(req.body, (err, menu) => {
    res.send(menu);
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
  console.log(DATABASE_URI)
});
db.on("error", (err) =>
  console.log("an error occured with mongodb " + err.message)
);
db.on("connected", () =>
  console.log(`connected to mongoDB on ${db.host}:${db.port}`)
);
db.on("disconnected", () => console.log("mongod disconnected"));
// TODO: refer back to dustin post on partytime to set limters
