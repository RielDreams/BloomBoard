const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    title: String,
    description: String,
    img: String,
    categories: {type: Array},
    size: String,
    Meats: {type: Array},
    Cheese: {type: Array},
    price: {type: Number},
})


module.exports = mongoose.model('Menu', menuSchema)