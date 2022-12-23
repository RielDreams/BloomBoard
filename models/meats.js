const mongoose = require('mongoose')
const Schema = mongoose.Schema

const meatSchema = new Schema({
    name: String,
})

module.exports = mongoose.model('Meat', meatSchema)