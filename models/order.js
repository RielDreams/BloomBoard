const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    cheese: [{ type: Schema.Types.ObjectId, ref: "Cheese", required: true }],
    meats: [{ type: Schema.Types.ObjectId, ref: "Meats", required: true }],
    addons: [{ type: Schema.Types.ObjectId, ref: "Addons" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
