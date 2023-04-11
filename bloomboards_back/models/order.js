const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    size: { type: String,},
    number: {type: Number},
    letter: {type: String},
    cheese: [{ type: String,}],
    meats: [{ type: String,}],
    addons: [{ type: String,}],
    specialRequest: {type: String},
    uid: {type: String, required: true},
    price: {type: Number, required: true,},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", orderSchema);
