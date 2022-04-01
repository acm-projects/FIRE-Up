const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');
const Returns = require('./returns')

// break up netWorth into netWorth, stocks, bonds, cash,
const Money = new mongoose.Schema({
    User: mongoose.Schema.Types.ObjectId,
    Returns: mongoose.Schema.Types.ObjectId,
    targetAge: { // retirement age
        type: Number,
        required: false
    },
    targetGoal: { // goal for netWorth over time
        type: Number,
        required: false
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
    initStocks: {
        type: Number,
        required: false,
        default: 0
    },
    initBonds: {
        type: Number,
        required: false,
        default: 0
    },
    initCash: {
        type: Number,
        required: false,
        default: 0
    }
    
})

Money.methods.annualProfit = async function() {
    const profit = await this.annualIncome - annualExpense;
    return profit;
}

Money.methods.netWorth = async function() {
    const assets = await this.stocks + this.bonds + this.cash;
    return assets;
}


// returns annual profit
// calculates array based on investing profit each year
// TODO: integrate with User database to calculate based on age up to 100
Money.methods.arrayInterest = async function(asset, startingValue, interestRate, profit = this.annualProfit, numYears = this.targetAge) {
    const assetWorth = [asset, startingValue];
    for (let i = 1; i <= numYears; i++) {
        assetWorth.push(assetWorth[i] * (1 + interestRate / 100) + profit);
    }

    return assetWorth;
}


Money.virtual('YearsToFIRE').get(function() {
    
})

Money.virtual('matrixInvesting').get(function(numYears = this.targetAge, 
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

module.exports = mongoose.model('Money', Money)
