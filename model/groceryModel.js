const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
    name: {
        type: String,
        index: {unique: true, dropDups: true},
        required: true,
    },
})

module.exports = mongoose.model('groceries', grocerySchema);