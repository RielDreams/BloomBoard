////////////////////
//PACKAGES
////////////////////
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
const methodOverride = require("method-override");
const session = require("express-session");
const cors = require('cors')

////////////////////
//intializing
////////////////////
const server = express();

////////////////////
//DATA
////////////////////
const { Meats, Cheese, AddOns, Size } = require("./models/menuitem");
const Menu = require("./models/menu");
const { urlencoded } = require("express");
const accountController = require("./controller/account");
const userController = require("./controller/users");
const ordersController = require("./controller/orders");
const menuController = require("./controller/menu");

////////////////////
//CONFIG
////////////////////
const PORT = process.env.PORT || 4000;
const DATABASE_URI = process.env.DATABASE_URI;

////////////////////
//MIDWARE
////////////////////
const db = mongoose.connection;
server.use(express.static("./public"));
server.use(methodOverride("_method"));
server.use(urlencoded({ extended: false }));
server.use(express.json());
server.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
server.use(cors())
mongoose.connect(DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
/////////////////////////
//firebase Authentication
////////////////////////
server.use(async function (req, res, next) {
	try {
		const token = req.get("Authorization");
		if (token) {
			const user = await getAuth().verifyIdToken(token.replace("Bearer ", ""));
			req.user = user;
		} else {
			req.user = null;
		}
	} catch (error) {
		// perform additional task to follow up
		req.user = null;
	}
	next(); // this function invokes next middleware function
});
function isAuthenticated(req, res, next) {
	if (req.user) return next();
	res.status(401).json({ message: "you must login first" });
}


////////////////////
//ROUTES
////////////////////

////////////////////
//CONTROLLER
server.use("/orders", ordersController);
server.use("/account", accountController);
server.use("/user", userController);
server.use("/menu", menuController);


////////////////////
//INDEX


////////////////////
//SEED/CREATE
////////////////////


////////////////////
//LISTENING
////////////////////
server.listen(PORT, () => {
  console.log(`BloomBoards is now online at ${PORT}`);
  console.log(DATABASE_URI)
});
db.on("error", (err) =>
  console.log("an error occured with mongodb " + err.message)
);
db.on("connected", () =>
  console.log(`connected to mongoDB on ${db.host}:${db.port}`)
);
db.on("disconnected", () => console.log("mongod disconnected"));
// TODO: refer back to dustin post on partytime to set limters
