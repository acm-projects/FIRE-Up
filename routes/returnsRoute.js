const express = require('express')
const router = express.Router()
const Returns = require('../models/returns')

module.exports = router

// Getting All users
router.get('/', async (req, res) => {
    try {
        const returnsData = await Returns.find()
        res.json(returnsData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One user
router.get('/:id', getReturns, (req, res) => {
    res.json(res.returns)
})


// Creating One user
router.post('/add', async (req, res) => {
    const returns = new Returns ({
        Money: req.body.Money,
        ageArr: req.body.ageArr,
        stocksArr: req.body.stocksArr,
        bondsArr: req.body.bondsArr,
        cashArr: req.body.cashArr,
        netWorth: req.body.netWorth,
        profit: req.body.profit
    })
    try {
        const newReturns = await returns.save()
        res.status(201).json(newReturns)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One user
router.patch('/:id', getReturns, async (req, res) => {
    if (req.body.Money != null) {
        res.user.Money = req.body.Money
    }
    if (req.body.ageArr != null) {
        res.user.ageArr = req.body.ageArr
    }
    if (req.body.stocksArr != null) {
        res.user.stocksArr = req.body.stocksArr
    }
    if (req.body.bondsArr != null) {
        res.user.bondsArr = req.body.bondsArr
    }
    if (req.body.cashArr != null) {
        res.user.cashArr = req.body.cashArr
    }
    if (req.body.netWorth != null) {
        res.user.netWorth = req.body.netWorth
    }
    if (req.body.profit != null) {
        res.user.profit = req.body.profit
    }
    try {
        const updatedReturns = await res.returns.save()
        res.json(updatedReturns)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})
// Deleting One
router.delete('/:id', getReturns, async (req, res) => {
    try {
        await res.returns.remove()
        res.json({ message: 'Deleted User' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Delete all users
router.delete('/', async (req, res) => {
    try {
        await res.returns.remove()
        res.json({ message: 'Deleted All Users' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Gets a user
async function getReturns(req, res, next) {
    let returns
    try {
        objectId = req.params.id
        returns = await Returns.findById(objectId)
        if (returns == null) {
            return res.status(404).json({ message: 'Cannot find returns data' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.returns = user
    next()
}
