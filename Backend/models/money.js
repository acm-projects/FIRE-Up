const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

// break up netWorth into netWorth, stocks, bonds, cash,
const Money = new mongoose.Schema({
    User: mongoose.Schema.Types.ObjectId,
    age: {
        type: Number,
        required: false
    },
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
    },
    ageArr: {
        type: [Number],
        required: true,
        default: null
    },
    stocksArr: {
        type: [Number],
        required: true,
        default: null
    },
    bondsArr: {
        type: [Number],
        required: true,
        default: null
    },
    cashArr: {
        type: [Number],
        required: true,
        default: null
    },
    netWorthArr: {
        type: [Number],
        required: true,
        default: null
    },
    
})


Money.methods.arrNetWorth = async function() {
    const assetWorth = [];
    for (let i = 0; i < numYears; i++) {
        assetWorth.push(assetWorth[i] * (1 + interestRate / 100) + profit);
    }

    return assetWorth;
}

// FUNCTION RESPONSIBLE FOR UPDATING RETURNS PLSPLSPLSPLS WORK
Money.pre('save', async function(next) {
    const userId = this.User
    const user = await User.findById(userId);

    const ageArr = this.retAgeArray();
    const stocksArr =  await this.arrayInterest(100000, 7, 2000);
    const bondsArr = await this.arrayInterest(50000, 2, 0);
    const cashArr = await this.arrayInterest(30000, 0, 0);

    const netWorth = [];
    for (let i = 0; i < 100; i++) {
        netWorth.push(stocksArr[i] + bondsArr[i] + cashArr[i]);
    }

    console.log(ageArr);
    console.log(stocksArr);
    console.log(bondsArr);
    console.log(cashArr);
    console.log(netWorthArr);
    
    this.ageArr = ageArr;
    this.stocksArr = stocksArr;
    this.bondsArr = bondsArr;
    this.cashArr = cashArr;
    this.netWorth = netWorth;

    next()
})

// create array [age, age + 1, age + 2, ..., 100]
Money.methods.retAgeArray = async function() {
    const arr = Array.from({length: 100}, (_, index) => index)
    return arr;
}

Money.methods.annualProfit = async function() {
    const profit = await this.annualIncome - this.annualExpense;
    return profit;
}

// calculates array based on investing profit each year
// returns array of 100 values 
Money.methods.arrayInterest = async function(startingValue, interestRate, profit = this.annualProfit) {
    const assetWorth = [startingValue];

    for (let i = 1; i < 100; i++) {
        assetWorth.push(assetWorth[i-1] * (1 + interestRate / 100) + profit);
    }

    return assetWorth;
}


module.exports = mongoose.model('Money', Money)
