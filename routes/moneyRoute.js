const express = require('express')
const router = express.Router()
const MoneyModel = require('../models/money')

module.exports = router

// List of fields: 
// targetYear, targetGoal, withdrawalRate, interestRate, annualIncome, annualExpense, annualProfit

// Getting All
router.get('/', async (req, res) => {
    try {
        const moneyData = await MoneyModel.find()
        res.json(moneyData)
    } 
    
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getMoneyData, (req, res) => {
    res.json(res.moneyInput)
})

// Creating One
router.post('/', async (req, res) => {
    const userMoney = new MoneyModel ({
        targetAge: req.body.targetAge,
        targetGoal: req.body.targetGoal,
        withdrawalRate: req.body.withdrawalRate,
        interestRate: req.body.interestRate,
        annualIncome: req.body.annualIncome,
        annualExpense: req.body.annualExpense,
        netWorth: req.body.netWorth,
        username: req.body.username
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
    if (req.body.targetAge != null) {
        res.moneyInput.targetAge = req.body.targetAge
    }
    if (req.body.targetGoal != null) {
        res.moneyInput.targetGoal = req.body.targetGoal
    }
    if (req.body.withdrawalRate != null) {
        res.moneyInput.withdrawalRate = req.body.withdrawalRate
    }
    if (req.body.interestRate != null) {
        res.moneyInput.interestRate = req.body.interestRate
    }
    if (req.body.annualIncome != null) {
        res.moneyInput.annualIncome = req.body.annualIncome
    }
    if (req.body.annualExpense != null) {
        res.moneyInput.annualExpense = req.body.annualExpense
    }
    if (req.body.netWorth != null) {
        res.moneyInput.netWorth = req.body.netWorth
    }
    if (req.body.username != null) {
        res.moneyInput.username = req.body.username
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
        moneyInput = await MoneyModel.findById(objectId)
        if (moneyInput == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.moneyInput = moneyInput
    next()
}

