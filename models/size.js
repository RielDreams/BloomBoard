const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sizeSchema = new Schema({
  size: String,
  price: Number,
});

module.exports = mongoose.model("Size", sizeSchema);
// TODO: remove this model if useless