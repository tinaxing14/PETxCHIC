const { Product } = require('./schema.js')


module.exports = {
  getProducts: (skip, callback) => {
    Product.find()
      .skip(skip)
      .limit(8)
      .exec((err, results) => {
        if(err) {
          callback(err)
        } else {
          callback(null, results)
        }
      })
  }
}