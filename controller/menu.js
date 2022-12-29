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
menuRouter.get("/", (req, res) => {
  Menu.find({}, (err, foundMenu) => {
    res.render("menu/index.ejs", {
      foundMenu,
      currentUser: req.session.currentUser,
    });
  });
});

////////////////////
//SHOW
menuRouter.get("/:id", (req, res) => {
  Menu.findById(req.params.id, (err, menu) => {
    res.render("menu/shows.ejs", {
      menu,
      currentUser: req.session.currentUser,
    });
  });
});

module.exports = menuRouter;
