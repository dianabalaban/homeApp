const express = require('express');
const router = express.Router();
const productModel = require('../model/productModel');
router.post('/products',
    (req, res) => {
        productModel.find().sort({name:1})
            .then(files => {
                if(files)
                res.send(files);
                else console.log('nu se gaseste nimic')

            })
            .catch(err => console.log(err));
    });
module.exports = router