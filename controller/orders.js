const express = require("express");
const ordersRouter = express.Router();

////////////////////
//DATA
////////////////////
const Orders = require("../models/order");
// const Meats = require("../models/meat");
const {Meat, Cheese, AddOns} = require("../models/menuitem");
// const AddOns = require("../models/addOns");
const Sizes = require("../models/size");
// TODO: remove commented out stuff 

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
  const size = await Sizes.find({});
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
  Orders.findByIdAndUpdate(req.params.id, req.body, () => {
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
ordersRouter.get("/:id/edit", async (req, res) => {
  const cheese = await Cheese.find({});
  const addOns = await AddOns.find({});
  const size = await Sizes.find({});
  const meats = await Meat.find({});
  Orders.findById(req.params.id)
    .populate("meats")
    .populate("cheese")
    .populate("size")
    .populate("addons")
    .exec((err, foundOrder) => {
      console.log(foundOrder.cheese);
      res.render("orders/edit.ejs", {
        cheese,
        meats,
        addOns,
        size,
        foundOrder,
        currentUser: req.session.currentUser,
      });
    });
});

////////////////////
//SHOW
ordersRouter.get("/:id", (req, res) => {
  Orders.findById(req.params.id)
    .populate("meats")
    .populate("cheese")
    .populate("size")
    .populate("addons")
    .exec((err, foundOrder) => {
      res.render("orders/show.ejs", {
        foundOrder,
        currentUser: req.session.currentUser,
      });
    });
});

module.exports = ordersRouter;
