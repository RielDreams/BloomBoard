const express = require("express");
const menuRouter = express.Router();

////////////////////
//DATA
////////////////////
const Menu = require("../models/menu");

////////////////////
//MIDWARE
////////////////////
menuRouter.use(express.static("./public"));

////////////////////
//INDEX
async function getMenu(){
  const menu = await Menu.find({})
  return menu;
}

menuRouter.get("/", async (req, res) => {
  const foundMenu = await Menu.find({})
  res.render("menu/index.ejs", {
    foundMenu,
    currentUser: req.session.currentUser,
  })
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
