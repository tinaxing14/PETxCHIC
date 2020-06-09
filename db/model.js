const { Product, User } = require('./schema.js')


module.exports = {
  getProducts: (skip, callback) => {
    Product.find()
      .skip(skip)
      .limit(9)
      .exec((err, results) => {
        if(err) {
          callback(err)
        } else {
          callback(null, results)
        }
      })
  },
  addCart: (id, size, price, image, name, callback) =>{
    User.find({email: 'tinaxingtest@gmail.com'}, (err, result) => {
      if(err) {
        callback(err)
      } else {
        let duplicate = false;
        result[0].cart.forEach(product => {
          if(product.id === id && product.size === size) {
            duplicate = true
          }
        });
        if(duplicate) {
          User.findOneAndUpdate(
            {email: 'tinaxingtest@gmail.com', "cart.id": id, "cart.size" : size},
            {$inc: {"cart.$.quantity":1}},
            {new:true},
            (err, result)=>{
              if(err){
                callback(err)
              } else {
                callback(null, result)
              }
            }
          )
        } else {
          User.findOneAndUpdate(
            {email: 'tinaxingtest@gmail.com'},
            {
              $push: {
                cart: {
                  id:id,
                  size: size,
                  quantity:1,
                  price: price,
                  image: image,
                  name: name,
                  date:Date.now()
                }
              }
            },
            { new: true},
            (err, result) => {
              if(err) {
                callback(err)
              } else {
                callback(null, result)
              }
            }
          )
        }

      }
    })
  },

  getCart: (id, callback) => {
    User.find({email:id}, (err, result)=>{
      if(err) {
        callback(err)
      } else {
        callback(null, result)
      }
    });
  },
  deleteCart: (userId, productId, callback) => {
    User.findOneAndUpdate({email:userId},{$pull:{ cart:{ id: productId} }}, (err, result)=>{
      if(err){
        callback(err)
      } else {
        callback(null, result)
      }
    })
  }
}