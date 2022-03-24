const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moneySchema = require('./money');

const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: true,
        default: 18   
    },
    accountBalance: {
        type: Number,
        required: false
    }
})

module.exports = mongoose.model('User', userSchema)
