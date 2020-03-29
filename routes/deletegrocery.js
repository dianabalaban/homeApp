const express = require('express')

const router = express.Router();
const groceryModel = require('../model/groceryModel');
router.post('/deletegrocery', (req, res) => {

    groceryModel.deleteMany({ checked : true }, (err) => {
      if (err) {
         console.log(err)
      }
   })

});

module.exports = router

