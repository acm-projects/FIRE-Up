const mongoose = require('mongoose')
// targetYear, targetGoal, withdrawalRate, interestRate, annualIncome, annualExpense, annualProfit, retirementSpending, retirementYears
// things to calculate:

/*
calculate:
projected net worth every year
what year they reach financial independence
annualProfit from annualExpense and annualIncome
*/
const moneySchema = new mongoose.Schema({
    targetYear: {
        type: Number,
        required: false
    },

    targetGoal: { // goal for netWorth over time
        type: Number,
        required: false
    },

    withdrawalRate: {  // in percent
        type: Number,
        required: false,
        default: 4
    },

    interestRate: {  // in percent
        type: Number,
        required: false,
        default: 7
    },
    
    annualIncome: {
        type: Number,
        required: true,
        default: 0
    },

    annualExpense: {
        type: Number,
        required: true,
        default: 0
    },

    /*annualProfit: {
        type: Number,
        required: false,
        default: annualIncome - annualExpense
    }*/
})


/*
Net Worth
Target Goal
Annual Income
Annual Expenditure
Interest Rate (Stocks, Bonds, FOREX)
Inflation Rate
Withdrawal Rate
*/

module.exports = mongoose.model('Money', moneySchema)

