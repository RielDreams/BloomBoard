const express = require("express");
const ordersRouter = express.Router();

////////////////////
//DATA
////////////////////
const Orders = require("../models/order");
const { meats, cheese, addOns, size } = require("../models/menuitem");

////////////////////
//MIDWARE
////////////////////
ordersRouter.use(express.static("./public"));

////////////////////
//INDEX
ordersRouter.get("/", async (req, res) => {
  const foundOrder = await Orders.find({})
  res.render("orders/index.ejs", {
    currentUser: req.session.currentUser,
    foundOrder,
  });
})

////////////////////
//NEW
ordersRouter.get("/new", async (req, res) => {
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
    res.redirect("/orders");
  });
});

////////////////////
//EDIT
ordersRouter.get("/:id/edit", async (req, res) => {
  const foundOrder = Orders.findById(req.params.id)
      res.render("orders/edit.ejs", {
        cheese,
        meats,
        addOns,
        size,
        foundOrder,
        currentUser: req.session.currentUser,
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
