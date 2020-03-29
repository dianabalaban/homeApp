const express = require('express');
const router = express.Router();
const groceryModel = require('../model/groceryModel');
router.post('/groceries',
    (req, res) => {
        groceryModel.find().sort({checked:1,name:1})
            .then(files => {
                if(files)
                res.send(files);
                else console.log('Nothing found')

            })
            .catch(err => console.log(err));
    });
module.exports = router