const express = require('express')
const CartRouter = express.Router


////////////////////
//DATA
////////////////////
const Cart = requried("../models/Cart")

////////////////////
//INDEX
CartRouter.get("/", async (req, res) => {
  try {
    const foundCart = await Cart.find({})
    res.status(200).json(foundCart)
  } catch (error) {
    res.status(500).json(error)
  }
})

////////////////////
//NEW
CartRouter.get("/new", async (req, res) => {
});

////////////////////
//DESTORY
CartRouter.delete("/:id", (req, res) => {
  try {
    const Cart = await Cart.findByIdAndRemove(req.params.id);
    res.status(200).json(Cart)
  } catch (error) {
    res.status(500).json(error)
  }
});

////////////////////
//UPDATE
CartRouter.put("/:id", (req, res) => {
try {
  const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(updatedCart)
} catch (error) {
  res.status(500).json(error)
}
});

////////////////////
//CREATE
CartRouter.post("/", async (req, res) => {
  try {
    const createdCart = await Cart.create(req.body);
    res.status(200).json(createdCart)
  } catch (error) {
    res.status(500).json(error)
  }
});

////////////////////
//EDIT
CartRouter.get("/:id/edit", async (req, res) => {
  try {
    const foundCart = Cart.findById(req.params.id)
    res.status(200).json(foundCart)
  } catch (error) {
    res.status(500).json(error)
  }
 
    });

////////////////////
//SHOW
CartRouter.get("/:uid", async (req, res) => {
  try {
    const foundCart = await Cart.find({id: req.params.uid})
    res.status(200).json(foundCart)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = CartRouter;
