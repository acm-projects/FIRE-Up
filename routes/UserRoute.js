const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')


module.exports = router


// Getting All users
router.get('/', async (req, res) => {
    try {
        const userData = await User.find()
        res.json(userData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One user
router.get('/:id', getUser, (req, res) => {
    res.json(res.user)
})

router.post('/login', async(req, res) => {

    // Will contain user stuff
    const body = req.body
    const user = await User.findOne({ email: body.email })

    if(user){

        const result = await bcrypt.compare(body.password, user.password)

        if(result){
            res.status(200).json({validated: true, message: "Valid password"})
        }
        else{
            res.status(400).json({validated: false, message: "Not a valid password"})
        }
    }
    else{
        res.status(401).json({validated: false, message: "Not a valid user"})
    }
})

// Creating One user
router.post('/add', async (req, res) => {
    const user = new User ({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One user
router.patch('/:id', getUser, async (req, res) => {
    if (req.body.name != null) {
        res.user.name = req.body.name
    }
    if (req.body.email != null) {
        res.user.email = req.body.email
    }
    if (req.body.password != null) {
        res.user.password = req.body.password
    }
    if (req.body.joinDate != null) {
        res.user.joinDate = req.body.joinDate
    }
    if (req.body.accountBalance != null) {
        res.user.accountBalance = req.body.accountBalance
    }
    if (req.body.age != null) {
        res.user.age = req.body.age
    }
    try {
        const updatedUser = await res.user.save({validateModifiedOnly: true})
        res.json(updatedUser)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})
// Deleting One
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Deleted User' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Delete all users
router.delete('/', async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Deleted All Users' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Gets a user
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

// Max will always be 39 (n-1 = index)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// Made sense to just store them directly than read it each time because we are never changing th links
// All 40 articles stored in a list.
// TODO: Make a random number generator that will choose an index value and give get the link
links = [
'https://www.investopedia.com/terms/f/financial-independence-retire-early-fire.asp', 
'https://www.thebalance.com/achieve-financial-independence-358175',
'https://www.listenmoneymatters.com/financial-independence/', 
'https://www.fidelity.com/learning-center/personal-finance/financial-independence-retire-early-FIRE',
'https://www.moneyunder30.com/financial-independence-tips', 
'https://www.financialsamurai.com/three-levels-of-financial-independence/', 
'https://www.retirebeforedad.com/financial-independence-number/', 
'https://www.investopedia.com/ask/answers/101314/how-can-i-start-or-set-roth-401k.asp',
'https://www.nerdwallet.com/article/investing/how-and-where-to-open-a-roth-ira', 
'https://www.td.com/us/en/personal-banking/finance/achieve-financial-independence/',
'https://www.moneyunder30.com/how-much-should-you-contribute-to-your-401k',
'https://www.investopedia.com/articles/personal-finance/112015/these-10-habits-will-help-you-reach-financial-freedom.asp',
'https://www.forbes.com/sites/jrose/2016/03/25/financial-independence/?sh=5c7f7f6984b3',
'https://www.investopedia.com/ask/answers/how-can-i-buy-sp-500-fund/',
'https://www.forbes.com/advisor/investing/how-to-invest-in-sp-500/',
'https://www.nerdwallet.com/article/investing/how-to-invest-in-sp500',
'https://www.fool.com/investing/how-to-invest/index-funds/',
'https://www.mrmoneymustache.com/2012/01/13/the-shockingly-simple-math-behind-early-retirement/',
'https://www.mrmoneymustache.com/2018/11/29/how-to-retire-forever-on-a-fixed-chunk-of-money/',
'https://www.mrmoneymustache.com/2018/10/05/the-fire-movement/',
'https://jlcollinsnh.com/2012/05/12/stocks-part-vi-portfolio-ideas-to-build-and-keep-your-wealth/',
'https://jlcollinsnh.com/2012/05/16/stocks-part-vii-can-everyone-really-retire-a-millionaire/',
'https://jlcollinsnh.com/2015/06/02/stocks-part-viii-the-401k-403b-tsp-ira-roth-buckets/',
'https://jlcollinsnh.com/2012/12/07/stocks-part-xiii-withdrawal-rates-how-much-can-i-spend-anyway/',
'https://jlcollinsnh.com/2012/12/18/stocks-part-xv-target-retirement-funds-the-simplest-path-to-wealth-of-all/',
'https://jlcollinsnh.com/2019/03/03/stocks-part-xxxv-investing-for-seven-generations/',
'https://jlcollinsnh.com/2018/06/28/stocks-part-xxxiv-how-to-unload-your-unwanted-stocks-and-funds/',
'https://jlcollinsnh.com/2011/06/14/what-we-own-and-why-we-own-it/',
'https://jlcollinsnh.com/2013/05/29/why-your-house-is-a-terrible-investment/',
'https://www.moneyunder30.com/how-to-invest',
'https://www.moneyunder30.com/how-does-a-bond-work',
'https://www.moneyunder30.com/mutual-funds-start-investing',
'https://www.moneyunder30.com/why-the-stock-market-is-the-best-place-to-grow-your-money',
'https://www.moneyunder30.com/essential-tips-to-manage-your-401k',
'https://www.moneyunder30.com/roth-ira-or-traditional-ira-what-do-you-do',
'https://www.moneyunder30.com/2-million-to-retire',
'https://investorjunkie.com/getting-started-investing/',
'https://www.moneyunder30.com/rebalance-your-portfolio',
'https://www.moneyunder30.com/asset-allocation-for-investors-under-thirty',
'https://www.moneyunder30.com/401k-asset-allocation']