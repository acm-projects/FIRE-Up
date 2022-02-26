const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    joinDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    age: {
        type: Number,
        required: true
    },
    accountBalance: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mongoose.model('Fire', userSchema)