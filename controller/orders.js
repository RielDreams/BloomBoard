const express = require("express");
const ordersRouter = express.Router();

////////////////////
//DATA
////////////////////
const Orders = require("../models/order");
// const Meats = require("../models/meat");
const { Meat, Cheese } = require("../models/cheese");
const AddOns = require("../models/addOns");
const Size = require("../models/size");

////////////////////
//MIDWARE
////////////////////
ordersRouter.use(express.static("./public"));

////////////////////
//INDEX
ordersRouter.get("/", async (req, res) => {
  await Orders.find({})
    .populate("meats")
    .populate("cheese")
    .populate("size")
    .populate("addons")
    .exec((err, foundOrder) => {
      console.log(foundOrder);
      res.render("orders/index.ejs", {
        currentUser: req.session.currentUser,
        foundOrder,
      });
    });
});

////////////////////
//NEW
ordersRouter.get("/new", async (req, res) => {
  const cheese = await Cheese.find({});
  const meats = await Meat.find({});
  const addOns = await AddOns.find({});
  const size = await Size.find({});
  res.render("orders/new.ejs", {
    cheese,
    meats,
    addOns,
    size,
    currentUser: req.session.currentUser,
  });
});

////////////////////
//DESTORY
ordersRouter.delete("/:id", (req, res) => {
  Orders.findByIdAndRemove(req.params.id, () => {
    res.redirect("/orders");
  });
});

////////////////////
//UPDATE
ordersRouter.put("/:id", (req, res) => {
  Orders.findByIdAndUpdate(req.params.id, () => {
    res.redirect("/orders");
  });
});

////////////////////
//CREATE
ordersRouter.post("/", (req, res) => {
  Orders.create(req.body, (err, createdOrders) => {
    console.log(req.body);
    res.redirect("/orders");
  });
});

////////////////////
//EDIT
ordersRouter.use("/:id/edit", (req, res) => {
  Orders.findById(req.params.id, (err, foundOrder) => {
    res.render("orders/edit.ejs", { foundOrder });
  });
});

////////////////////
//SHOW
ordersRouter.get("/:id", (req, res) => {
  Orders.findById(req.params.id, (err, foundOrder) => {
    res.render("orders/show.ejs", { foundOrder });
    console.log(foundOrder);
  });
});

module.exports = ordersRouter;
