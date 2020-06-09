const mongoose = require('./index.js')

const Schema = mongoose.Schema;

const productsSchema = new Schema({
  id: {
    type: Number,
    unique:1
  },
  name: String,
  category:String,
  description: String,
  images:Array,
  price: Number,
  sizes: Array
});
const Product = mongoose.model('Product', productsSchema, 'Products');

const userSchema = new Schema({
  name: {
    type:String,
    maxlength:50
  },
  email: {
    type:String,
    trim:true,
    unique:1,
  },
  password: {
    type:String,
    minlength:5
  },
  cart: {
    type:Array,
    default:[]
  },

});

const User = mongoose.model('User', userSchema, 'Users');

module.exports = { Product, User }
