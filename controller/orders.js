const express = require("express");
const ordersRouter = express.Router();

////////////////////
//DATA  
////////////////////
const Meats = require("../models/meats");
const Cheese = require("../models/cheese");
const AddOns = require("../models/addOns");
const Orders = require('../models/order')

////////////////////
//INDEX
ordersRouter.get("/", (req, res) => {
  res.render("orders/index.ejs");
});

////////////////////
//NEW
ordersRouter.get("/new", async (req, res) => {
  const cheese = await Cheese.find({})
  const meats = await Meats.find({})
  const addOns = await AddOns.find({})
  res.render('orders/new.ejs', {
    cheese,
    meats,
    addOns,
    currentUser: req.session.currentUser
  })
});

////////////////////
//DESTORY
ordersRouter.delete("/:id", (req, res) => {
  console.log("this is the cancel order page");
});

////////////////////
//UPDATE
ordersRouter.put("/:id", (req, res) => {
  res.send("this is the updated page");
});

////////////////////
//CREATE
ordersRouter.post("/", (req, res) => {
  console.log("this is creating orders");
});

////////////////////
//EDIT
ordersRouter.use("/:id/edit", (req, res) => {
  res.render("orders/edit.ejs");
});

////////////////////
//SHOW
ordersRouter.get("/:id", (req, res) => {
  res.render("orders/show.ejs");
});

module.exports = ordersRouter;
