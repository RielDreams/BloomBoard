const express = require("express");
const bcrypt = require("bcrypt");
const accountRouter = express.Router();
const User = require("../models/user");

////////////////////
//MIDWARE
////////////////////
accountRouter.use(express.static("./public"));

////////////////////
//LOGIN
////////////////////
accountRouter.get("/login", (req, res) => {
  res.render("account/new.ejs", {
    currentUser: req.session.currentUser,
  });
});

////////////////////
//LOGOUT
////////////////////
accountRouter.delete("/", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

////////////////////
//LOGIN ROUTE
////////////////////
accountRouter.post("/", (req, res) => {
  User.findOne(
    {
      email: req.body.email,
    },
    (err, foundUser) => {
      if (!foundUser) {
        res.send("opps user doesnt exist");
      } else {
        const passwordMatches = bcrypt.compareSync(
          req.body.password,
          foundUser.password
        );
        if (passwordMatches) {
          req.session.currentUser = foundUser;
          res.redirect("/");
        } else {
          res.send("opps! invalid crednetials");
        }
      }
    }
  );
});


module.exports = accountRouter