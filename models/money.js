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
    stocks: {
        type: Number,
        required: false,
        default: 0
    },
    bonds: {
        type: Number,
        required: false,
        default: 0
    },
    cash: {
        type: Number,
        required: false,
        default: 0
    },
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
        default: null
    },
    returns: {
        type: mongoose.Schema.Types.ObjectId,

    }
})

// returns annual profit
moneySchema.virtual('annualProfit').get(function() {
    return this.annualIncome - this.annualExpense;
})

moneySchema.virtual('netWorth').get(function() {
    return this.stocks + this.bonds + this.cash;
})

// calculates array based on investing profit each year
// TODO: integrate with User database to calculate based on age up to 100
moneySchema.virtual('arrayInterest').get(function(asset, startingValue, interestRate, profit = this.annualProfit, numYears = this.targetAge) {
    const assetWorth = [asset, startingValue];
    for (let i = 1; i <= numYears; i++) {
        assetWorth.push(assetWorth[i] * (1 + interestRate / 100) + profit);
    }

    return assetWorth;
})

moneySchema.virtual('YearsToFIRE').get(function() {
    const moneyList[[]]
})

moneySchema.virtual('matrixInvesting').get(function(numYears = this.targetAge, 
                                                   stocks = this.stocks, bonds = this.bonds, cash = this.cash,
                                                   profit = this.annualProfit) {
    // potentially include limit of numYears up to 100
    const assetList = []
    assetList.push(this.arrayInterest('Stocks', stocks, 7, profit));
    assetList.push(this.arrayInterest('Bonds', bonds, 2, 0));
    assetList.push(this.arrayInterest('Cash', cash, 0, 0));
    
    const netList = ['Net Worth'];
    for (let i = 1; i <= numYears; i++) {
        netList.push(assetList[0][i] + assetList[1][i] + assetList[2][i]);
    }
    
    assetList.push(netList);
    return assetList;
})




// calculate how much money is made from investing Profit over numYears
moneySchema.methods.neededProfitPerYear = function(numYears, profit) {
    return this.arrayInvesting.
    moneySaved = this.netWorth;

    for (let i = 0; i < numYears; i++) {
        moneySaved *= 1 + this.interestRate / 100;
        moneySaved += profit;
    }

    return moneySaved;
}


module.exports = mongoose.model('Money', moneySchema)
