const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    meats: [{ type: Schema.Types.ObjectId, ref: "Meats", required: true }],
    cheese: [{ type: Schema.Types.ObjectId, ref: "Cheese", required: true }],
    addons: [{type: Schema.Types.ObjectId, ref: 'Addons'}]
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
