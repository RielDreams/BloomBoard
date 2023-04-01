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


module.exports = menuRouter;
