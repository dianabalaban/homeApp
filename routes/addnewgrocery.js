const express = require('express')
const router = express.Router();
const groceryModel = require('../model/groceryModel');

router.post('/addnewgrocery', (req, res) => {
    console.log(req.body.name)
    groceryModel.create({ 
            name: req.body.name, checked:false},
            (err) => {
            if (err) {
               console.log(err)
            }
         })
      });

module.exports = router