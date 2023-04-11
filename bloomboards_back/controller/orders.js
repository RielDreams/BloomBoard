const express = require("express");
const ordersRouter = express.Router();

////////////////////
//DATA
////////////////////
const Orders = require("../models/order");

////////////////////
//MIDWARE
////////////////////


////////////////////
//INDEX
ordersRouter.get("/", async (req, res) => {
  try {
    const foundOrder = await Orders.find({})
    res.status(200).json(foundOrder)
  } catch (error) {
    res.status(500).json(error)
  }
})

////////////////////
//NEW
ordersRouter.get("/new", async (req, res) => {
});

////////////////////
//DESTORY
ordersRouter.delete("/:id", async (req, res) => {
  try {
    const orders = await Orders.findByIdAndRemove(req.params.id);
    res.status(200).json(orders)
  } catch (error) {
    res.status(500).json(error)
  }
});

////////////////////
//UPDATE
ordersRouter.put("/:id", async (req, res) => {
try {
  const updatedOrder = await Orders.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(updatedOrder)
} catch (error) {
  res.status(500).json(error)
}
});

////////////////////
//CREATE
ordersRouter.post("/", async (req, res) => {
  try {
    const createdOrders = await Orders.create(req.body);
    res.status(200).json(createdOrders)
  } catch (error) {
    res.status(500).json(error)
  }
});

////////////////////
//EDIT
ordersRouter.get("/:id/edit", async (req, res) => {
  try {
    const foundOrder = Orders.findById(req.params.id)
    res.status(200).json(foundorder)
  } catch (error) {
    res.status(500).json(error)
  }
 
    });

////////////////////
//SHOW
ordersRouter.get("/:id", async (req, res) => {
try {
const foundOrders = await Orders.findById(req.params.id)
res.status(200).json(foundOrders)
} catch (error) {
  res.status(500).json(error)
}
});

module.exports = ordersRouter;
