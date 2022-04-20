const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

// break up netWorth into netWorth, stocks, bonds, cash,
const Money = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId
    },
    age: {
        type: Number,
        required: false
    },
    targetGoal: { // goal for netWorth over time
        type: Number,
        required: false
    },
    FI_Number: {
        type: Number,
        required: false,
        default: 0,
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

    const age = this.age;
    const ageArr = await this.retAgeArray(25);
    const profit = await this.annualProfit();
    const stocksArr =  await this.arrayInterest(age, this.initStocks, 7, profit);
    const bondsArr = await this.arrayInterest(age, this.initBonds, 2, 0);
    const cashArr = await this.arrayInterest(age, this.initCash, 0, 0);

    const netWorthArr = [];
    for (let i = age; i < 100; i++) {
        const newValue = stocksArr[i - age] + bondsArr[i - age] + cashArr[i - age]
        netWorthArr.push(Math.round((newValue + Number.EPSILON) * 100) / 100);
    }
    
    
    this.ageArr = ageArr;
    this.stocksArr = stocksArr;
    this.bondsArr = bondsArr;
    this.cashArr = cashArr;
    this.netWorthArr = netWorthArr;

    const expense = await this.annualExpense;
    this.targetGoal = 25 * expense;

    const fi = await this.FI();
    this.FI_Number = fi;
    next()
})

// create array [age, age + 1, age + 2, ..., 100]
Money.methods.retAgeArray = async function(age) {
    const arr = []
    for (let i = age; i < 100; i++) {
        arr.push(i);
    }
    return arr;
}

Money.methods.annualProfit = async function() {
    const profit = await this.annualIncome - this.annualExpense;
    return profit;
}

// calculates array based on investing profit each year
// returns array of 100 values 
Money.methods.arrayInterest = async function(age, startingValue, interestRate, profit) {
    const assetWorth = [startingValue];
    
    for (let i = age + 1; i < 100; i++) {
        const num = assetWorth[i - age - 1] * (1 + interestRate / 100) + profit
        assetWorth.push(Math.round((num + Number.EPSILON) * 100) / 100);
    }

    return assetWorth;
}

Money.methods.FI = async function() {
    age = await this.age;
    nwArr = await this.netWorthArr;
    len = nwArr.length
    i = 0
    goal = await this.targetGoal
    console.log("Age: ", age)
    console.log("Array: ", nwArr)
    console.log("Length: ", len)
    console.log("Goal: ", goal)
    while (nwArr[i] < goal && i < len) {
        i++;
    }
    console.log("I: ", i)
    FIAge = age + i;
    if (FIAge > 65) {
        return -999;
    }
    else {
        return i;
    }
}
module.exports = mongoose.model('Money', Money)
