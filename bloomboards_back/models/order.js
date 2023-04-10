const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    size: { type: String, ref: 'Size' },
    number: {type: Number},
    letter: {type: String}
    cheese: [{ type: String, ref: "Cheese" }],
    meats: [{ type: String, ref: "Meat" }],
    addons: [{ type: String, ref: "AddOns" }],
    specialRequest: {type: String}
    uid: {type: String, required: true},
    amount: {type: Number, required: true,},
    address: {type: Object, required: true,},
    status: {type:String, default: "pending"},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", orderSchema);
