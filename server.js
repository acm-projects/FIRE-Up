require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

//use TESTING_URL for tests, FIREUP_URL for actual deployment
mongoose.connect(process.env.MULTIPLE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const userRouter = require('./routes/userRoute')
const moneyRouter = require('./routes/moneyRoute')
const returnsRouter = require('./routes/returnsRoute')
app.use('/users', userRouter)
app.use('/moneyUpdates', moneyRouter)
app.use('/returns', returnsRouter)

app.listen(3000, () => console.log('Server Started'))