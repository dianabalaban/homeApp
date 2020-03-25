const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    password: {
        type: String,
        //required: true,
    },
    username: {
        type: String,
        //required: true,
        index: {unique: true, dropDups: true}
    },
})

module.exports = mongoose.model('users', userSchema);