const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

// break up netWorth into netWorth, stocks, bonds, cash, 

const moneySchema = new mongoose.Schema({
    targetAge: { // retirement age
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
    netWorth: {
        type: Number,
        required: true,
        default: 0
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        default: null
    }
    
})

// returns annual profit
moneySchema.virtual('annualProfit').get(function() {
    return this.annualIncome - this.annualExpense;
})


// calculates array based on investing profit each year
// TODO: integrate with User database to calculate based on age up to 100
moneySchema.virtual('arrayInterest').get(function(startingValue, interestRate, profit = this.annualProfit, numYears = this.targetAge) {
    const assetWorth = [startingValue];
    for (let i = 0; i < numYears; i++) {
        assetWorth.push(assetWorth[i] * (1 + interestRate / 100) + profit);
    }

    return assetWorth;
})
moneySchema.virtual('matrixInvesting').get(function(numYears = this.targetAge, 
                                                   netWorth = this.netWorth,
                                                   profit = this.annualProfit) {

    // potentially include limit of numYears up to 100
    const netList = ['Net Worth'];
    netList.push(this.arrayInterest(netWorth, 7, profit, numYears))
    return netList;

    //make this a MongoDB Document
})

// calculate how much money is made from investing Profit over numYears
moneySchema.methods.neededProfitPerYear = function(numYears, profit) {
    moneySaved = this.netWorth;

    for (let i = 0; i < numYears; i++) {
        moneySaved *= 1 + this.interestRate / 100;
        moneySaved += profit;
    }

    return moneySaved;
}


module.exports = mongoose.model('Money', moneySchema)
