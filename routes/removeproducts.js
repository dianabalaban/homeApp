const express = require('express')

const router = express.Router();
const productModel = require('../model/productModel');
router.post('/deleteproduct', (req, res) => {
   
    productModel.remove({ _id: req.body.id }, (err) => {
      if (err) {
         console.log(err)
      }
   })

});

module.exports = router

