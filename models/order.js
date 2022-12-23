const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    meat: { type: Schema.Types.ObjectId, ref: "Meats", required: true },
    meatTwo: { type: Schema.Types.ObjectId, ref: "Meats", require: true },
    cheeseOne: { type: Schema.Types.ObjectId, ref: "Cheese", required: true },
    cheeseTwo: { type: Schema.Types.ObjectId, ref: "Cheese", required: true },
    addons: [{type: Schema.Types.ObjectId, ref: 'Addons'}]
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
