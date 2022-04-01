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

// Checks password entered with the encrypted passowrd 
// Will be used when we get to logging in users to our app
User.methods.checkPassword = async function(password){
    const result = await bcrypt.compare(password, this.password)
    return result
}

//email validation
User.path('email').validate(async (email) => {
    const emailCount = await mongoose.models.User.countDocuments({email})

    return !emailCount

})


module.exports = mongoose.model('User', User)