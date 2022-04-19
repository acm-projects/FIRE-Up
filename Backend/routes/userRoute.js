const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
module.exports = router




// Getting All users
router.get('/', async (req, res) => {
    try {
        const userData = await User.find()
        res.json(userData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One user
router.get('/:id', getUser, (req, res) => {
    res.json(res.user)
})

router.post('/login', async(req, res) => {

    // Will contain user stuff
    const body = req.body
    const user = await User.findOne({ email: body.email })

    if(user){

        const result = await bcrypt.compare(body.password, user.password)

        if(result){
            res.status(200).json({validated: true, message: "Valid password"})
        }
        else{
            res.status(400).json({validated: false, message: "Not a valid password"})
        }
    }
    else{
        res.status(401).json({validated: false, message: "Not a valid user"})
    }
})

// Creating One user
router.post('/add', async (req, res) => {
    const user = new User ({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age, 
        accountBalance: req.body.accountBalance
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One user
router.patch('/:id', getUser, async (req, res) => {
    if (req.body.name != null) {
        res.user.name = req.body.name
    }
    if (req.body.email != null) {
        res.user.email = req.body.email
    }
    if (req.body.password != null) {
        res.user.password = req.body.password
    }
    if (req.body.joinDate != null) {
        res.user.joinDate = req.body.joinDate
    }
    if (req.body.accountBalance != null) {
        res.user.accountBalance = req.body.accountBalance
    }
    if (req.body.age != null) {
        res.user.age = req.body.age
    }
    try {
        const updatedUser = await res.user.save({validateModifiedOnly: true})
        res.json(updatedUser)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})
// Deleting One
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Deleted User' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Delete all users
router.delete('/', async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Deleted All Users' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Gets a user
async function getUser(req, res, next) {
    let user
    try {
        objectId = req.params.id
        user = await User.findById(objectId)
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.user = user
    next()
}