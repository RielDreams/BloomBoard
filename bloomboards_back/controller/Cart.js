const express = require('express')
const CartRouter = express.Router


////////////////////
//DATA
////////////////////
const Cart = requried("../models/Cart")

////////////////////
//MIDWARE
////////////////////
CartRouter.use(express.static("./public"));

////////////////////
//INDEX
CartRouter.get("/", async (req, res) => {
  const foundOrder = await Cart.find({})
  res.render("Cart/index.ejs", {
    currentUser: req.session.currentUser,
    foundOrder,
  });
})

////////////////////
//NEW
CartRouter.get("/new", async (req, res) => {
  res.render("Cart/new.ejs", {
    cheese,
    meats,
    addOns,
    size,
    currentUser: req.session.currentUser,
  });
});

////////////////////
//DESTORY
CartRouter.delete("/:id", (req, res) => {
  Cart.findByIdAndRemove(req.params.id, () => {
    res.redirect("/Cart");
  });
});

////////////////////
//UPDATE
CartRouter.put("/:id", (req, res) => {
  Cart.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect("/Cart");
  });
});

////////////////////
//CREATE
CartRouter.post("/", (req, res) => {
  Cart.create(req.body, (err, createdCart) => {
    res.redirect("/Cart");
  });
});

////////////////////
//EDIT
CartRouter.get("/:id/edit", async (req, res) => {
  const foundOrder = Cart.findById(req.params.id)
      res.render("Cart/edit.ejs", {
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
CartRouter.get("/:id", (req, res) => {
  Cart.findById(req.params.id)
    .populate("meats")
    .populate("cheese")
    .populate("size")
    .populate("addons")
    .exec((err, foundOrder) => {
      res.render("Cart/show.ejs", {
        foundOrder,
        currentUser: req.session.currentUser,
      });
    });
});

module.exports = CartRouter;
