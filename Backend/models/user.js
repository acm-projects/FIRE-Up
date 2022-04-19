const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = new mongoose.Schema({
    Money: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password:{
        type: String,
        minlength: 5,
        require: true
    },
    accountBalance: {
        type: Number,
        min: 13,
        required: true
    },
    age: {
        type: Number,
        min: 13,
        required: true
    },
    joinDate: {
        type: Date,
        default: Date.now,
        immutable: true
    }

})

// Encrypts passowrd
User.pre('save', async function(next){
    
    if(!this.isModified('password')) next()
    this.password = await bcrypt.hash(this.password, 10)
    next()
})



module.exports = mongoose.model('User', User)