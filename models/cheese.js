const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cheeseSchema = new Schema({
    name: String
})

const meatSchema = new Schema({
    name: String,
})

Meat = mongoose.model('Meat', meatSchema)
Cheese = mongoose.model("Cheese", cheeseSchema)

module.exports = {Meat, Cheese}