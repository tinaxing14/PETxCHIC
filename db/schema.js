const mongoose = require('./index.js')

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  id: {
    type: Number,
  },
  name: String,
  category:String,
  description: String,
  images:Array,
  price: Number,
  sizes: Array
});

const Product = mongoose.model('Product', productsSchema, 'Products')

module.exports = { Product }
