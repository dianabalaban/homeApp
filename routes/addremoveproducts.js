const express = require('express');
const router = express.Router();
const productModel = require('../model/productModel');
router.post('/addremoveproducts',
    (req, res) => {
       
        productModel.updateOne({ "_id": req.body.id },
        { "$inc": { "quantity": req.body.qty } }, (err) => {
            if (err) {
               console.log(err)
            }
         })
           
    });
module.exports = router