const { Product } = require('./schema.js')


module.exports = {
  getProducts: (callback) => {
    Product.find()
      .then((result) => {
        callback(null, result)
      })
      .catch((err) => {
        if(err) {
          callback(err)
        }
      })
  }
}