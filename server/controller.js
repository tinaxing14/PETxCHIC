const { getProducts,addCart } = require('../db/model.js')
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
    const {id, size } = req.query;
    console.log(id, size)
      addCart(id, size, (err, result) => {
        if(err) {
          console.log(err);
          res.status(500).end()
        } else {
          res.status(201).json(result);
        }
      })
  }

}