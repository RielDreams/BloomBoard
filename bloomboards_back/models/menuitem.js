const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cheese = [{name: 'Brie'},{name: 'Feta'},{name: 'Swiss'},{name: 'Goat'},{name: 'Gouda'},{name: 'Asiago'},{name: 'Havarti'},{name: 'Queso Fresco'},{name: 'Gruyere'},{name: 'Jarlsberg'},{name: 'Provolone'},{name: 'Manchego'},{name: 'Parmesan'},{name: 'Blue Cheese'},{name: 'Colby-Jack'},{name: 'Camembert'},{name: 'Pepper-Jack'},{name: 'Mozzarella'},{name: 'Sharp White Cheddar'},{name: 'Sharp Cheddar'},]

const meats = [{name: 'Bresaola'},{name: 'Capocollo'},{name: 'Calabrese'},{name: 'Pepperoni'},{name: 'Soppressata'},{name: 'Spicy Salami'},{name: 'Beef Salami'},{name: 'Honey Turkey'},{name: 'Pepper Salami'},,{name: 'Genoa Salami'},{name: 'Serrano Ham'},{name: 'Prosciutto'},{name: 'Italian Salami'}]

const addOns = [{name: 'Caprese Salad', price: 6},{name: 'Bocadillo Con Queso(Guava Paste w/ Cheese', price: 6},{name: 'Cream Cheese Stuffed Baby Bell Pepers', price: 6},{name: 'French Baguette (L)', price: 2},{name: 'French Baguette(XL)', price: 6},{name: 'French Macaroons', price: 6},{name: 'Spreadable Cheese', price: 6}, {name: 'Extra Meat', price: 1}, {name: 'extra Cheese', price: 1},]

const size = [{size: 'Mini',
price: 35},
{size: 'Small',
price: 55},
{size: 'Medium',
price: 75},
{size: 'Large',
price: 115},
{size: 'X-Large',
price: 150}]
  
// Sizes = mongoose.model("Sizes", sizeSchema);




module.exports = {meats, cheese, addOns, size}