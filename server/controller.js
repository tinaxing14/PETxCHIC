const { getProducts, addCart, getCart, deleteCart } = require('../db/model.js')
module.exports = {
  getAllProducts: (req, res) => {
    const skip = parseInt(req.params.skip)
    getProducts(skip, (err, result) => {
      if(err) {
        console.log(err);
        res.status(500).end();
      } else {
        res.status(200).json(result);
      }
    })
  },
  addToCart: (req, res) => {
    const {id, size, price, image, name } = req.query;
      addCart(id, size, price,image, name, (err, result) => {
        if(err) {
          console.log(err);
          res.status(500).end()
        } else {
          res.status(201).json(result);
        }
      })
  },

  getCartProducts: (req, res) => {
    const { userId } = req.params;
      getCart(userId, (err, result) => {
        if(err) {
          console.log(err);
          res.status(500).end()
        } else {
          res.status(200).json(result)
        }
      })
  },
  deleteProduct: (req, res) => {
    const { userId, productId, size } = req.params;
    deleteCart(userId, productId, size, (err, result)=>{
      if(err){
        console.log(err)
        res.status(500).end()
      } else {
        res.status(201).json(result);
      }
    })
  }

}