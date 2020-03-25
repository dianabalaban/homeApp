const express = require('express');
const router = express.Router();
const userModel = require('../model/accountModel');
console.log('!!!!!!!!!!!routes')
console.log(userModel)
router.post('/users',
    (req, res) => {

        userModel.find()
            .then(files => {
                if(files)
                res.send(files);
                else console.log('nu se gaseste nimic')

            })
            .catch(err => console.log(err));
    });
module.exports = router