const express = require('express')
const router = express.Router();
const groceryModel = require('../model/groceryModel');

router.post('/addnewgrocery', (req, res) => {
   
    groceryModel.create({ 
            name: req.body.name, checked:false},
            (err) => {
            if (err) {
               console.log(err)
            }
         })
      });

module.exports = router