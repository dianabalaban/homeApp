const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        index: {unique: true, dropDups: true},
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
       
    },
    notes: {
        type: String
       
    },
})

module.exports = mongoose.model('products', productSchema);