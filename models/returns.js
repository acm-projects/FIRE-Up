const mongoose = require('mongoose')
const Money = require('./money')
const User = require('./user')

const Returns = new mongoose.Schema({
    User: mongoose.Schema.Types.ObjectId,
    Money: mongoose.Schema.Types.ObjectId,
    ageArr: {
        type: [Number],
        required: true,
        default: null
    },
    stocksArr: {
        type: [Number],
        required: true,
        default: null
    },
    bondsArr: {
        type: [Number],
        required: true,
        default: null
    },
    cashArr: {
        type: [Number],
        required: true,
        default: null
    },
    netWorth: {
        type: [Number],
        required: true,
        default: null
    },
    profit: {
        type: Number,
        required: true,
        default: 0
    }
})



module.exports = mongoose.model('Returns', Returns)