const express = require('express')
const router = express.Router();

const productModel = require('../model/productModel');

router.post('/addnewproduct', (req, res) => {
    
    productModel.create({ 
            name: req.body.product, 
            quantity: req.body.quantity, 
            notes: req.body.note},
            (err) => {
            if (err) {
               console.log(err)
            }
         })
      });

module.exports = router