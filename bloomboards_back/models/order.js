const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    size: { type: Schema.Types.ObjectId, ref: 'Size' },
    number: {type: Number},
    cheese: [{ type: Schema.Types.ObjectId, ref: "Cheese" }],
    meats: [{ type: Schema.Types.ObjectId, ref: "Meat" }],
    addons: [{ type: Schema.Types.ObjectId, ref: "AddOns" }],
    uid: {type: String, required: true},
    amount: {type: Number, required: true,},
    address: {type: Object, required: true,},
    status: {type:String, default: "pending"},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", orderSchema);
