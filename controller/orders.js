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
//MIDWARE
////////////////////
ordersRouter.use(express.static("./public"));

////////////////////
//INDEX
ordersRouter.get("/", (req, res) => {
  Orders.find({}, (err, foundOrder)=> {
  res.render("orders/index.ejs", {
    currentUser: req.session.currentUser
  });
});
})

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
  Orders.findByIdAndRemove(req.params.id, ()=> {
    res.redirect('/orders')
  })
});

////////////////////
//UPDATE
ordersRouter.put("/:id", (req, res) => {
  Orders.findByIdAndUpdate(req.params.id, ()=>{
    res.redirect('/orders')
  })
});

////////////////////
//CREATE
ordersRouter.post("/", (req, res) => {
  Orders.create(req.body, (err, createdOrders) => {
    res.redirect('/orders')
  })
});

////////////////////
//EDIT
ordersRouter.use("/:id/edit", (req, res) => {
  Orders.findById(req.params.id, (err, foundOrder) => {
    res.render('orders/edit.ejs', {foundOrder})
  })
});

////////////////////
//SHOW
ordersRouter.get("/:id", (req, res) => {
  Orders.findById(req.params.id, (err, foundOrder) => {
    res.render('orders/show.ejs', {foundOrder})
  })
});

module.exports = ordersRouter;
