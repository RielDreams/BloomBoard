const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cheeseSchema = new Schema({
    name: String
})

const meatSchema = new Schema({
    name: String,
})

const addOnsSchema = new Schema({
    name: String,
    price: {type: Number, default: '6'}
})

// const sizeSchema = new Schema({
//     size: String,
//     price: Number,
//   });
  
  
// Sizes = mongoose.model("Sizes", sizeSchema);
AddOns = mongoose.model("AddOns", addOnsSchema)
Meat = mongoose.model('Meat', meatSchema)
Cheese = mongoose.model("Cheese", cheeseSchema)

module.exports = {Meat, Cheese, AddOns,}