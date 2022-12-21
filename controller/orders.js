const express = require("express");
const ordersRouter = express.Router();

////////////////////
//INDEX
ordersRouter.get("/", (req, res) => {
  res.render('index.ejs');
});

////////////////////
//NEW
ordersRouter.get("/new", (req, res) => {
  res.render("new.ejs");
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
  res.render("edit.ejs");
});

////////////////////
//SHOW
ordersRouter.get("/:id", (req, res) => {
    res.render('show.ejs');
  });


  module.exports = ordersRouter