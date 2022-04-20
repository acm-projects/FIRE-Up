const express = require('express')
const router = express.Router()
const Money = require('../models/money')
module.exports = router

// List of fields: 

// Getting All
router.get('/', async (req, res) => {
    try {
        const moneyData = await Money.find()
        res.json(moneyData)
    } 
    
    catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Getting One
router.get('/:id', getMoneyData, (req, res) => {
    res.json(res.moneyInput)
});



// Creating One
router.post('/', async (req, res) => {
    // find way to get age
    const userMoney = new Money ({
        User: req.body.User,
        age: req.body.age,
        annualIncome: req.body.annualIncome,
        annualExpense: req.body.annualExpense,
        initStocks: req.body.initStocks,
        initBonds: req.body.initBonds,
        initCash: req.body.initCash
    })



    try {
        const newMoneyData = await userMoney.save()
        res.status(201).json(newMoneyData)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', getMoneyData, async (req, res) => {
    if (req.body.User != null) {
        res.moneyInput.User = req.body.User
    }
    if (req.body.age != null) {
        res.moneyInput.age = req.body.age
    }
    if (req.body.annualIncome != null) {
        res.moneyInput.annualIncome = req.body.annualIncome
    }
    if (req.body.annualExpense != null) {
        res.moneyInput.annualExpense = req.body.annualExpense
    }
    if (req.body.initStocks != null) {
        res.moneyInput.initStocks = req.body.initStocks
    }
    if (req.body.initBonds != null) {
        res.moneyInput.initBonds = req.body.initBonds
    }
    if (req.body.initCash != null) {
        res.moneyInput.initCash = req.body.initCash
    }
    try {
        const updatedMoneyData = await res.moneyInput.save()
        res.json(updatedMoneyData)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getMoneyData, async (req, res) => {
    try {
        await res.moneyInput.remove()
        res.json({ message: 'Deleted Money Data' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getMoneyData(req, res, next) {
    let moneyInput
    try {
        objectId = req.params.id
        moneyInput = await Money.findById(objectId)
        if (moneyInput == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.moneyInput = moneyInput
    next()
}

