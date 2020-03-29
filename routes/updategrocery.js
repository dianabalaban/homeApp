const express = require('express');
const router = express.Router();
const groceryModel = require('../model/groceryModel');
router.post('/updategrocery',
    (req, res) => {
        
        groceryModel.updateOne({ "_id": req.body.id },
        { "checked": req.body.checked } , (err) => {
            if (err) {
               console.log(err)
            }
         })
           
    });
module.exports = router