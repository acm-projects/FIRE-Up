const mongoose = require('mongoose')

const Article = new mongoose.Schema({
    
    title: {
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true,
        unique: true,
    },
    image:{
        type: String,
        require: true
    },
    description:{
        type: String, 
        require: true
    }
    
})


module.exports = mongoose.model('Article', Article)