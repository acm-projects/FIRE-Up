const express = require('express')
const router = express.Router()
const User = require('../models/user')

module.exports = router

router.get('/', async (req, res) => {
    try {
        const userData = await User.find()
        res.json(userData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.get('/:id', getUser, (req, res) => {
    res.json(res.user)
})

router.post('/', async (req, res) => {
    const user = new User ({
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


router.patch('/:id', getUser, async (req, res) => {
    if (req.body.name != null) {
        res.user.name = req.body.name
    }
    if (req.body.age != null) {
        res.user.age = req.body.age
    }
    if (req.body.accountBalance != null) {
        res.user.accountBalance = req.body.accountBalance
    }

    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Deleted FIRE User' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.delete('/', async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Deleted FIRE User' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.delete('/', async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Deleted FIRE User' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


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