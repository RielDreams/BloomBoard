const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    size: [{ type: Schema.Types.ObjectId, ref: 'Sizes' }],
    cheese: [{ type: Schema.Types.ObjectId, ref: "Cheese" }],
    meats: [{ type: Schema.Types.ObjectId, ref: "Meats" }],
    addons: [{ type: Schema.Types.ObjectId, ref: "AddOns" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", orderSchema);
