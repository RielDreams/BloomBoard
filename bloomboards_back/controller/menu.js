const express = require("express");
const menuRouter = express.Router();

////////////////////
//DATA
////////////////////
const Menu = require("../models/menu");


////////////////////
//INDEX
menuRouter.get("/", async (req, res) => {
  try {
    res.json(await Menu.find({}))
  } catch (error) {
    res.status(400).json(error)
  }
})
;

////////////////////
//SHOW
menuRouter.get("/:id", async (req, res) => {
  const menu = await Menu.findById(req.params.id);
  res.render("menu/shows.ejs", {
    menu,
    currentUser: req.session.currentUser,
  });
  });
;

module.exports = menuRouter;
