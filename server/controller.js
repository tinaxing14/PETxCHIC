const { getProducts } = require('../db/model.js')
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
  }

}