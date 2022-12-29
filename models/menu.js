const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
    title: String,
    description: String,
    img: String,
})


module.exports = mongoose.model('Menu', menuSchema)