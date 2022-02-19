const express = require('express')
const router = express.Router()
const FireUser = require('../models/fire')

module.exports = router

// Getting All
router.get('/', async (req, res) => {
    try {
        const fires = await FireUser.find()
        res.json(fires)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getFireUser, (req, res) => {
    res.json(res.fireUser)
})

// Creating One
router.post('/', async (req, res) => {
    const user = new FireUser ({
        name: req.body.name,
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

// Updating One
router.patch('/:id', getFireUser, async (req, res) => {
    if (req.body.name != null) {
        res.fireUser.name = req.body.name
    }
    if (req.body.joinDate != null) {
        res.fireUser.joinDate = req.body.joinDate
    }
    if (req.body.age != null) {
        res.fireUser.age = req.body.age
    }
    if (req.body.accountBalance != null) {
        res.fireUser.accountBalance = req.body.accountBalance
    }
    try {
        const updatedFireUser = await res.fireUser.save()
        res.json(updatedFireUser)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getFireUser, async (req, res) => {
    try {
        await res.fireUser.remove()
        res.json({ message: 'Deleted FIRE User' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getFireUser(req, res, next) {
    let fireUser
    try {
        objectId = req.params.id
        fireUser = await FireUser.findById(objectId)
        if (fireUser == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.fireUser = fireUser
    next()
}