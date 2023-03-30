const bcrypt = require('bcrypt')
const express = require('express')
const userRouter = express.Router()
const User = require('../models/user')

////////////////////
//MIDWARE
////////////////////
userRouter.use(express.static("./public"));


///////////////////////////////
// ROUTES
////////////////////////////////

////////////////////
//INDEX
userRouter.get("/", async (req, res) => {
	try {
		res.json(await User.find({}));
	} catch (error) {
		res.status(400).json(error);
	}
});


////////////////////
//DELETE
////////////////////
userRouter.delete("/:id", async (req, res) => {
	try {
		res.json(await User.findByIdAndRemove(req.params.id));
	} catch (error) {
		res.status(400).json(error);
	}
});

////////////////////
//UPDATE
////////////////////
userRouter.put("/:id", async (req, res) => {
	try {
		res.json(
			await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
		);
	} catch (error) {
		res.status(400).json(error);
	}
});

////////////////////
//CREATE
////////////////////
userRouter.post('/', async (req, res) => {
	try {
		res.json(await User.create(req.body));
	} catch (error) {
		res.status(400).json(error);
	}
});

module.exports = userRouter