const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addOnsSchema = new Schema({
    name: String,
    price: {type: Number, default: '6'}
})

module.exports = mongoose.model("addOns", addOnsSchema)